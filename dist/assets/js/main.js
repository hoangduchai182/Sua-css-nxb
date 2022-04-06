window.onload = () => {
  header.init();
  navigation.init();
  owlCarousel.init();
  folderTree.init();
  tabWrapper.init();
  select2.init();
  seeMoreSection.init();
  modal.init();
};

const loading = {
  init: function () {
    this.configLoading();
  },
  configLoading: function () {},
};

const owlCarousel = {
  init: function () {
    this.setupHomeBannerCarousel();
    this.setupBookCollectionCarousel();
    this.setupCardWithTitleCarousel();
    this.setupPostBlockCarousel();
    this.setupBookDetailCarousel();
    this.setupPostCarousel();
  },
  setupHomeBannerCarousel: function () {
    $("#HomeBanner-top").owlCarousel({
      responsive: {
        0: {
          items: 1,
          slideBy: 1,
        },
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      smartSpeed: 300,
      lazyLoad: true,
      dots: true,
      nav: true,
      navText: [
        '<img src="./assets/icons/icon-caret-circle-left-white.svg" alt="" />',
        '<img src="./assets/icons/icon-caret-circle-right-white.svg" alt="" />',
      ],
      margin: 0,
    });

    $("#HomeBanner-bottom").owlCarousel({
      responsive: {
        0: {
          items: 1.5,
          autoplay: true,
          mouseDrag: true,
          touchDrag: true,
          lazyLoad: true,
        },
        991: {
          items: 3,
          mouseDrag: false,
          touchDrag: false,
          autoplay: false,
        },
      },
      center: true,
      loop: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      smartSpeed: 300,
      dots: false,
      nav: false,
      margin: 16,
    });
  },
  setupBookCollectionCarousel: function () {
    const bookCollections = document.querySelectorAll(".BookCollection");
    bookCollections.forEach((item) => {
      const prevBtn = item.querySelector(".owl-arrow-left");
      const nextBtn = item.querySelector(".owl-arrow-right");
      const mainOwl = item.querySelector(".owl-carousel");

      if (prevBtn && nextBtn && mainOwl) {
        const $owl = $(mainOwl).owlCarousel({
          responsive: {
            0: {
              items: 1,
            },
          },
          loop: true,
          autoplay: true,
          autoplayTimeout: 4000,
          autoplayHoverPause: true,
          smartSpeed: 300,
          lazyLoad: false,
          dots: false,
          nav: false,
          margin: 16,
        });

        prevBtn.addEventListener("click", () => {
          $owl.trigger("prev.owl.carousel");
        });

        nextBtn.addEventListener("click", () => {
          $owl.trigger("next.owl.carousel");
        });
      }
    });
  },
  setupCardWithTitleCarousel: function () {
    const cartWithTitle = document.querySelectorAll(".CardWithTitle");
    cartWithTitle.forEach((item) => {
      const prevBtn = item.querySelector(".owl-arrow-left");
      const nextBtn = item.querySelector(".owl-arrow-right");
      const mainOwl = item.querySelector(".owl-carousel");

      if (prevBtn && nextBtn && mainOwl) {
        const $owl = $(mainOwl).owlCarousel({
          responsive: {
            0: {
              items: 2.2,
              slideBy: 1,
            },
            991: {
              items: 4,
              slideBy: 1,
            },
          },
          loop: true,
          autoplay: true,
          autoplayTimeout: 4000,
          autoplayHoverPause: true,
          smartSpeed: 300,
          lazyLoad: false,
          dots: false,
          nav: false,
        });

        prevBtn.addEventListener("click", () => {
          $owl.trigger("prev.owl.carousel");
        });

        nextBtn.addEventListener("click", () => {
          $owl.trigger("next.owl.carousel");
        });
      }
    });
  },
  setupPostBlockCarousel: function () {
    $(".PostBlock-carousel").owlCarousel({
      responsive: {
        0: {
          items: 1,
          slideBy: 1,
        },
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      smartSpeed: 300,
      lazyLoad: false,
      dots: false,
      nav: true,
      navText: [
        '<img src="./assets/icons/icon-caret-square-left-gray.svg" alt="" />',
        '<img src="./assets/icons/icon-caret-square-right-gray.svg" alt="" />',
      ],
      margin: 0,
    });
  },
  setupPostCarousel: function () {
    $(".PostCarousel").owlCarousel({
      responsive: {
        0: {
          items: 1,
        },
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      smartSpeed: 300,
      lazyLoad: false,
      dots: false,
      nav: true,
      navText: [
        '<img src="./assets/icons/icon-arrow-square-left-gray-light.svg" alt="" />',
        '<img src="./assets/icons/icon-arrow-square-right-gray-light.svg" alt="" />',
      ],
      margin: 0,
    });
  },
  setupBookDetailCarousel: function () {
    let activeIndex = 0;
    const listSlider = document.querySelector(
      ".BookDetailSection-preview-list-group"
    );
    const listSliderItems = listSlider?.querySelectorAll(
      ".BookDetailSection-preview-list-item"
    );
    const arrowUp = document.querySelector(
      ".BookDetailSection-preview-list-arrow.prev"
    );
    const arrowDown = document.querySelector(
      ".BookDetailSection-preview-list-arrow.next"
    );

    const $owl = $("#BookDetailSection-carousel").owlCarousel({
      responsive: {
        0: {
          items: 1,
          autoplay: true,
          nav: true,
        },
        991: {
          items: 1,
        },
      },
      loop: false,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      smartSpeed: 300,
      lazyLoad: false,
      dots: false,
      nav: false,
      navText: [
        '<img src="./assets/icons/icon-angle-left-gray-light.svg" alt="" />',
        '<img src="./assets/icons/icon-angle-right-gray-light.svg" alt="" />',
      ],
      margin: 0,
    });

    arrowUp?.addEventListener?.("click", () => {
      listSlider.scrollTop = listSlider.scrollTop - 85 - 15;
    });

    arrowDown?.addEventListener?.("click", () => {
      listSlider.scrollTop = listSlider.scrollTop + 85 + 15;
    });

    listSliderItems?.forEach?.((item, index) =>
      item.addEventListener("click", () => {
        activeIndex = index;
        $owl.trigger("to.owl.carousel", [index, 500]);
        listSliderItems.forEach((i) => i.classList.remove("active"));
        item.classList.add("active");
      })
    );

    listSliderItems?.[activeIndex]?.classList?.add?.("active");
  },
};

const header = {
  init: function () {
    this.menuMobile();
    this.filterCategoryMobile();
    this.dropdownAccount();
  },
  dropdownAccount: function () {
    const headerAccount = document.querySelector(".Header-account");
    const headerDropdown = document.querySelector(".Header-sub-items");

    if (headerAccount && headerDropdown) {
      headerAccount?.addEventListener?.("click", (e) => {
        e.preventDefault();
        headerDropdown.classList.toggle("active");
      });
      const listener = (event) => {
        if (!headerDropdown || headerDropdown.contains(event.target)) return;
        headerDropdown.classList.remove("active");
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
    }
  },
  menuMobile: function () {
    const btnMenu = document.querySelector(".NavigationMobile-open");
    const menu = document.querySelector(".NavigationMobile");

    if (btnMenu && menu) {
      const overlay = menu.querySelector(".NavigationMobile-overlay");
      const close = menu.querySelector(".NavigationMobile-close");

      btnMenu.addEventListener("click", () => {
        menu.classList.add("active");
      });
      overlay.addEventListener("click", () => {
        menu.classList.remove("active");
      });
      close.addEventListener("click", () => {
        menu.classList.remove("active");
      });
    }
  },
  filterCategoryMobile: function () {
    const btnMenu = document.querySelector(".FilterCategoryMobile-open");
    const menu = document.querySelector(".FilterCategoryMobile");

    if (btnMenu && menu) {
      const overlay = menu.querySelector(".FilterCategoryMobile-overlay");
      const close = menu.querySelector(".FilterCategoryMobile-close");

      btnMenu.addEventListener("click", () => {
        menu.classList.add("active");
      });
      overlay.addEventListener("click", () => {
        menu.classList.remove("active");
      });
      close.addEventListener("click", () => {
        menu.classList.remove("active");
      });
    }
  },
};

const navigation = {
  init: function () {
    this.dropdownSubmenu();
    this.dropdownSubmenuMobile();
  },
  dropdownSubmenu: function () {
    const navigationItems = document.querySelectorAll(".Navigation-list-item");

    navigationItems.forEach((item) => {
      const caretIcon = item.querySelector(".Navigation-list-item-caret");
      const subItems = item.querySelector(".Navigation-sub-items");

      if (caretIcon) {
        item?.addEventListener?.("click", (e) => {
          e.preventDefault();
          item.classList.toggle("active");
          subItems.classList.toggle("active");
        });
      }

      const listener = (event) => {
        if (!subItems || subItems.contains(event.target)) return;
        item.classList.remove("active");
        subItems.classList.remove("active");
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
    });
  },
  dropdownSubmenuMobile: function () {
    const navigationItems = document.querySelectorAll(
      ".NavigationMobile-list-item"
    );

    navigationItems.forEach((item) => {
      const caretIcon = item.querySelector(".NavigationMobile-list-item-caret");
      const subItems = item.querySelector(".NavigationMobile-sub-items");

      if (caretIcon) {
        item?.addEventListener?.("click", (e) => {
          e.preventDefault();
          item.classList.toggle("active");
          subItems.classList.toggle("active");
        });
      }
    });
  },
};

const folderTree = {
  init: function () {
    this.dropdownSubmenu();
  },
  dropdownSubmenu: function () {
    const items = document.querySelectorAll(".FolderTree-group-item");

    items.forEach((item) => {
      const arrow = item.querySelector(".FolderTree-group-item-arrow");
      const subItems = item.querySelector(".FolderTree-subItems");

      if (arrow && subItems)
        arrow.addEventListener("click", () => item.classList.toggle("active"));
    });
  },
};

const tabWrapper = {
  init: function () {
    this.config();
  },
  config: function () {
    const mains = document.querySelectorAll(".tab-wrapper");

    mains.forEach((main) => {
      const tabItems = main.querySelectorAll(".tab-item");
      const tabMains = main.querySelectorAll(".tab-main");

      tabItems?.[0]?.classList?.add("active");
      tabMains?.[0]?.classList?.add("active");

      tabItems.forEach((tab, tabIndex) =>
        tab.addEventListener("click", () => {
          tabItems.forEach((item) => item.classList.remove("active"));
          tabMains.forEach((item) => item.classList.remove("active"));

          tabItems[tabIndex].classList.add("active");
          tabMains[tabIndex].classList.add("active");
        })
      );
    });
  },
};

const select2 = {
  init: function () {
    this.singleSelect2();
  },
  singleSelect2: function () {
    const selects = document.querySelectorAll(".single-select2");

    selects.forEach((item) => {
      $(item).select2({
        placeholder: item.dataset.placeholder,
        minimumResultsForSearch: -1,
        width: "100%",
      });
    });
  },
};

const seeMoreSection = {
  init: function () {
    this.config();
  },
  config: function () {
    const sections = document.querySelectorAll(".SeeMore");
    sections.forEach((item) => {
      let isExpand = false;
      const btn = item.querySelector(".SeeMore-btn");

      btn.addEventListener("click", () => {
        const text = btn.querySelector("span");
        if (isExpand) {
          item.classList.remove("active");
          text.innerHTML = "Xem đầy đủ";
        } else {
          item.classList.add("active");
          text.innerHTML = "Thu gọn";
        }

        isExpand = !isExpand;
      });
    });
  },
};

const modal = {
  init: function () {
    this.config();
  },
  config: function () {
    const openBtns = document.querySelectorAll(".Modal-open");

    openBtns.forEach((item) =>
      item.addEventListener("click", () => {
        const modal = document.querySelector(`#${item.dataset.modal}`);

        if (modal) {
          const overlay = modal.querySelector(".Modal-overlay");
          const closeBtn = modal.querySelector(".Modal-close");

          modal.classList.add("active");

          overlay.addEventListener("click", () =>
            modal.classList.remove("active")
          );
          closeBtn.addEventListener("click", () =>
            modal.classList.remove("active")
          );
        }
      })
    );
  },
};

const toast = {
  show: function (image, title, description) {
    const main = document.querySelector(".Notification");
    const div = document.createElement("div");
    div.className = "Notification-item flex items-center show-up";
    div.innerHTML = `
      <div class="Notification-item-close">
        <img src="./assets/icons/icon-close.svg" alt="" />
      </div> 

      <div class="Notification-item-image">
        <img src="${image}" alt="" />
      </div>

      <div class="Notification-item-info">
        <div class="Notification-item-title">${title}</div>
        <div class="Notification-item-description">${description}</div>
      </div>
    `;

    const close = div.querySelector(".Notification-item-close");
    close.addEventListener("click", () => {
      div.className = "Notification-item flex items-center hide";

      const timeoutAnimation = setTimeout(() => {
        div.remove();
        clearTimeout(timeoutAnimation);
      }, 500);
    });

    main.appendChild(div);

    const timeout = setTimeout(() => {
      div.className = "Notification-item flex items-center hide";

      const timeoutAnimation = setTimeout(() => {
        div.remove();
        clearTimeout(timeoutAnimation);
      }, 500);
      clearTimeout(timeout);
    }, 3000);
  },
};

setInterval(() => {
  toast.show(
    "./assets/images/image-book-block.png",
    "<b>Lê Nam</b> vừa đọc “Giáo trình phân tích kinh doanh nội dung này 2 dòng ...",
    "1 phút trước"
  );
}, 5000);

// const countUpConfig = {
//   init: function () {
//     // this.configCountUpWelcomeSection()
//   },
//   configCountUpWelcomeSection: function () {
//     const dataCountWelcomeSection = [{
//         targetHTML: '#countUp-long-term',
//         numberCountUp: 92,
//         suffix: '%',
//       },
//       {
//         targetHTML: '#countUp-offices-internationally',
//         numberCountUp: 60
//       },
//       {
//         targetHTML: '#countUp-years-in-viet-nam ',
//         numberCountUp: 7
//       },
//     ]
//     this.setupScrollEvent('.section-welcome .about-wrapper', dataCountWelcomeSection)
//   },
//   setupScrollEvent: function (targetHTML, elementsCountUp) {
//     const target = document.querySelector(targetHTML)
//     if (target) {
//       const options = {
//         threshold: 1,
//         rootMargin: "0px",
//       };
//       const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//           if (!entry.isIntersecting) {
//             return;
//           } else {
//             elementsCountUp.forEach((item) => this.setupCountUp(item.targetHTML, item.numberCountUp, item.suffix))
//             observer.unobserve(entry.target);
//           }
//         })
//       }, options);
//       observer.observe(target);
//     }
//   },
//   setupCountUp(targetId, number, suffix = '') {
//     const options = {
//       startVal: 0,
//       duration: 5,
//       suffix,
//     }
//     const target = document.querySelector(targetId)
//     const countUpObj = new CountUp(target, number, options)
//     countUpObj.start()
//   }
// }
