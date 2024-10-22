// creating a responsive navbar component

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click", () => {
  headerElem.classList.toggle("active");
});

// ========================================
//  smooth scrolling
// ========================================

const portfolioSection = document.querySelector(".section-portfolio");
const contactSection = document.querySelector(".section-contact");

document.querySelector(".portfolio-link").addEventListener("click", (e) => {
  e.preventDefault();
  portfolioSection.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".hireme-btn").addEventListener("click", (e) => {
  e.preventDefault();
  contactSection.scrollIntoView({ behavior: "smooth" });
});

// creating a portfolio tabbed component

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target;
  console.log(p_btn_clicked);

  if (!p_btn_clicked.classList.contains("p-btn")) return;

  p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

  p_btn_clicked.classList.add("p-btn-active");

  // to find the number in data attr
  const btn_num = p_btn_clicked.dataset.btnNum;
  console.log(btn_num);

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

  p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));

  img_active.forEach((curElem) =>
    curElem.classList.remove("p-image-not-active")
  );
});

// swiper js code

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const myJsmedia = (widthSize) => {
  if (widthSize.matches) {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
    });
  } else {
    new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
    });
  }
};

const widthSize = window.matchMedia("(max-width: 640px)");

// call listener function at run time
myJsmedia(widthSize);

// Attach listener function on state changes
widthSize.addEventListener("change", myJsmedia);

// scroll to top button

const heroSection = document.querySelector(".section-hero");
const footerElem = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scrollElement);

const scrollTop = () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
};

scrollElement.addEventListener("click", scrollTop);

// animate number counter

const counterNum = document.querySelectorAll(".counter-numbers");

const speed = 200;

counterNum.forEach((curElem) => {
  const updateNumber = () => {
    const targetNumber = parseInt(curElem.dataset.number);
    // console.log(targetNumber);
    const initialNum = parseInt(curElem.innerText);
    //console.log(initialNum);

    const incrementNumber = Math.trunc(targetNumber / speed);
    // console.log(incrementNumber);

    if (initialNum < targetNumber) {
      curElem.innerText = `${initialNum + incrementNumber}+`;
      setTimeout(updateNumber, 10);
    }
  };

  updateNumber();
});

// ========================================
//  animated counter number
// ========================================

const workSection = document.querySelector(".section-work-data");

const workSectionObserve = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  console.log(entries);

  const counterNum = document.querySelectorAll(".counter-numbers");
  // console.log(counterNum);
  const speed = 200;

  counterNum.forEach((curNumber) => {
    const updateNumber = () => {
      const targetNumber = parseInt(curNumber.dataset.number);
      // console.log(targetNumber);
      const initialNumber = parseInt(curNumber.innerText);
      // console.log(initialNumber);
      const incrementNumber = Math.trunc(targetNumber / speed);
      // i am adding the value to the main number
      // console.log(incrementNumber);

      if (initialNumber < targetNumber) {
        curNumber.innerText = `${initialNumber + incrementNumber}+`;
        setTimeout(updateNumber, 10);
      } else {
        curNumber.innerText = `${targetNumber}+`;
      }
    };
    updateNumber();
  });
};

const workSecObserver = new IntersectionObserver(workSectionObserve, {
  root: null,
  threshold: 0,
});

workSecObserver.observe(workSection);
