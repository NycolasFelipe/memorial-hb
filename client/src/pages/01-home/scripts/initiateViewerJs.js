function initiateViewerJs() {
  $(document).ready(function () {
    const gallery = new Viewer(document.getElementById("posts"), {
      navbar: false,
      title: false,
      toolbar: false,
      movable: false,
    });
  });
}

export default initiateViewerJs;