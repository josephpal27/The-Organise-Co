// Functionality For Navbar Menu Button
document.addEventListener("click", function (event) {
  const navbar = document.querySelector(".navbar-collapse");
  const toggler = document.querySelector(".navbar-toggler");

  // Check if the click is outside the navbar and it's open
  if (
    navbar.classList.contains("show") &&
    !navbar.contains(event.target) &&
    !toggler.contains(event.target)
  ) {
    // Manually hide the navbar menu
    new bootstrap.Collapse(navbar).hide();
  }
});

// -------------------------------------------------------------------------------------------------------------------------------------------
// Functionlity For Navbar Slide Down While Scrolling

// document.addEventListener("DOMContentLoaded", () => {
//     const navbar = document.querySelector(".navbar");
//     let lastScrollY = window.scrollY;

//     window.addEventListener("scroll", () => {
//       const currentScrollY = window.scrollY;

//       // If scrolling down and past 50px, hide navbar
//       if (currentScrollY > lastScrollY && currentScrollY > 50) {
//         navbar.classList.add("hidden");
//       } else {
//         // If scrolling up, show navbar
//         navbar.classList.remove("hidden");
//       }

//       // Update the last scroll position
//       lastScrollY = currentScrollY;
//     });
//   });

// -------------------------------------------------------------------------------------------------------------------------------------------

// Functionality For Back to Top Btn
let backToTopDiv = document.querySelector(".back-to-top");
let backToTopBtn = document.querySelector(".back-to-top .fa-arrow-up");

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    // Adjust the pixel value as needed
    backToTopDiv.classList.add("show");
  } else {
    backToTopDiv.classList.remove("show");
  }
});
// -------------------------------------------------------------------------------------------------------------------------------------------

// Functionality For Slider

// let currentIndex = 0;
// const slides = document.querySelector(".slides");
// const totalSlides = document.querySelectorAll(".slide").length;
// const intervalTime = 3000; // 3 seconds

// function updateSlidePosition() {
//   const newTransform = -currentIndex * 100;
//   slides.style.transform = `translateX(${newTransform}%)`;
// }

// function nextSlide() {
//   currentIndex = (currentIndex + 1) % totalSlides;
//   updateSlidePosition();
// }

// function prevSlide() {
//   currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//   updateSlidePosition();
// }

// document.querySelector(".next").addEventListener("click", nextSlide);
// document.querySelector(".prev").addEventListener("click", prevSlide);

// // Auto-slide functionality
// let slideInterval = setInterval(nextSlide, intervalTime);

// // Pause the auto-slide when hovering over the carousel
// document.querySelector(".carousel").addEventListener("mouseenter", () => {
//   clearInterval(slideInterval);
// });

// // Resume auto-slide when not hovering
// document.querySelector(".carousel").addEventListener("mouseleave", () => {
//   slideInterval = setInterval(nextSlide, intervalTime);
// });

// ---------------------------------------------------------------------------------------------------------------------------------------

// Functionality For Banner Before After Slider

const sliders = document.querySelectorAll("#before-after-slider");

sliders.forEach((slider) => {
  const before = slider.querySelector("#before-image");
  const beforeImage = before.querySelector("img");
  const resizer = slider.querySelector("#resizer");

  // Adjust overlay image width on page load
  document.addEventListener("DOMContentLoaded", function () {
    let width = slider.offsetWidth;
    beforeImage.style.width = width + "px";
  });

  // Adjust overlay image width on resize
  window.addEventListener("resize", function () {
    let width = slider.offsetWidth;
    beforeImage.style.width = width + "px";
  });

  // Handle mouse movement for dragging
  slider.addEventListener("mousemove", function (e) {
    let x = e.pageX - slider.getBoundingClientRect().left;
    if (x >= 0 && x <= slider.offsetWidth) {
      slideIt(x);
    }
  });

  // Handle touch movement for dragging
  slider.addEventListener("touchmove", function (e) {
    let x;
    for (let i = 0; i < e.changedTouches.length; i++) {
      x = e.changedTouches[i].pageX - slider.getBoundingClientRect().left;
    }
    if (x >= 0 && x <= slider.offsetWidth) {
      slideIt(x);
    }
  });

  // Function to slide the resizer and adjust the overlay
  function slideIt(x) {
    let transform = Math.max(0, Math.min(x, slider.offsetWidth));
    before.style.width = `${transform}px`;
    resizer.style.left = `${transform}px`;
  }
});


// --------------------------------------------------------------------------------------------------------------------------------------------

// Functionality For Rearrage Section

// if (window.innerWidth > 1450) {
// gsap.to(".rearrange-left img", {

//   scrollTrigger: {
//       trigger: ".rearrange",
//       scroller: 'body',
//       markers: false,
//       start: "top 80%",
//       end: "top 0%",
//       scrub: 2,
//   },

//   left: "calc(50% - 17.5%)",
//   duration: 1,
// })
// }

// if (window.innerWidth > 1450) {
// gsap.to(".rearrange-right img", {

//   scrollTrigger: {
//       trigger: ".rearrange",
//       scroller: 'body',
//       markers: false,
//       start: "top 80%",
//       end: "top 0",
//       scrub: 2,
//   },

//   right: "calc(50% - 17.5%)",
//   duration: 1,
// })
// }

// if (window.innerWidth <= 1450) {
//   gsap.to(".rearrange-left img", {

//     scrollTrigger: {
//         trigger: ".rearrange",
//         scroller: 'body',
//         markers: false,
//         start: "top 80%",
//         end: "top 0%",
//         scrub: 2,
//     },
  
//     left: "calc(50% - 15.5%)",
//     duration: 1,
//   })
// }
// if (window.innerWidth <= 1450) {
//   gsap.to(".rearrange-right img", {

//     scrollTrigger: {
//         trigger: ".rearrange",
//         scroller: 'body',
//         markers: false,
//         start: "top 80%",
//         end: "top 0%",
//         scrub: 2,
//     },
  
//     right: "calc(50% - 15.5%)",
//     duration: 1,
//   })
// }

// if (window.innerWidth <= 768) {
//   gsap.to(".rearrange-left img", {

//     scrollTrigger: {
//         trigger: ".rearrange",
//         scroller: 'body',
//         markers: false,
//         start: "top 80%",
//         end: "top 10%",
//         scrub: 2,
//     },
  
//     left: "calc(50% - 20%)",
//     duration: 1,
//   })
// }
// if (window.innerWidth <= 1450) {
//   gsap.to(".rearrange-right img", {

//     scrollTrigger: {
//         trigger: ".rearrange",
//         scroller: 'body',
//         markers: false,
//         start: "top 80%",
//         end: "top 10%",
//         scrub: 2,
//     },
  
//     right: "calc(50% - 20%)",
//     duration: 1,
//   })
// }


const updateAnimation = () => {
  let leftValue, rightValue;

  if (window.innerWidth > 1450) {
    leftValue = "calc(50% - 17.5%)";
    rightValue = "calc(50% - 17.5%)";
  } else if (window.innerWidth <= 768) {
    leftValue = "calc(50% - 20%)";
    rightValue = "calc(50% - 20%)";
  } else {
    leftValue = "calc(50% - 15.5%)";
    rightValue = "calc(50% - 15.5%)";
  }

  gsap.to(".rearrange-left img", {
    scrollTrigger: {
      trigger: ".rearrange",
      scroller: "body",
      markers: false,
      start: "top 80%",
      end: window.innerWidth <= 768 ? "top 10%" : "top 0%",
      scrub: 2,
    },
    left: leftValue,
    duration: 1,
  });

  gsap.to(".rearrange-right img", {
    scrollTrigger: {
      trigger: ".rearrange",
      scroller: "body",
      markers: false,
      start: "top 80%",
      end: window.innerWidth <= 768 ? "top 10%" : "top 0%",
      scrub: 2,
    },
    right: rightValue,
    duration: 1,
  });
};

// Run on page load
updateAnimation();

// Re-run on window resize
window.addEventListener("resize", updateAnimation);
