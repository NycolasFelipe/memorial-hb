import { PostView } from "../../components/post-view.js";
import { Post } from "../../modules/post.js";
import editPost from "./scripts/editPost.js";
import hideError from "./scripts/hideError.js";
import initiateDropzone from "./scripts/initiateDropzone.js";
import initiateSlickSlider from "./scripts/initiateSlickSlider.js";
import initiateViewerJs from "./scripts/initiateViewerJs.js";
import resetErrors from "./scripts/resetErrors.js";
import savePost from "./scripts/savePost.js";

const postExemplo1 = new Post(
  "Natal da Família",
  "Rio das Ostras",
  `Consequat labore esse aliqua est non consectetur eiusmod et veniam adipisicing reprehenderit qui.
  Elit ad minim non nostrud reprehenderit.
  Consectetur in culpa amet eiusmod.`,
  "Esse fim de ano foi incrível."
);
const postExemplo2 = new Post(
  "Ano novo da Família",
  "Resende",
  `Officia Lorem qui dolore amet occaecat nulla labore ea laborum nulla exercitation.
  Eiusmod veniam nulla laboris.
  Irure dolore et reprehenderit Lorem.
  Cillum in quis duis velit ex elit aliquip elit tempor fugiat occaecat.`,
  "Esse fim de ano foi incrível."
);
let posts = [postExemplo1, postExemplo2];
new PostView(posts).render();
//$("#postCreate button").click();

//Initiate Slick slider
initiateSlickSlider();

//Initiate ViewerJS
initiateViewerJs();

//Initiate Dropzone
initiateDropzone();

//Reseta mensagens de erro ao sair do modal de edição
$.each([$("#postEditCancel"), $("#postEditModal .btn-close")], (i, e) => resetErrors(i, e));

//Popula modal com as informações da publicação a ser editada
$(".post-button-edit").click((e) => editPost(e));

//Salva edições feitas na publicação
$("#postEditSave").click(() => savePost());

//Esconde mensagem de erro quando clicada
$("#postEditModal .error").click((e) => hideError(e));