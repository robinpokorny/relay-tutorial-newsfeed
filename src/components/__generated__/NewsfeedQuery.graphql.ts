/**
 * @generated SignedSource<<bf2c9cd8e62c744de0c65b4c38cbccc5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Category = "ALL" | "COOKING" | "EDUCATION" | "NEWS" | "%future added value";
export type NewsfeedQuery$variables = {
  category?: Category | null | undefined;
};
export type NewsfeedQuery$data = {
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"NewsfeedContentsFragment">;
  } | null | undefined;
};
export type NewsfeedQuery = {
  response: NewsfeedQuery$data;
  variables: NewsfeedQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "category"
  }
],
v1 = {
  "kind": "Variable",
  "name": "category",
  "variableName": "category"
},
v2 = {
  "kind": "Literal",
  "name": "first",
  "value": 3
},
v3 = [
  (v1/*: any*/),
  (v2/*: any*/)
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v6 = [
  (v2/*: any*/)
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasNextPage",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "endCursor",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "NewsfeedQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "args": [
              (v1/*: any*/)
            ],
            "kind": "FragmentSpread",
            "name": "NewsfeedContentsFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NewsfeedQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v3/*: any*/),
            "concreteType": "StoriesConnection",
            "kind": "LinkedField",
            "name": "newsfeedStories",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "StoriesConnectionEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Story",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "title",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "summary",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "poster",
                        "plural": false,
                        "selections": [
                          (v5/*: any*/),
                          {
                            "kind": "TypeDiscriminator",
                            "abstractKey": "__isActor"
                          },
                          (v4/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "name",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Image",
                            "kind": "LinkedField",
                            "name": "profilePicture",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "height",
                                    "value": 60
                                  },
                                  {
                                    "kind": "Literal",
                                    "name": "width",
                                    "value": 60
                                  }
                                ],
                                "kind": "ScalarField",
                                "name": "url",
                                "storageKey": "url(height:60,width:60)"
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Image",
                        "kind": "LinkedField",
                        "name": "thumbnail",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "height",
                                "value": 400
                              },
                              {
                                "kind": "Literal",
                                "name": "width",
                                "value": 400
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "url",
                            "storageKey": "url(height:400,width:400)"
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "likeCount",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "doesViewerLike",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": (v6/*: any*/),
                        "concreteType": "CommentsConnection",
                        "kind": "LinkedField",
                        "name": "comments",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CommentsConnectionEdge",
                            "kind": "LinkedField",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Comment",
                                "kind": "LinkedField",
                                "name": "node",
                                "plural": false,
                                "selections": [
                                  (v4/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "text",
                                    "storageKey": null
                                  },
                                  (v5/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v7/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v8/*: any*/)
                        ],
                        "storageKey": "comments(first:3)"
                      },
                      {
                        "alias": null,
                        "args": (v6/*: any*/),
                        "filters": null,
                        "handle": "connection",
                        "key": "StoryCommentsSectionFragment_comments",
                        "kind": "LinkedHandle",
                        "name": "comments"
                      },
                      (v5/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v7/*: any*/)
                ],
                "storageKey": null
              },
              (v8/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v3/*: any*/),
            "filters": [
              "category"
            ],
            "handle": "connection",
            "key": "NewsfeedContentsFragment_newsfeedStories",
            "kind": "LinkedHandle",
            "name": "newsfeedStories"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f7e5d5d10fbc3ffb4139004e280c5f25",
    "id": null,
    "metadata": {},
    "name": "NewsfeedQuery",
    "operationKind": "query",
    "text": "query NewsfeedQuery(\n  $category: Category\n) {\n  viewer {\n    ...NewsfeedContentsFragment_15BdcN\n  }\n}\n\nfragment CommentFragment on Comment {\n  text\n}\n\nfragment ImageFragment_1YYarZ on Image {\n  url(width: 400, height: 400)\n}\n\nfragment ImageFragment_3XLoCc on Image {\n  url(width: 60, height: 60)\n}\n\nfragment NewsfeedContentsFragment_15BdcN on Viewer {\n  newsfeedStories(first: 3, category: $category) {\n    edges {\n      node {\n        id\n        ...StoryFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment PosterBylineFragment on Actor {\n  __isActor: __typename\n  id\n  name\n  profilePicture {\n    ...ImageFragment_3XLoCc\n  }\n}\n\nfragment StoryCommentsComposerFragment on Story {\n  id\n}\n\nfragment StoryCommentsSectionFragment on Story {\n  comments(first: 3) {\n    edges {\n      node {\n        id\n        ...CommentFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n  ...StoryCommentsComposerFragment\n  id\n}\n\nfragment StoryFragment on Story {\n  title\n  summary\n  poster {\n    __typename\n    ...PosterBylineFragment\n    id\n  }\n  thumbnail {\n    ...ImageFragment_1YYarZ\n  }\n  ...StoryLikeButtonFragment\n  ...StoryCommentsSectionFragment\n}\n\nfragment StoryLikeButtonFragment on Story {\n  id\n  likeCount\n  doesViewerLike\n}\n"
  }
};
})();

(node as any).hash = "3707bdd9cf7602c8d28214420c6c0458";

export default node;
