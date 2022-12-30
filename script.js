 let navigationElement = document.getElementById('navBar');
 let headerLogoElement = document.getElementById('toggleBar');

 navigationElement.addEventListener('click',function(){
     headerLogoElement.classList.toggle('active');
 })