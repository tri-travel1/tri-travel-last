
function toggleSidebar(){
  var sidebar=document.querySelector('.sidebar');
  sidebar.classList.toggle('open');
}


const checkbox = document.getElementById("status");

// Add event listener to the switch
checkbox.addEventListener('change', function() {
  // Check if the switch is checked or not
  if (checkbox.checked) {
    // Enable dark mode
    enableDarkMode();
  } else {
    // Disable dark mode
    disableDarkMode();
  }
});

// Function to enable dark mode
function enableDarkMode() {
  var darkModeButton = document.querySelector('.dark-body');
  var footer = document.querySelector('.foot-cont');
  var body = document.querySelector('.middle');

  var tassk = document.querySelectorAll('.task');
  for (var i = 0; i < tassk.length; i++) {
    tassk[i].classList.add("dark-body");
  }
  footer.classList.add("dark-body");
  body.classList.add("dark-body");


  // Store the dark mode state in local storage
  localStorage.setItem('darkMode', 'enabled');
}

// Function to disable dark mode
function disableDarkMode() {
  var body = document.querySelector('.middle');
  var footer = document.querySelector('.foot-cont');

  body.classList.remove('dark-body');
  footer.classList.remove('dark-body');
  
  var tassk = document.querySelectorAll('.task');
  for (var i = 0; i < tassk.length; i++) {
    tassk[i].classList.remove("dark-body");
  }

  // Remove the dark mode state from local storage
  localStorage.removeItem('darkMode');
}

// Check if the dark mode state is stored in local storage
var darkModeState = localStorage.getItem('darkMode');

// Set the initial state of the dark mode switch based on the stored value
if (darkModeState === 'enabled') {
  checkbox.checked = true;
  enableDarkMode();
} else {
  checkbox.checked = false;
  disableDarkMode();
}


const bars = document.querySelector(".bar"),
close = document.querySelector(".close"),
menu = document.querySelector(".menu");

bars.addEventListener("click", () => {
    menu.classList.add("active");
    gsap.from(".menu", {
        opacity: 0,
        duration: .3
    })

    gsap.from(".menu ul", {
        opacity: 0,
        x: -300
    })
});

close.addEventListener("click", () => {
    menu.classList.remove("active")
});

function animateContent(selector) {
    selector.forEach((selector) => {
        gsap.to(selector, {
            y: 30,
            duration: 0.1,
            opacity: 1,
            delay: 0.2,
            stagger: 0.2,
            ease: "power2.out",
        });
    });
}

function scrollTirggerAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 50%",
            end: "top 80%",
            scrub: 1,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            y: 0,
            duration: 1,
            opacity: 1,
        });
    })
}

function swipeAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 50%",
            end: "top 100%",
            scrub: 3,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            x: 0,
            duration: 1,
            opacity:1,
        });
    });
}

function galleryAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 100%",
            end: "bottom 100%",
            scrub: 1,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            y: 0,
            opacity: 1,
            duration: 1,
        });
    });
}




animateContent([".home .content h5, .home .content h1, .home .content p, .home .content .search"]);

scrollTirggerAnimation(".travel", [".travel .box1", ".travel .box2", ".travel .box3"]);

scrollTirggerAnimation(".feedback .container", [".feedback .label", ".feedback .heading", ".feedback .paragraph"]);

scrollTirggerAnimation(".article", [".article .label", ".article .heading"]);

swipeAnimation(".destinations", [".destinations .heading", ".destinations .content"])

swipeAnimation(".article", [".article .latest-article", ".article .box1", ".article .box2", ".article .box3", ".article .box4"])

galleryAnimation(".destinations .gallery", [".destinations .gallery .box1",".destinations .gallery .box2",".destinations .gallery .box3",".destinations .gallery .box4",".destinations .gallery .box5"])

galleryAnimation(".featured .gallery", [".featured .gallery .box1",".featured .gallery .box2",".featured .gallery .box3",".featured .gallery .box4"])

galleryAnimation(".feedback .voices", [".feedback .voices .box1",".feedback .voices .box2",".feedback .voices .box3",".feedback .voices .box4",".feedback .voices .box5",".feedback .voices .box6"])

