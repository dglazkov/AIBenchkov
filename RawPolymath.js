/**
 * @license
 * Copyright (c) 2023 sjmiles All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
({

  async shouldUpdate({ endpoint, vector }, state) {
    log(`state`, state);
    if (!endpoint) {
      log(`need input: "endpoint: {server, apiKey}"`);
    }
    return (vector && endpoint);
  },

  async update({ endpoint, vector }, state) {
    const query_embedding = btoa(String.fromCharCode(
      ...new Uint8Array(new Float32Array(vector).buffer)));
    const form = new FormData();
    form.append('version', '1');
    form.append('query_embedding_model', 'openai.com:text-embedding-ada-002');
    form.append('access_token', '');
    form.append('query_embedding', query_embedding);
    form.append('sort', 'similarity');
    return await (await fetch(endpoint, {
      method: 'POST',
      body: form
    })).json();
  }

});

