import * as React from "react";
import { graphql, usePreloadedQuery, useFragment } from "react-relay";
import type { PosterDetailsHovercardContentsQuery as QueryType } from "./__generated__/PosterDetailsHovercardContentsQuery.graphql";
import type { PosterDetailsHovercardContentsBodyFragment$key } from "./__generated__/PosterDetailsHovercardContentsBodyFragment.graphql";
import Image from "./Image";
import Timestamp from "./Timestamp";

export const PosterDetailsHovercardContentsQuery = graphql`
  query PosterDetailsHovercardContentsQuery($posterID: ID!) {
    node(id: $posterID) {
      ... on Actor {
        ...PosterDetailsHovercardContentsBodyFragment
      }
    }
  }
`;

type Props = {
  queryRef: any;
};

export default function PosterDetailsHovercardContents({
  queryRef,
}: Props): React.ReactElement {
  const data = usePreloadedQuery<QueryType>(
    PosterDetailsHovercardContentsQuery,
    queryRef
  );
  return (
    <div className="posterHovercard">
      <PosterDetailsHovercardContentsBody poster={data.node} />
    </div>
  );
}

const PosterDetailsHovercardContentsBodyFragment = graphql`
  fragment PosterDetailsHovercardContentsBodyFragment on Actor {
    id
    name
    joined
    profilePicture {
      ...ImageFragment @arguments(width: 128, height: 128)
    }
    ... on Person {
      location {
        name
      }
    }
    ... on Organization {
      organizationKind
    }
  }
`;

function PosterDetailsHovercardContentsBody({
  poster,
}: {
  poster: PosterDetailsHovercardContentsBodyFragment$key;
}) {
  const data = useFragment(PosterDetailsHovercardContentsBodyFragment, poster);
  return (
    <>
      <Image
        image={data.profilePicture}
        width={128}
        height={128}
        className="posterHovercard__image"
      />
      <div className="posterHovercard__name">{data.name}</div>
      <ul className="posterHovercard__details">
        <li>
          Joined <Timestamp time={data.joined} />
        </li>
        {data.location && <li>{data.location.name}</li>}
        {data.organizationKind && (
          <li>Organization Type: {data.organizationKind}</li>
        )}
      </ul>
      <div className="posterHovercard__buttons">
        <button>Friend</button>
        <button>Message</button>
      </div>
    </>
  );
}
