// Esta funcion permite previsualizar la imagen en un formulario 
function previewImage(event) {
  const preview = document.getElementById("preview");
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    preview.src = event.target.result;
    preview.style.display = "block";
  };

  reader.readAsDataURL(file);
}
