function validForm() {
  let valid = true;
  const title = $("#postEditModalTitle");
  const location = $("#postEditModalLocation");

  if (title.val().length < 5) {
    title.parent().find(".error").removeClass("d-none");
    valid = false;
  } else {
    title.parent().find(".error").addClass("d-none");
  }
  if (location.val().length < 5) {
    location.parent().find(".error").removeClass("d-none");
    valid = false;
  } else {
    location.parent().find(".error").addClass("d-none");
  }

  return valid;
}

export default validForm;