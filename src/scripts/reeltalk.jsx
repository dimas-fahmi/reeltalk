import { useEffect, useState } from "react";

export const element_observer = (selector) => {
  return new Promise((resolve) => {
    if (document.querySelectorAll(selector)) {
      return resolve(document.querySelectorAll(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelectorAll(selector)) {
        observer.disconnect();
        resolve(document.querySelectorAll(selector));
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
};

export const scrollDetector = () => {
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollTop = window.scrollY;

    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      const isScrollingUp = currentScrollTop < lastScrollTop;

      setScrollDirection(isScrollingUp ? "up" : "down");
      lastScrollTop = currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollDirection;
};

export const dragToScroll = () => {
  // Logics
  useEffect(() => {
    element_observer(".drag-to-scroll").then((sliders) => {
      sliders.forEach((slider) => {
        let isDown = false,
          startX,
          scrollLeft;

        slider.addEventListener("mousedown", (e) => {
          isDown = true;
          startX = e.pageX - slider.offsetLeft;
          scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener("mouseleave", () => {
          isDown = false;
        });
        slider.addEventListener("mouseup", () => {
          isDown = false;
        });
        slider.addEventListener("mousemove", (e) => {
          if (!isDown) return;
          e.preventDefault();
          const x = e.pageX - slider.offsetLeft;
          const walk = (x - startX) * 1;
          slider.scrollLeft = scrollLeft - walk;
        });
      });
    });
  }, []);
};
