const SCROLL_DISTANCE = 240;
const TRANSITION_DURATION = 1400;

export function initTestimonialSwiper() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document
    .querySelectorAll<HTMLElement>("[data-testimonial-swiper]")
    .forEach((swiper) => {
      const track = swiper.querySelector<HTMLElement>(
        "[data-testimonial-track]",
      );
      const slides = Array.from(
        swiper.querySelectorAll<HTMLElement>("[data-testimonial-slide]"),
      );
      const slideCount = Number(swiper.dataset.slideCount);

      if (!track || !slideCount) return;

      let currentSlide = 0;
      let lastScrollY = window.scrollY;
      let accumulatedScroll = 0;
      let isTransitioning = false;

      const setAccessibility = () => {
        slides.forEach((slide, index) => {
          slide.setAttribute(
            "aria-hidden",
            String(index !== currentSlide && index !== currentSlide + 1),
          );
        });
      };

      const move = (direction: 1 | -1) => {
        if (isTransitioning) return;

        const nextSlide = currentSlide + direction;
        if (nextSlide < 0 || nextSlide > slideCount - 2) return;

        isTransitioning = true;
        currentSlide = nextSlide;
        track.style.transition = `transform ${TRANSITION_DURATION}ms cubic-bezier(0.65, 0, 0.35, 1)`;
        track.style.transform = `translateX(-${currentSlide * 50}vw)`;
        setAccessibility();
      };

      const onScroll = () => {
        const nextScrollY = window.scrollY;
        const distance = nextScrollY - lastScrollY;
        lastScrollY = nextScrollY;

        if (isTransitioning || Math.abs(distance) < 1) return;

        accumulatedScroll += distance;
        if (Math.abs(accumulatedScroll) < SCROLL_DISTANCE) return;

        move(accumulatedScroll > 0 ? 1 : -1);
        accumulatedScroll = 0;
      };

      track.addEventListener("transitionend", () => {
        isTransitioning = false;
        setAccessibility();
      });

      setAccessibility();
      window.addEventListener("scroll", onScroll, { passive: true });
    });
}
