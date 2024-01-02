const wapperBox = document.querySelector(".wapper");
const backgrounChangeColorButton = document.querySelector(".color-btn");
const colorCodeText = document.querySelector(".text");

backgrounChangeColorButton.addEventListener("click", () => {
  colorCodeText.innerHTML = "";
  const rgbValueArray = [255, 255, 255];
  const updatedColorArray = [];
  let rendomColor;
  for (let i = 0; i < rgbValueArray.length; i++) {
    rendomColor = Math.round(Math.random() * rgbValueArray[i]);
    updatedColorArray.push(rendomColor);
  }
  const [red, green, blue] = updatedColorArray;
  wapperBox.style.background = `rgb(${red},${green},${blue})`;
  colorCodeText.innerHTML += `Color Code RGB(${red},${green},${blue})`;
});
