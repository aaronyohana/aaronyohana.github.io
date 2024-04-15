//Music Player
const sound = new Audio()

function playMusic() {
    sound.src="media/duvet.mp3"
    sound.play()
}

//Sticky Nav
window.onscroll = function() {myFunction()}; 
      
    var navlist = document.getElementById("main-menu"); 
    var sticky = navlist.offsetTop; 
      
    /* Function to stick the nav bar */
    function myFunction() { 
        if (window.pageYOffset >= sticky) { 
            navlist.classList.add("sticky") 
        }  
          else { 
              navlist.classList.remove("sticky"); 
          } 
    } 