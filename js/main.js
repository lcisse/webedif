
var nav = document.querySelector('nav');

          window.addEventListener('scroll',() =>{
            if (window.scrollY > 40) {
              //back.classList.add('scroll');
              //back.style.backgroundColor = "red";
              nav.classList.add('bg-light', 'shadow'); 
              nav.classList.add('fixed-top', 'shadow');
            }else{
              //back.classList.remove('scroll');
              //back.style.backgroundColor = "green";
              nav.classList.remove('bg-light', 'shadow');
              nav.classList.remove('fixed-top', 'shadow');
            }
          })