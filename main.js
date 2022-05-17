$(window).on("load", function () {
  $("#loader").fadeOut(1000);
});

const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navA");

window.onscroll = () => {
  if (window.scrollY > 0 && window.scrollY < 850) {
    navbar.classList.add("navbar-active1");
    for (const navAA of navLinks) {
      navAA.classList.add("navA-active2");
    }
  } else {
    navbar.classList.remove("navbar-active1");
    for (const navAA of navLinks) {
      navAA.classList.remove("navA-active");
      navAA.classList.remove("navA-active2");
    }
  }

  if (window.scrollY > 850) {
    navbar.classList.add("navbar-active");

    for (const navAA of navLinks) {
      navAA.classList.remove("navA-active2");
      navAA.classList.add("navA-active");
    }
  } else {
    navbar.classList.remove("navbar-active");
    for (const navAA of navLinks) {
      navAA.classList.remove("navA-active");
      navAA.classList.remove("navA-active2");
    }
  }
};

window.addEventListener("load", function () {
  new Glider(document.querySelector(".carousel__lista"), {
    slideToShow: 1,
    slideToScroll: 1,
    dots: ".carousel__indicadores",
    arrows: {
      prev: ".flechaA",
      next: ".flechaD",
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 100,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

ScrollReveal().reveal(".tittleVertical", {
  duration: 5000,
  origin: "bottom",
  distance: "150px",
});
ScrollReveal().reveal(".tittle", {
  duration: 2500,
  origin: "top",
  distance: "50px",
});
ScrollReveal().reveal(".textBehind", {
  duration: 5000,
  origin: "left",
  distance: "200px",
});

ScrollReveal().reveal(".gridColumnService", { duration: 2000 });
// ScrollReveal().reveal('.serviceCards1', {
//     origin: 'left',
//     distance: '100px',
//     duration: 3000
// });
// ScrollReveal().reveal('.serviceCards2', {
//     origin: 'top',
//     distance: '100px',
//     duration: 4000
// });
// ScrollReveal().reveal('.serviceCards3', {
//     origin: 'right',
//     distance: '100px',
//     duration: 3000
// });

ScrollReveal().reveal(".gridColumnTechnology", { duration: 2000 });
ScrollReveal().reveal(".tablaTechnology", {
  origin: "left",
  distance: "100px",
  duration: 3000,
});
// ScrollReveal().reveal('.img', {
//     origin: 'right',
//     distance: '100px',
//     duration: 5000
// });

ScrollReveal().reveal(".gridColumnImpact", { duration: 2000 });
ScrollReveal().reveal(".iconImpact1", {
  origin: "top",
  distance: "30px",
  duration: 1500,
});
ScrollReveal().reveal(".iconImpact2", {
  origin: "top",
  distance: "30px",
  duration: 2500,
});
ScrollReveal().reveal(".iconImpact3", {
  origin: "top",
  distance: "30px",
  duration: 3500,
});

ScrollReveal().reveal(".gridColumnNews", { duration: 2000 });
ScrollReveal().reveal(".tableNews1", {
  origin: "left",
  distance: "80px",
  duration: 2000,
});
// ScrollReveal().reveal('.tableNews2', {
//     origin: 'right',
//     distance: '80px',
//     duration: 3000
// });

ScrollReveal().reveal(".gridColumnTest", { duration: 2000 });
