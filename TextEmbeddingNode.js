/**
 * @license
 * Copyright (c) 2023 sjmiles All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
export const TextEmbeddingNode = {
  $meta: {
    id: 'TextEmbeddingNode',
    displayName: 'Text Embedding',
    category: 'AI'
  },
  $stores: {
    // apiKey: {
    //   $type: 'String'
    // },
    text: {
      $type: 'String',
    },
    vector: {
      $type: 'EmbeddingVector',
      noinspect: true
    }
  },
  TextEmbedding: {
    $kind: '$app/TextEmbedding',
    $inputs: [/*'apiKey',*/ 'text'],
    $outputs: ['vector']
  }
};