$(document).ready(() => {
  $("#loginPassword span").on("click", (e) => {
    e.preventDefault();
    if ($("#loginPassword input").attr("type") === "text") {
      $("#loginPassword input").attr("type", "password");
      $("#loginPassword i").addClass("bi-eye-slash");
      $("#loginPassword i").removeClass("bi-eye-fill");
    } else if ($("#loginPassword input").attr("type") === "password") {
      $("#loginPassword input").attr("type", "text");
      $("#loginPassword i").removeClass("bi-eye-slash");
      $("#loginPassword i").addClass("bi-eye-fill");
    }
  });
});