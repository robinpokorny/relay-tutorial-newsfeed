import * as React from "react";
import { graphql, usePaginationFragment } from "react-relay";
import type { StoryCommentsSectionFragment$key } from "./__generated__/StoryCommentsSectionFragment.graphql";
import Comment from "./Comment";
import LoadMoreCommentsButton from "./LoadMoreCommentsButton";
import StoryCommentsComposer from "./StoryCommentsComposer";
import SmallSpinner from "./SmallSpinner";

export type Props = {
  story: StoryCommentsSectionFragment$key;
};

const StoryCommentsSectionFragment = graphql`
  fragment StoryCommentsSectionFragment on Story
  @refetchable(queryName: "StoryCommentsSectionPaginationQuery")
  @argumentDefinitions(
    cursor: { type: "String" }
    count: { type: "Int", defaultValue: 3 }
  ) {
    comments(after: $cursor, first: $count)
      @connection(key: "StoryCommentsSectionFragment_comments") {
      edges {
        node {
          id
          ...CommentFragment
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
    ...StoryCommentsComposerFragment
  }
`;

export default function StoryCommentsSection({ story }: Props) {
  const { data, loadNext, hasNext, isLoadingNext } = usePaginationFragment(
    StoryCommentsSectionFragment,
    story
  );

  const onLoadMore = () => {
    loadNext(3);
  };

  return (
    <div>
      <StoryCommentsComposer story={data} />
      {data.comments.edges.map((edge) => (
        <Comment key={edge.node.id} comment={edge.node} />
      ))}
      {hasNext && (
        <LoadMoreCommentsButton onClick={onLoadMore} disabled={isLoadingNext} />
      )}
      {isLoadingNext && <SmallSpinner />}
    </div>
  );
}
