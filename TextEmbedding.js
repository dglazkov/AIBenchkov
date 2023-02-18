/**
 * @license
 * Copyright (c) 2023 sjmiles All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
({
  initialize(inputs, state) {
    const server = 'https://openai.iamthearchitect.workers.dev/embed/';
    const post = (url, body) => fetch(url, {method: 'POST', body: JSON.stringify(body)});
    state.embed = async (text) => {
      const response = await (await post(server, text)).json();
      return response.data[0].embedding;
    };
  },
  shouldUpdate({/*apiKey,*/ text}) {
    return /*apiKey &&*/ text;
  },
  async update({text}, state) {
    const dirty = (text && text !== state.text);
    state.text === text;
    if (dirty) {
      log(`working on [${text}]`);
      const result = await state.embed(text);
      log(`got vector`);
      return {vector: result};
    }
  }
});
  