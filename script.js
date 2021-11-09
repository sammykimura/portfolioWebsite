let mushrooms=document.getElementById('mushrooms');
let imgWrap= document.getElementsByClassName('imgWrap')

function expandPic(){
  mushrooms.style.width="500px";
  console.log("width changed");
}

mushrooms.addEventListener('mouseenter',expandPic());


function shrinkPic(){
  mushrooms.style.width="90%";
  console.log("width changed back");
}


mushrooms.addEventListener('mouseout',shrinkPic());


function expandFrame(){
  imgWrap.style.width="500px";
  console.log("frame expanded")
}
imgWrap.addEventListener('mouseenter',expandFrame());
