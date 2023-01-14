 let navigationElement = document.getElementById("navBar");
 let headerBarElement = document.getElementById("toggleBar");

 headerBarElement.addEventListener("click",function(){
     navigationElement.classList.toggle("active");
 });