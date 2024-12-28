function upDate(previewPic) {
  
    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.textContent = previewPic.alt;
  }

  function undo() {
   
    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "none";
    imageDiv.textContent = "Hover over an image below to display here.";
  }