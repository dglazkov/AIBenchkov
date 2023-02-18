/**
 * @license
 * Copyright (c) 2023 sjmiles All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
export const RawPolymathNode = {
  $meta: {
    id: 'RawPolymathNode',
    displayName: 'Raw Polymath',
    category: 'AI'
  },
  $stores: {
    endpoint: {
      $type: 'PolymathEndpoint'
    },
    vector: {
      $type: 'EmbeddingVector'
    },
    bits: {
      $type: 'Bits',
      noinspect: true
    }
  },
  RawPolymath: {
    $kind: '$app/RawPolymath',
    $inputs: ['endpoint', 'vector'],
    $outputs: ['bits']
  }
};