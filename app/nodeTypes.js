import { TextEmbeddingNode } from "../TextEmbeddingNode.js";
import { RawPolymathNode } from "../RawPolymathNode.js";
import { PromptMakerNode } from '../PromptMakerNode.js';
import { UbermathNode } from '../UbermathNode.js';

const localTypes = {
  TextEmbeddingNode,
  RawPolymathNode,
  PromptMakerNode,
  UbermathNode
};

const lib = `${globalThis.config.xenonPath}/Library`;
export const load = async paths => (await Promise.all(paths.map(p => import(`${lib}/${p}`)))).reduce((e, m) => ({ ...e, ...m }), {});

const etc = await load([
  'Arc/ArcNode.js',
  'Layout/LayoutNodes.js',
  'Layout/ItemGridNode.js',
  'Layout/GridLayoutNode.js',
  'Layout/MaterialTabPagesNode.js',
  'UX/UXToolbarNode.js',
  /**/
  'OpenAI/OpenAITextNode.js',
  'OpenAI/OpenAIImageNode.js',
  'Polymath/PolymathNode.js',
  'Polymath/PolymathLearnerNode.js',
  'AI/DelmerBotNode.js',
  'AI/PersonaPanelNode.js',
  'AI/BotInterpreterNode.js',
  'AI/ActionInterpreterNode.js',
  'AI/ActionHandlerNode.js',
  'AI/PersonaChatNode.js',
  /**/
  'Data/DisplayNode.js',
  'Fields/BooleanFieldNode.js',
  'Fields/LineObjectNode.js',
  'Fields/MultilineTextFieldNode.js',
  'Fields/SelectFieldNode.js',
  'Fields/TextFieldNode.js',
  'Fields/StaticTextNode.js',
  /**/
  'Media/DeviceUxNode.js',
  'Media/StreamNode.js',
  'Media/CameraNode.js',
  'Media/ImageNode.js',
  'Media/ImageCompositeNode.js',
  'Media/AudioNode.js',
  'Pixabay/PixabayNode.js',
  /**/
  'Speech/ListenNode.js',
  'Speech/SpeakNode.js',
  /**/
  'Fx/DetectRaisedHandNode.js',
  'Fx/FaceMeshStickerNode.js',
  //'Mediapipe/PoseNode.js',
  'Mediapipe/FaceMeshNode.js',
  'Mediapipe/FaceMeshDisplayNode.js',
  'Mediapipe/SelfieSegmentationNode.js',
  'PixiJs/PixiJsNodes.js',
  'Shader/FragmentShaderNode.js',
  /**/
  'Firebase/FirebaseStorageNode.js',
  /**/
  'Auth/AuthNode.js',
  /**/
  'Data/CatNode.js',
  'Data/DataNode.js',
  'Data/DataStreamNode.js',
  'JSONata/JSONataNode.js',
  'Librarian/LibrarianNode.js',
  'LocalStorage/LocalStorageNode.js',
  /**/
  'Node/NodeDesignerNode.js',
  'Node/NodeCatalogNode.js',
  'Node/NodeEditorNode.js',
  'Node/NodeTreeNode.js',
  'Node/NodeInspectorNode.js',
  'Node/NodeCreatorNode.js',
  'Node/NodeTypesNode.js',
  'NodeGraph/GraphLibraryNode.js',
  'NodeGraph/GraphToolbarNode.js',
  /**/
  'Lobby/LobbyNode.js',
  'Lobby/ClientNode.js',
]);

const nodeTypes = {
  ...etc,
  ...localTypes
};
const categories = {};

globalThis.nodeTypes = nodeTypes;

export { nodeTypes, categories };