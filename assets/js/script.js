// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
   if (localStorage.getItem('theme') === 'theme-dark'){
       setTheme('theme-light');
   } else {
       setTheme('theme-dark');
   }
}

function goToIndex() {
    window.location.href = 'index.html';
  }


function changeImage() {

    if (document.getElementById("imgClickAndChange").src == "https://i.ibb.co/1MXLbBW/moon.png") 
    {
        document.getElementById("imgClickAndChange").src = "https://i.ibb.co/hFG3LzS/sunny.png";
    }
    else 
    {
        document.getElementById("imgClickAndChange").src = "https://i.ibb.co/1MXLbBW/moon.png";
    }
}


// Immediately invoked function to set the theme on initial load
(function () {
   if (localStorage.getItem('theme') === 'theme-dark') {
       setTheme('theme-dark');
   } else {
       setTheme('theme-light');
   }


//form

    function showForm() {
        document.getElementById('google-form').style.display = 'block';
    }
    
    
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}

window.addEventListener('scroll', scrollActive)
    /*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('#Photo, #Photo-2, #Name, #Description, iframe',{}); 
sr.reveal('#title, #linksbutton, #footertext',{delay: 400}); 

})();

// DISABLE RIGHT CLICK

// Disable right-click context menu and show modal
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    document.getElementById('warningModal').style.display = 'block';
});

// Close modal on button click
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('warningModal').style.display = 'none';
});

// Close modal on Escape key press
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.getElementById('warningModal').style.display = 'none';
    }
});

// Disable F12, Ctrl + Shift + I, Ctrl + U and show modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && e.key === 'I') || 
        (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
        document.getElementById('warningModal').style.display = 'block';
    }
});

// Close modal when clicking outside of it
window.addEventListener('click', function(e) {
    const modal = document.getElementById('warningModal');
    if (modal.style.display === 'block' && !modal.contains(e.target)) {
        modal.style.display = 'none';
    }
});



