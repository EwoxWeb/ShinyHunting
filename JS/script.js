var imgnum=[];

function changeColor1(mid){ 
  if(!imgnum[mid])document.getElementById("color"+mid).style.backgroundColor = "#ffc800";
  else document.getElementById("color"+mid).style.backgroundColor = "#333333";
  imgnum[mid] = !imgnum[mid];
}

function sauverList(){
	alert(imgnum);
}