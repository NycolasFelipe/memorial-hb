function initiateDropzone() {
  const dropzone = new Dropzone("#dropzoneDragArea", {
    previewsContainer: ".dropzone-previews",
    maxFiles: 6,
    uploadMultiple: true,
    url: "/file/post"
  });
}

export default initiateDropzone;