const EARTH_TOGGLE = document.querySelector("#Earth");
const MARS_TOGGLE = document.querySelector("#Mars");
const MOON_TOGGLE = document.querySelector("#Moon");

const CURRENT_PLANET = document.querySelector(".hero__planet");

const earthContent = `
            <div class="hero__earth earth">
                <figure class="earth__ball">
                    <h1 class="earth__title">E<span class="transparent">ART</span>H</h1>
                    <p class="earth__desc">This is a place for all space lovers where everyone will find a hundred
                        things for themselves</p>
                </figure>
            </div>
`;

const marsContent = `
            <div class="hero__mars mars">
                <figure class="mars__ball">
                    <h1 class="mars__title">M<span class="transparent">AR</span>S</h1>
                    <p class="mars__desc">This is a place for all space lovers where everyone will find a hundred
                        things for themselves</p>
                </figure>
            </div>
`;

const moonContent = `
            <div class="hero__moon moon">
                <figure class="moon__ball">
                    <h1 class="moon__title">M<span class="transparent">OO</span>N</h1>
                    <p class="moon__desc">This is a place for all space lovers where everyone will find a hundred
                        things for themselves</p>
                </figure>
            </div>
`;

EARTH_TOGGLE.addEventListener("click", () => {
  CURRENT_PLANET.removeChild(CURRENT_PLANET.firstElementChild);
  CURRENT_PLANET.innerHTML = earthContent;
});

MARS_TOGGLE.addEventListener("click", () => {
  CURRENT_PLANET.removeChild(CURRENT_PLANET.firstElementChild);
  CURRENT_PLANET.innerHTML = marsContent;
});

MOON_TOGGLE.addEventListener("click", () => {
  CURRENT_PLANET.removeChild(CURRENT_PLANET.firstElementChild);
  CURRENT_PLANET.innerHTML = moonContent;
});
