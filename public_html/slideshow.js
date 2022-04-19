const images = ["ep1.jpg","ep2.jpg","ep3.jpg","ep4.jpg","ep5.jpg","ep6.jpg"];
let imgIndex = 0;

const changeImg = (indexDiff) => {
  imgIndex += indexDiff;
  if(imgIndex < 0) imgIndex = images.length - 1;
  if(imgIndex >= images.length) imgIndex = 0;

  document.querySelector("img").src = images[imgIndex];
  document.querySelector("p").innerText = imgIndex + 1 + "/6";
}
