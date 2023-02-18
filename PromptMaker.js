({

  async shouldUpdate({ bits, query, template }, state) {
    // if (!bits) {
    //   log('need input: "bits"');
    // } else log(bits);
    // if (!query) {
    //   log('need input: "query"');
    // } else log(query);
    return bits && query && template;
  },

  async update({ bits, query, template }, state) {
    // a really crappy template literal parser
    const get = (path, obj, fb = `$\{${path}}`) => {
      return path.split('.').reduce((res, key) => res[key] || fb, obj);
    }

    const parse = (template, map, fallback) => {
      return template.replace(/\$\{.+?}/g, (match) => {
        const path = match.substr(2, match.length - 3).trim();
        return get(path, map, fallback);
      });
    }

    const context = bits.map(bit => bit.text).join('\n');
    const prompt = parse(template, { context, query });

    return { prompt };
  }

});
