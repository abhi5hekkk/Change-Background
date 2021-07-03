const background = () => {
    const randCol = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randCol;
    hexId.innerHTML = "HEX-Color: " + "#" + randCol;
  };
  
  changeColor.addEventListener("click", background);
//   background();