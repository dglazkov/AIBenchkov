try {
  // find a graph in a collection by $meta.name
  const findGraph = name => graphs.find(g => g?.$meta?.name === name);
  // try graphs from localStorage
  let graphs = JSON.parse(localStorage.getItem('user/xenon/0.1.0/graphs') ?? '[]');
  // GraphMaker?
  let graph = findGraph('GraphMaker');
  if (!graph) {
    // try graphs from firebase
    const response = await fetch('https://xenon-js-default-rtdb.firebaseio.com/graphs.json');
    // get the text first, it's unclean
    const json = await response.text();
    // clean the text, convert to JSON, force into Array
    graphs = Object.values(JSON.parse(json.replace(/%/g, '$')));
    // GraphMaker?
    graph = findGraph('GraphMaker')
  }
  if (graph) {
    graph.nodes.GraphToolbarNode17924.props.graph = null;
    app.graph = graph;
  } else {
    alert('Sorry, could not find GraphMaker Graph');
  }
} catch(x) {
  console.error(x);
}
