import { PostView } from "../../components/post-view.js";
import { Post } from "../../modules/post.js";

const postExemplo1 = new Post(
  "Natal da Família",
  "Rio das Ostras",
  `Consequat labore esse aliqua est non consectetur eiusmod et veniam adipisicing reprehenderit qui.
  Elit ad minim non nostrud reprehenderit.
  Consectetur in culpa amet eiusmod.`,
  "Esse fim de ano foi incrível."
);
const postExemplo2 = new Post(
  "Natal da Família",
  "Rio das Ostras",
  `Consequat labore esse aliqua est non consectetur eiusmod et veniam adipisicing reprehenderit qui.
  Elit ad minim non nostrud reprehenderit.
  Consectetur in culpa amet eiusmod.`,
  "Esse fim de ano foi incrível."
);
let posts = [postExemplo1, postExemplo2];
new PostView(posts).render();

//$("#postCreate button").click();

//Slick slider
$('.post-images').slick({
  arrows: true,
  infinite: true,
  lazyLoad: true,
  prevArrow: "<button type='button' class='slick-prev pull-left btn h-100'><i class='fa fa-angle-left fs-4 text-white' aria-hidden='true'></i></button>",
  nextArrow: "<button type='button' class='slick-next pull-right btn h-100'><i class='fa fa-angle-right fs-4 text-white' aria-hidden='true'></i></button>",
});

//Viewer
$(document).ready(function () {
  const gallery = new Viewer(document.getElementById("posts"), {
    navbar: false,
    title: false,
    toolbar: false,
    movable: false,
  });
});

//Dropzone
const dropzone = new Dropzone("#dropzoneDragArea", {
  previewsContainer: ".dropzone-previews",
  maxFiles: 6,
  uploadMultiple: true,
  url: "/file/post"
});