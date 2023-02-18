// use Library path from configuration

const Library = `${globalThis.config.xenonPath}/Library`;

// import modules from the XenonJs Library
// the 'load' function imports modules in parallel

const load = async paths => (await Promise.all(paths.map(p => import(`${Library}/${p}`)))).reduce((e, m) =>({...e, ...m}),{});

globalThis.services = await load([
  'App/HistoryService.js',
  'Arc/ArcService.js',
  'Firebase/FirebaseAuthService.js',
  'Goog/GoogleApisService.js',
  'Lobby/LobbyService.js',
  'Lobby/ClientService.js',
  'Media/MediaService.js',
  'Mediapipe/FaceMeshService.js',
  'Mediapipe/SelfieSegmentationService.js',
  // 'Mediapipe/PoseService.js',
  'Polymath/PolymathService.js',
  'Shader/ShaderService.js',
  'Threejs/ThreejsService.js',
  'TensorFlow/TensorFlowService.js',
  'TensorFlow/CocoSsdService.js'
]);
