$(document).ready(() => {
  $(".category__homeSlider").slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow:
      '<button class="slick__nextBtn"><span class="iconify text-sky-600 text-3xl" data-icon="bi:arrow-right-circle-fill"></span></button>',
    prevArrow:
      '<button class="slick__prevBtn"><span class="iconify text-sky-600 text-3xl" data-icon="bi:arrow-left-circle-fill"></span></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  const newArrivalTab = document.querySelector(".new__arrivalTab");
  const saleItemTab = document.querySelector(".sale__itemTab");
  const bestSellerTab = document.querySelector(".best__sellerTab");
  const newArrivalProducts = document.querySelector(".new__arrivalProducts");
  const saleItemProducts = document.querySelector(".sale__itemsProducts");
  const bestSellingProducts = document.querySelector(".best__sellingProducts");

  newArrivalTab.addEventListener("click", () => {
    newArrivalTab.classList.add("active__homeProductTab");
    saleItemTab.classList.remove("active__homeProductTab");
    bestSellerTab.classList.remove("active__homeProductTab");
    newArrivalProducts.classList.add("active__tabProducts");
    saleItemProducts.classList.remove("active__tabProducts");
    bestSellingProducts.classList.remove("active__tabProducts");
  });

  saleItemTab.addEventListener("click", () => {
    saleItemTab.classList.add("active__homeProductTab");
    newArrivalTab.classList.remove("active__homeProductTab");
    bestSellerTab.classList.remove("active__homeProductTab");
    newArrivalProducts.classList.remove("active__tabProducts");
    saleItemProducts.classList.add("active__tabProducts");
    bestSellingProducts.classList.remove("active__tabProducts");
  });

  bestSellerTab.addEventListener("click", () => {
    bestSellerTab.classList.add("active__homeProductTab");
    saleItemTab.classList.remove("active__homeProductTab");
    newArrivalTab.classList.remove("active__homeProductTab");
    newArrivalProducts.classList.remove("active__tabProducts");
    saleItemProducts.classList.remove("active__tabProducts");
    bestSellingProducts.classList.add("active__tabProducts");
  });

  // Home slider section starts
  const homeBannerMainSection = document.querySelector(".home__banner");
  const homeBanner1 = document.querySelector(".home__banner1");
  const homeBanner2 = document.querySelector(".home__banner2");
  const homeBanner3 = document.querySelector(".home__banner3");
  const homeSliderLeftImg1 = document.querySelector(".home__sliderLeftImg1");
  const homeSliderRightImg1 = document.querySelector(".home__sliderRightImg1");
  const homeSliderLeftImg2 = document.querySelector(".home__sliderLeftImg2");
  const homeSliderRightImg2 = document.querySelector(".home__sliderRightImg2");
  const homeSliderLeftImg3 = document.querySelector(".home__sliderLeftImg3");
  const homeSliderRightImg3 = document.querySelector(".home__sliderRightImg3");
  const homeSliderContent1 = document.querySelector(".home__sliderContent1");
  const homeSliderContent2 = document.querySelector(".home__sliderContent2");
  const homeSliderContent3 = document.querySelector(".home__sliderContent3");
  const sliderLength = document.getElementById("slider__length");

  const banner1Btn = document.querySelector(".banner1");
  const banner2Btn = document.querySelector(".banner2");
  const banner3Btn = document.querySelector(".banner3");

  if (banner1Btn && homeBanner1) {
    const animatedBannerSlider = setTimeout(() => {
      homeBanner1.classList.add("active__homeBanner");
      homeSliderLeftImg1.classList.add("active__bannerImage");
      homeSliderRightImg1.classList.add("active__bannerImage");
      homeSliderContent1.classList.add("middle__homeSliderContent");
    }, 300);
  }

  // Auto slider section starts
  let currentSlider = 1;
  let endSlider = 3;

  if (sliderLength) {
    endSlider = parseInt(sliderLength.value);
  }

  let mouseHoveredOnSlider = false;

  const showSlider = (currentSlider) => {
    if (currentSlider === 1) {
      if (banner1Btn && homeBanner1) {
        // Number 1
        homeBanner1.classList.add("active__homeBanner");
        homeSliderContent1.classList.add("middle__homeSliderContent");
        banner1Btn.classList.add("active__bannerBorder");
        homeSliderLeftImg1.classList.add("active__bannerImage");
        homeSliderRightImg1.classList.add("active__bannerImage");
      }

      if (banner2Btn && homeBanner2) {
        // Number 2
        banner2Btn.classList.remove("active__bannerBorder");
        homeSliderContent2.classList.remove("middle__homeSliderContent");
        homeBanner2.classList.remove("active__homeBanner");
        homeSliderLeftImg2.classList.remove("active__bannerImage");
        homeSliderRightImg2.classList.remove("active__bannerImage");
      }

      if (banner3Btn && homeBanner3) {
        // Number 3
        banner3Btn.classList.remove("active__bannerBorder");
        homeSliderContent3.classList.remove("middle__homeSliderContent");
        homeBanner3.classList.remove("active__homeBanner");
        homeSliderLeftImg3.classList.remove("active__bannerImage");
        homeSliderRightImg3.classList.remove("active__bannerImage");
      }
    } else if (currentSlider === 2) {
      if (banner1Btn && homeBanner1) {
        // Number 1
        homeBanner1.classList.remove("active__homeBanner");
        homeSliderContent1.classList.remove("middle__homeSliderContent");
        banner1Btn.classList.remove("active__bannerBorder");
        homeSliderLeftImg1.classList.remove("active__bannerImage");
        homeSliderRightImg1.classList.remove("active__bannerImage");
      }

      if (banner2Btn && homeBanner2) {
        // Number 2
        banner2Btn.classList.add("active__bannerBorder");
        homeSliderContent2.classList.add("middle__homeSliderContent");
        homeBanner2.classList.add("active__homeBanner");
        homeSliderLeftImg2.classList.add("active__bannerImage");
        homeSliderRightImg2.classList.add("active__bannerImage");
      }

      if (banner3Btn && homeBanner3) {
        // Number 3
        banner3Btn.classList.remove("active__bannerBorder");
        homeSliderContent3.classList.remove("middle__homeSliderContent");
        homeBanner3.classList.remove("active__homeBanner");
        homeSliderLeftImg3.classList.remove("active__bannerImage");
        homeSliderRightImg3.classList.remove("active__bannerImage");
      }
    } else {
      if (banner1Btn && homeBanner1) {
        // Number 1
        homeBanner1.classList.remove("active__homeBanner");
        homeSliderContent1.classList.remove("middle__homeSliderContent");
        banner1Btn.classList.remove("active__bannerBorder");
        homeSliderLeftImg1.classList.remove("active__bannerImage");
        homeSliderRightImg1.classList.remove("active__bannerImage");
      }

      if (banner2Btn && homeBanner2) {
        // Number 2
        banner2Btn.classList.remove("active__bannerBorder");
        homeSliderContent2.classList.remove("middle__homeSliderContent");
        homeBanner2.classList.remove("active__homeBanner");
        homeSliderLeftImg2.classList.remove("active__bannerImage");
        homeSliderRightImg2.classList.remove("active__bannerImage");
      }

      if (banner3Btn && homeBanner3) {
        // Number 3
        banner3Btn.classList.add("active__bannerBorder");
        homeSliderContent3.classList.add("middle__homeSliderContent");
        homeBanner3.classList.add("active__homeBanner");
        homeSliderLeftImg3.classList.add("active__bannerImage");
        homeSliderRightImg3.classList.add("active__bannerImage");
      }
    }
  };

  const makeAutoSlider = setInterval(() => {
    homeBannerMainSection.addEventListener("mouseenter", () => {
      mouseHoveredOnSlider = true;
      return mouseHoveredOnSlider;
    });

    homeBannerMainSection.addEventListener("mouseleave", () => {
      mouseHoveredOnSlider = false;
      return mouseHoveredOnSlider;
    });

    // console.log(mouseHoveredOnSlider);

    if (!mouseHoveredOnSlider) {
      if (currentSlider >= endSlider) {
        currentSlider = 1;
      } else {
        currentSlider++;
      }
    }

    showSlider(currentSlider);
  }, 3500);
  // Auto slider section ends

  if (banner1Btn) {
    banner1Btn.addEventListener("click", () => {
      currentSlider = 1;
      if (banner1Btn && homeBanner1) {
        // Number 1
        homeBanner1.classList.add("active__homeBanner");
        homeSliderContent1.classList.add("middle__homeSliderContent");
        banner1Btn.classList.add("active__bannerBorder");
        homeSliderLeftImg1.classList.add("active__bannerImage");
        homeSliderRightImg1.classList.add("active__bannerImage");
      }

      if (banner2Btn && homeBanner2) {
        // Number 2
        banner2Btn.classList.remove("active__bannerBorder");
        homeSliderContent2.classList.remove("middle__homeSliderContent");
        homeBanner2.classList.remove("active__homeBanner");
        homeSliderLeftImg2.classList.remove("active__bannerImage");
        homeSliderRightImg2.classList.remove("active__bannerImage");
      }

      if (banner3Btn && homeBanner3) {
        // Number 3
        banner3Btn.classList.remove("active__bannerBorder");
        homeSliderContent3.classList.remove("middle__homeSliderContent");
        homeBanner3.classList.remove("active__homeBanner");
        homeSliderLeftImg3.classList.remove("active__bannerImage");
        homeSliderRightImg3.classList.remove("active__bannerImage");
      }
    });
  }

  if (banner2Btn) {
    banner2Btn.addEventListener("click", () => {
      currentSlider = 2;
      if (banner1Btn && homeBanner1) {
        // Number 1
        homeBanner1.classList.remove("active__homeBanner");
        homeSliderContent1.classList.remove("middle__homeSliderContent");
        banner1Btn.classList.remove("active__bannerBorder");
        homeSliderLeftImg1.classList.remove("active__bannerImage");
        homeSliderRightImg1.classList.remove("active__bannerImage");
      }

      if (banner2Btn && homeBanner2) {
        // Number 2
        banner2Btn.classList.add("active__bannerBorder");
        homeSliderContent2.classList.add("middle__homeSliderContent");
        homeBanner2.classList.add("active__homeBanner");
        homeSliderLeftImg2.classList.add("active__bannerImage");
        homeSliderRightImg2.classList.add("active__bannerImage");
      }

      if (banner3Btn && homeBanner3) {
        // Number 3
        banner3Btn.classList.remove("active__bannerBorder");
        homeSliderContent3.classList.remove("middle__homeSliderContent");
        homeBanner3.classList.remove("active__homeBanner");
        homeSliderLeftImg3.classList.remove("active__bannerImage");
        homeSliderRightImg3.classList.remove("active__bannerImage");
      }
    });
  }

  if (banner3Btn) {
    banner3Btn.addEventListener("click", () => {
      currentSlider = 3;
      if (banner1Btn && homeBanner1) {
        // Number 1
        homeBanner1.classList.remove("active__homeBanner");
        homeSliderContent1.classList.remove("middle__homeSliderContent");
        banner1Btn.classList.remove("active__bannerBorder");
        homeSliderLeftImg1.classList.remove("active__bannerImage");
        homeSliderRightImg1.classList.remove("active__bannerImage");
      }

      if (banner2Btn && homeBanner2) {
        // Number 2
        banner2Btn.classList.remove("active__bannerBorder");
        homeSliderContent2.classList.remove("middle__homeSliderContent");
        homeBanner2.classList.remove("active__homeBanner");
        homeSliderLeftImg2.classList.remove("active__bannerImage");
        homeSliderRightImg2.classList.remove("active__bannerImage");
      }

      if (banner3Btn && homeBanner3) {
        // Number 3
        banner3Btn.classList.add("active__bannerBorder");
        homeSliderContent3.classList.add("middle__homeSliderContent");
        homeBanner3.classList.add("active__homeBanner");
        homeSliderLeftImg3.classList.add("active__bannerImage");
        homeSliderRightImg3.classList.add("active__bannerImage");
      }
    });
  }
  // Home slider section ends

  //   Time countdown
  var countDownDate = new Date("Jan 25, 2022 23:59:59").getTime();

  const timeCounter = setInterval(function () {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days + "d :";
    document.getElementById("hours").innerText = hours + "h :";
    document.getElementById("mins").innerText = minutes + "m :";
    document.getElementById("secs").innerText = seconds + "s";

    if (timeleft < 0) {
      clearInterval(timeCounter);
      document.getElementById("days").innerText = "";
      document.getElementById("hours").innerText = "";
      document.getElementById("mins").innerText = "";
      document.getElementById("secs").innerText = "";
      document.getElementById("end").innerText = "TIMES UP!";
    }
  }, 1000);
});
