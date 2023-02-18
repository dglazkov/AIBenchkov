/**
 * @license
 * Copyright (c) 2023 sjmiles All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
import {TextEmbeddingNode} from "./TextEmbeddingNode.js";
import {RawPolymathNode} from './RawPolymathNode.js';
import {PromptMakerNode} from './PromptMakerNode.js';
import {OpenAITextNode} from 'https://xenon-js.web.app/0.1.0/Library/OpenAI/OpenAITextNode.js';

const getAtoms = node => {
  const {$meta, $stores, ...atoms} = node;
  return atoms;
};

const TextEmbeddingAtoms = getAtoms(TextEmbeddingNode);
const RawPolymathAtoms = getAtoms(RawPolymathNode);
const PromptMakerAtoms = getAtoms(PromptMakerNode);
const OpenAITextAtoms = getAtoms(OpenAITextNode);

export const UbermathNode = {
  $meta: {
    id: 'UbermathNode',
    displayName: '(Uber) Polymath Node',
    category: 'AI'
  },
  $stores: {
    ...OpenAITextNode.$stores,
    ...RawPolymathNode.$stores,
    ...TextEmbeddingNode.$stores,
    ...PromptMakerNode.$stores,
    vector: {
      $type: 'EmbeddingVector',
      noinspect: true
    },
    bits: {
      $type: 'Bits',
      noinspect: true
    },
    context: {
      $type: 'String',
      $value: ' '
    }
  },
  ...TextEmbeddingAtoms,
  ...RawPolymathAtoms,
  ...PromptMakerAtoms,
  ...OpenAITextAtoms
};

console.log(UbermathNode);