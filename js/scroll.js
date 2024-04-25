const sr = ScrollReveal({
  distance: "160px",
  duration: 2500,
  delay: 400,
});

sr.reveal(`.header`, {
  distance: "0px",
  opacity: 0.01,
  delay: 900,
});

sr.reveal(`.earth`, {
  origin: "top",
});

sr.reveal(`.statistics__item-1`, {
  delay: 500,
  opacity: 0.01,
});
sr.reveal(`.statistics__item-2`, {
  delay: 700,
  opacity: 0.01,
});
sr.reveal(`.statistics__item-3`, {
  delay: 600,
  opacity: 0.01,
});

sr.reveal(`.planet`, {
  delay: 200,
  interval: 1200,
  origin: 0,
  scale: 0.1,
  distance: "0px",
  rotate: {
    z: -40,
  },
});

sr.reveal(`.rock__1`, {
  delay: 700,
  interval: 100,
  origin: "right",
  opacity: 0.1,
  scale: 0.1,
  rotate: {
    z: -100,
  },
  afterReveal: () => rockRotate(".rock__1", "rotate"),
});
sr.reveal(`.rock__2`, {
  delay: 900,
  interval: 100,
  origin: "right",
  opacity: 0.1,
  scale: 0.1,
  rotate: {
    z: 200,
  },
  afterReveal: () => rockRotate(".rock__2", "rotate2"),
});
sr.reveal(`.rock__3`, {
  delay: 500,
  interval: 100,
  origin: 0,
  opacity: 0.1,
  scale: 0.01,
  afterReveal: () => rockRotate(".rock__3", "rotate3"),
});

sr.reveal(`.rock__4`, {
  delay: 400,
  interval: 100,
  origin: "top",
  opacity: 0.1,
  scale: 0.1,
  afterReveal: () => rockRotate(".rock__4", "rotate4"),
});

sr.reveal(`.rock__5`, {
  delay: 900,
  interval: 100,
  origin: "left",
  opacity: 0.1,
  scale: 0.1,
  rotate: {
    z: 200,
  },
  afterReveal: () => rockRotate(".rock__5", "rotate5"),
});
sr.reveal(`.rock__6`, {
  delay: 300,
  interval: 100,
  origin: "left",
  distance: "260px",
  opacity: 0.1,
  scale: 0.1,
  rotate: {
    z: 200,
  },
  afterReveal: () => rockRotate(".rock__6", "rotate6"),
});

sr.reveal(`.desc`, {
  delay: 1000,
  origin: "top",
  distance: "80px",
});
sr.reveal(`.team__img`, {
  delay: 500,
  origin: "bottom",
  distance: "80px",
});

sr.reveal(`.gallery1`, {
  delay: 500,
  origin: "left",
  distance: "80px",
});
sr.reveal(`.gallery3`, {
  delay: 500,
  origin: "rigth",
  distance: "80px",
});
sr.reveal(`.gallery4, .gallery__text`, {
  delay: 500,
  origin: "top",
  distance: "40px",
});
sr.reveal(`.gallery2`, {
  delay: 500,
  origin: "bottom",
  distance: "40px",
});

sr.reveal(`.review__rock__1`, {
  delay: 500,
  origin: 0,
  scale: 0.01,
});
sr.reveal(`.review__rock__2`, {
  delay: 300,
  origin: "left",
  scale: 0.01,
});
sr.reveal(`.review__rock__3`, {
  delay: 100,
  origin: "top",
  distance: "40px",
  scale: 0.01,
});
sr.reveal(`.review__rock__4`, {
  delay: 700,
  origin: "left",
  scale: 0.01,
});
sr.reveal(`.review__rock__5`, {
  delay: 700,
  origin: "left",
  scale: 0.01,
});
sr.reveal(`.review__rock__6`, {
  delay: 100,
  origin: "top",
  distance: "40px",
  scale: 0.01,
});
sr.reveal(`.reviews__title`, {
  delay: 100,
  origin: "top",
});
sr.reveal(`.reviews__card`, {
  delay: 100,
  origin: "bottom",
});
sr.reveal(`.astronaut`, {
  delay: 700,
  origin: "bottom",
  distance: "240px",
  scale: 0.01,
  duration: 5000,
});

function rockRotate(el, animation) {
  document.querySelector(el).classList.add(animation);
}
