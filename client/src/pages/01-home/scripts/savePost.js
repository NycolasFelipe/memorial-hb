import validForm from "./validForm.js";

function savePost() {
  if (validForm()) {
    const title = $("#postEditModalTitle").val();
    const location = $("#postEditModalLocation").val();
    const description = $("#postEditModalDescription").val();
    const postId = $("#postEditId").text();
    const post = $(`#${postId}`);
    post.find(".post-header h2").text(title);
    post.find(".post-location").text(location);
    post.find(".post-description p").text(description);
    $('#postEditModal').modal('hide');
  };
}

export default savePost;