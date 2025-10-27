import * as React from "react";
import { graphql, useLazyLoadQuery, usePaginationFragment } from "react-relay";
import type { NewsfeedQuery as NewsfeedQueryType } from "./__generated__/NewsfeedQuery.graphql";
import type { NewsfeedContentsFragment$key } from "./__generated__/NewsfeedContentsFragment.graphql";
import Story from "./Story";
import InfiniteScrollTrigger from "./InfiniteScrollTrigger";

const NewsfeedQuery = graphql`
  query NewsfeedQuery {
    viewer {
      ...NewsfeedContentsFragment
    }
  }
`;

const NewsfeedContentsFragment = graphql`
  fragment NewsfeedContentsFragment on Viewer
  @refetchable(queryName: "NewsfeedContentsPaginationQuery")
  @argumentDefinitions(
    cursor: { type: "String" }
    count: { type: "Int", defaultValue: 3 }
  ) {
    newsfeedStories(after: $cursor, first: $count)
      @connection(key: "NewsfeedContentsFragment_newsfeedStories") {
      edges {
        node {
          id
          ...StoryFragment
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export default function Newsfeed() {
  const queryData = useLazyLoadQuery<NewsfeedQueryType>(NewsfeedQuery, {});
  return <NewsfeedContents queryData={queryData.viewer} />;
}

function NewsfeedContents({
  queryData,
}: {
  queryData: NewsfeedContentsFragment$key;
}) {
  const { data, loadNext, hasNext, isLoadingNext } = usePaginationFragment(
    NewsfeedContentsFragment,
    queryData
  );

  function onEndReached() {
    loadNext(1);
  }

  return (
    <div className="newsfeed">
      {data.newsfeedStories.edges.map((edge) => (
        <Story key={edge.node.id} story={edge.node} />
      ))}

      <InfiniteScrollTrigger
        onEndReached={onEndReached}
        isLoadingNext={isLoadingNext}
        hasNext={hasNext}
      />
    </div>
  );
}
