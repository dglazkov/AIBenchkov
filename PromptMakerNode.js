export const PromptMakerNode = {
  $meta: {
    id: 'PromptMakerNode',
    displayName: 'Prompt Maker',
    category: 'AI'
  },
  $stores: {
    bits: {
      $type: 'Bits',
    },
    query: {
      $type: `String`,
    },
    template: {
      $type: 'MultilineText',
      $value: 'Answer the question as truthfully as possible using the provided context, and if don\'t have the answer, say in a friendly tone that this Polymath instance does not contain the answer and suggest looking for this information elsewhere.\n\nContext:\n${context} \n\nQuestion:\n${query}\n\nAnswer:'
    },
    prompt: {
      $type: 'MultilineText',
      noinspect: true
    }
  },
  PromptMaker: {
    $kind: '$app/PromptMaker',
    $inputs: ['bits', 'query', 'template'],
    $outputs: ['prompt']
  }
};