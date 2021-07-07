<template>
  <Layout>
    <main
      class="
        h-screen
        w-screen
        flex flex-col
        justify-center
        items-center
        bg-yellow-200
        overflow-hidden
        fixed
      "
    >
      <div
        class="
          text-white text-shadow-custom text-center
          mt-12
          top-0
          bebas
          text-4xl
          mb-8
          h-auto
          absolute
        "
      >
        Select a challenge
      </div>
      <div id="turn">
        <img src="../assets/img/turndevice.png" alt="turn device" />
      </div>
      <ClientOnly>
        <carousel-3d class="fixed w-screen">
          <slide :index="0">
            <a href="/challenge?challenge=AChampionsCup">
              <div class="rounded-full bg-white h-full m-auto w-3/4 shadow-2xl">
                <img
                  src="../static/img/svg/cup.svg"
                  class="p-12"
                  alt="blaadjes"
                />
                <div
                  class="
                    font-semibold
                    bebas
                    text-3xl
                    mt-4
                    text-center text-white text-shadow-custom
                  "
                >
                  A Champions Cup
                </div>
              </div>
            </a>
          </slide>
          <slide :index="1">
            <a href="/challenge?challenge=AllPedalLessMetal">
              <div class="rounded-full bg-white h-full m-auto w-3/4 shadow-2xl">
                <img
                  src="../static/img//svg/bike.svg"
                  class="p-12"
                  alt="blaadjes"
                />
                <div
                  class="
                    font-semibold
                    bebas
                    text-3xl
                    mt-4
                    text-center text-white text-shadow-custom
                  "
                >
                  All Pedal Less Metal
                </div>
              </div>
            </a>
          </slide>
          <slide :index="2">
            <a href="/challenge?challenge=BagItUp">
              <div class="rounded-full bg-white h-full m-auto w-3/4 shadow-2xl">
                <img
                  src="../static/img/svg/bag.svg"
                  class="p-12"
                  alt="blaadjes"
                />
                <div
                  class="
                    font-semibold
                    bebas
                    text-3xl
                    mt-4
                    text-center text-white text-shadow-custom
                  "
                >
                  Bag It Up
                </div>
              </div>
            </a>
          </slide>
          <slide :index="3">
            <a href="/challenge?challenge=CoffeeCleanse">
              <div class="rounded-full bg-white h-full m-auto w-3/4 shadow-2xl">
                <img
                  src="../static/img/svg/coffee.svg"
                  class="p-12"
                  alt="blaadjes"
                />
                <div
                  class="
                    font-semibold
                    bebas
                    text-3xl
                    mt-4
                    text-center text-white text-shadow-custom
                  "
                >
                  Coffee Cleanse
                </div>
              </div>
            </a>
          </slide>
          <slide :index="4">
            <a href="/challenge?challenge=Plantiful">
              <div class="rounded-full bg-white h-full m-auto w-3/4 shadow-2xl">
                <img
                  src="../static/img/svg/salad.svg"
                  class="p-12"
                  alt="blaadjes"
                />
                <div
                  class="
                    font-semibold
                    bebas
                    text-3xl
                    mt-4
                    text-center text-white text-shadow-custom
                  "
                >
                  Plantiful
                </div>
              </div>
            </a>
          </slide>
          <slide :index="5">
            <a href="/challenge?challenge=RepeatedRefills">
              <div class="rounded-full bg-white h-full m-auto w-3/4 shadow-2xl">
                <img
                  src="../static/img//svg/bottle.svg"
                  class="p-12"
                  alt="blaadjes"
                />
                <div
                  class="
                    font-semibold
                    bebas
                    text-3xl
                    mt-4
                    text-center text-white text-shadow-custom
                  "
                >
                  Repeated Refills
                </div>
              </div>
            </a>
          </slide>
          <slide :index="6">
            <a href="/challenge?challenge=SecondHandGems">
              <div class="rounded-full bg-white h-full m-auto w-3/4 shadow-2xl">
                <img
                  src="../static/img/svg/secondhand.svg"
                  class="p-12"
                  alt="blaadjes"
                />
                <div
                  class="
                    font-semibold
                    bebas
                    text-3xl
                    mt-4
                    text-center text-white text-shadow-custom
                  "
                >
                  SecondHand Gems
                </div>
              </div>
            </a>
          </slide>
          <slide :index="7">
            <a href="/challenge?challenge=TreasureTroveWardrobe">
              <div class="rounded-full bg-white h-full m-auto w-3/4 shadow-2xl">
                <img
                  src="../static/img/svg/wardrobe.svg"
                  class="p-12"
                  alt="blaadjes"
                />
                <div
                  class="
                    font-semibold
                    bebas
                    text-3xl
                    mt-4
                    text-center text-white text-shadow-custom
                  "
                >
                  Treasure Trove Wardrobe
                </div>
              </div>
            </a>
          </slide>
          <slide :index="8">
            <a href="/challenge?challenge=LeftOverLetsGo">
              <div class="rounded-full bg-white h-full m-auto w-3/4 shadow-2xl">
                <img
                  src="../static/img/svg/leftover.svg"
                  class="p-12"
                  alt="blaadjes"
                />
                <div
                  class="
                    font-semibold
                    bebas
                    text-3xl
                    mt-4
                    text-center text-white text-shadow-custom
                  "
                >
                  Leftover Let's Go
                </div>
              </div>
            </a>
          </slide>
          <slide :index="9">
            <a href="/challenge?challenge=ItsOnlyFair">
              <div class="rounded-full bg-white h-full m-auto w-3/4 shadow-2xl">
                <img
                  src="../static/img/svg/fair.svg"
                  class="p-12"
                  alt="blaadjes"
                />
                <div
                  class="
                    font-semibold
                    bebas
                    text-3xl
                    mt-4
                    text-center text-white text-shadow-custom
                  "
                >
                  It's Only Fair
                </div>
              </div>
            </a>
          </slide>
          <slide :index="10">
            <a href="/challenge?challenge=PutOnTurnDown">
              <div class="rounded-full bg-white h-full m-auto w-3/4 shadow-2xl">
                <img
                  src="../static/img/svg/tempature.svg"
                  class="p-12"
                  alt="blaadjes"
                />
                <div
                  class="
                    font-semibold
                    bebas
                    text-3xl
                    mt-4
                    text-center text-white text-shadow-custom
                  "
                >
                  Put On, Turn Down
                </div>
              </div>
            </a>
          </slide>
          <slide :index="11">
            <a href="/challenge?challenge=PullThePlug">
              <div class="rounded-full bg-white h-full m-auto w-3/4 shadow-2xl">
                <img
                  src="../static/img/svg/switch.svg"
                  class="p-12"
                  alt="blaadjes"
                />
                <div
                  class="
                    font-semibold
                    bebas
                    text-3xl
                    mt-4
                    text-center text-white text-shadow-custom
                  "
                >
                  Pull The Plug
                </div>
              </div>
            </a>
          </slide>
          <slide :index="12">
            <a href="/challenge?challenge=SwitchItUp">
              <div class="rounded-full bg-white h-full m-auto w-3/4 shadow-2xl">
                <img
                  src="../static/img/svg/bulb.svg"
                  class="p-12"
                  alt="blaadjes"
                />
                <div
                  class="
                    font-semibold
                    bebas
                    text-3xl
                    mt-4
                    text-center text-white text-shadow-custom
                  "
                >
                  Switch It Up
                </div>
              </div>
            </a>
          </slide>
          <slide :index="13">
            <a href="/challenge?challenge=LinedUp">
              <div class="rounded-full bg-white h-full m-auto w-3/4 shadow-2xl">
                <img
                  src="../static/img/svg/line.svg"
                  class="p-12"
                  alt="blaadjes"
                />
                <div
                  class="
                    font-semibold
                    bebas
                    text-3xl
                    mt-4
                    text-center text-white text-shadow-custom
                  "
                >
                  Lined up
                </div>
              </div>
              <div
                class="
                  font-semibold
                  bebas
                  text-3xl
                  mt-4
                  text-center text-white text-shadow-custom
                "
              >
                Lined up
              </div>
            </a>
          </slide>
          <slide :index="14">
            <a href="/challenge?challenge=WashedUp30">
              <div class="rounded-full bg-white h-full m-auto w-3/4 shadow-2xl">
                <img
                  src="../static/img/svg/laundry.svg"
                  class="p-12"
                  alt="blaadjes"
                />
                <div
                  class="
                    font-semibold
                    bebas
                    text-3xl
                    mt-4
                    text-center text-white text-shadow-custom
                  "
                >
                  Washed Up 30
                </div>
              </div>
            </a>
          </slide>
          <slide :index="15">
            <a href="/challenge?challenge=SkipTheLanding">
              <div class="rounded-full bg-white h-full m-auto w-3/4 shadow-2xl">
                <img
                  src="../static/img/svg/skipthelanding.svg"
                  class="p-12"
                  alt="blaadjes"
                />
                <div
                  class="
                    font-semibold
                    bebas
                    text-3xl
                    mt-4
                    text-center text-white text-shadow-custom
                  "
                >
                  Skip The Landing
                </div>
              </div>
            </a>
          </slide>
        </carousel-3d>
      </ClientOnly>

      <nav class="menu mb-4">
        <input
          type="checkbox"
          href="#"
          class="menu-open"
          name="menu-open"
          id="menu-open"
        />
        <div class="navigation w-full fixed">
          <label
            class="menu-open-button blob white bottom-0 mb-8 h-16 w-16"
            for="menu-open"
          >
            <img src="../static/img/svg/home.svg" class="p-2" alt="blaadjes" />
          </label>
          <svg
            class="fill-current left-0 w-full text-green-400"
            viewBox="0 0 830 150"
          >
            <path
              class="cls-1"
              d="M267.26,444l0-243.13c15.61-7,31.17-14.18,46.83-21.09a861.62,861.62,0,0,1,205.74-61.93,1017,1017,0,0,1,108.4-12.31c30.25-1.77,60.48-1.93,90.64-.9,77.13,2.64,153,13.94,227.22,35.8,52.61,15.5,103.58,35.19,152.44,60.2q0,121.68.09,243.36"
              transform="translate(-267.26 -104)"
            />
          </svg>
        </div>
        <a href="/challenges/" class="menu-item white h-16 w-16 mb-6 bottom-0">
          <img
            src="../static/img/svg/challengeoverview.svg"
            class="p-2"
            alt="blaadjes"
          />
        </a>
        <a href="/About/" class="menu-item white h-16 w-16 mb-6 bottom-0">
          <img src="../static/img/svg/about.svg" class="p-2" alt="blaadjes" />
        </a>
        <a href="/SocialHub/" class="menu-item white h-16 w-16 bottom-0 mb-6">
          <img src="../static/img/svg/hub.svg" class="p-2" alt="blaadjes"
        /></a>
      </nav>
    </main>
  </Layout>
</template>

<script>
export default {
  mounted() {},

  methods: {},
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
