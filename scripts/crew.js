const leftContainer = document.getElementsByClassName("left-container")[0];
const currPageId = document.getElementsByClassName("curr-page")[0];

const onResize = (screenWidth) => {
  const mainImg = document.getElementsByClassName("main-img")[0];
  const clone = mainImg.cloneNode(true);

  if (screenWidth < 468) {
    currPageId.parentNode.insertBefore(clone, currPageId.nextSibling);
    mainImg.remove();
  } else {
    console.log("origin layout");
    leftContainer.parentNode.insertBefore(clone, leftContainer.nextSibling);
    mainImg.remove();
  }
};

onResize(document.body.clientWidth);
window.addEventListener("resize", (e) => onResize(e.target.innerWidth));
