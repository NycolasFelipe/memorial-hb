function resetErrors(i, e) {
  e.on("click", () => {
    $("#postEditModal .error").addClass("d-none");
  });
}

export default resetErrors;