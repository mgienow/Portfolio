var intFrameWidth = window.innerWidth;
if (intFrameWidth<350) {
  var el=document.getElementById("nopipe");
  el.innerHTML='<p>&copy;2016 Michelle Gienow</p>';
}else {
  el.innerHTML='<p>&copy2016 Michelle Gienow    |</p>';
}
