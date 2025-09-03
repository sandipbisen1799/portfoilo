const theme= document.querySelector('theme')


var typeData = new Typed(".role", {
    strings: [
      "Full Stack Developer",
      "Web Developer",
      "UI–UX Designer",
      "Backend Developer",
      "Coder"
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
  });
  let mode= "white"
  function mode(event
 
  ){
    if(mode==='white'){
      theme.classList.add('white')
   theme.classList.remove('black')

    }
    if(mode==='black'){
      theme.classList.remove('white')
      theme.classList.add('black')
    }

  }