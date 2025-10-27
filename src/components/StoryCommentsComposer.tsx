import * as React from "react";
import { graphql, useFragment, useMutation } from "react-relay";
import { ConnectionHandler } from "relay-runtime";
import type { StoryCommentsComposerFragment$key } from "./__generated__/StoryCommentsComposerFragment.graphql";
import type { StoryCommentsComposerPostMutation } from "./__generated__/StoryCommentsComposerPostMutation.graphql";

const { useState } = React;

export type Props = {
  story: StoryCommentsComposerFragment$key;
};

const StoryCommentsComposerFragment = graphql`
  fragment StoryCommentsComposerFragment on Story {
    id
  }
`;

const StoryCommentsComposerPostMutationGraphQL = graphql`
  mutation StoryCommentsComposerPostMutation(
    $text: String!
    $id: ID!
    $connections: [ID!]!
  ) {
    postStoryComment(text: $text, id: $id) {
      commentEdge @prependEdge(connections: $connections) {
        node {
          id
          ...CommentFragment
        }
      }
    }
  }
`;

export default function StoryCommentsComposer({ story }: Props) {
  const data = useFragment(StoryCommentsComposerFragment, story);
  const [text, setText] = useState("");
  const [commitMutation, isMutationInFlight] =
    useMutation<StoryCommentsComposerPostMutation>(
      StoryCommentsComposerPostMutationGraphQL
    );

  function onPost() {
    if (text.trim() === "") return;

    const connectionID = ConnectionHandler.getConnectionID(
      data.id,
      "StoryCommentsSectionFragment_comments"
    );

    commitMutation({
      variables: {
        text,
        id: data.id,
        connections: [connectionID],
      },
      onCompleted: () => {
        setText("");
      },
    });
  }

  return (
    <div className="commentsComposer">
      <TextComposer text={text} onChange={setText} onReturn={onPost} />
      <PostButton onClick={onPost} disabled={isMutationInFlight} />
    </div>
  );
}

function TextComposer({
  text,
  onChange,
  onReturn,
}: {
  text: string;
  onChange: (newValue: string) => void;
  onReturn: () => void;
}) {
  return (
    <input
      value={text}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          onReturn();
        }
      }}
    />
  );
}

function PostButton({
  onClick,
  disabled,
}: {
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button onClick={onClick} disabled={disabled}>
      Post
    </button>
  );
}
