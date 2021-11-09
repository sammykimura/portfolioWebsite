let mushrooms=document.getElementById('mushrooms');


function expandPic(){
  mushrooms.style.width="500px";
  console.log("width changed");
}

mushrooms.addEventListener('mouseenter',expandPic());
