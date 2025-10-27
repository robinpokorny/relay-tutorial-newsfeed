/**
 * @generated SignedSource<<777e673317330129da48d700e1fdbed1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ImageFragment$data = {
  readonly url: string;
  readonly " $fragmentType": "ImageFragment";
};
export type ImageFragment$key = {
  readonly " $data"?: ImageFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ImageFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "height"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "width"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "ImageFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "height",
          "variableName": "height"
        },
        {
          "kind": "Variable",
          "name": "width",
          "variableName": "width"
        }
      ],
      "kind": "ScalarField",
      "name": "url",
      "storageKey": null
    }
  ],
  "type": "Image",
  "abstractKey": null
};

(node as any).hash = "a1cc9a5f2413cf4bd1f4329374db6eac";

export default node;
