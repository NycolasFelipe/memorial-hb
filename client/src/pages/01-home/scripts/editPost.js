function editPost(e) {
  const post = $(e.currentTarget).parent().parent();
  const postId = post[0].id;
  const title = post.find(".post-header h2").text();
  const location = post.find(".post-location").text();
  const description = post.find(".post-description p").text();
  $("#postEditId").text(postId);
  $("#postEditModalTitle").val(title);
  $("#postEditModalLocation").val(location);
  $("#postEditModalDescription").val(description);
}

export default editPost;