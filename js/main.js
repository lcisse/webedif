
var nav = document.querySelector('nav');
var topbar = document.getElementById("topbar");

          window.addEventListener('scroll',() =>{
            if (window.scrollY > 60) {
              //back.classList.add('scroll');
              //back.style.backgroundColor = "red";
              topbar.classList.add('bg-light', 'shadow'); 
              topbar.classList.add('fixed-top', 'shadow');
              //topbar.classList.remove('fixed-top', 'shadow');
            }else{
              //back.classList.remove('scroll');
              //back.style.backgroundColor = "green";
              topbar.classList.remove('bg-light', 'shadow');
              topbar.classList.remove('fixed-top', 'shadow');
            }
          })