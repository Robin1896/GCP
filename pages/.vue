<template>
  <Layout>
    <main class="flex flex-col justify-center items-center bg-yellow-200">
      <div class="bg-yellow-200 h-screen absolute w-full"></div>
      <div class="h-screen w-full fixed"></div>

      <div class="m-auto block z-10">
        <img
          src="../../static/img/Challenge-AllPedal,LessMetal.png"
          class="p-12 h-2/4 w-2/4 top-0 m-auto mt-8"
          alt="blaadjes"
        />
        <div
          class="
            text-white text-shadow-custom text-center
            bebas
            text-4xl
            m-auto
            mt-4
          "
        >
          "Food Challenge"
        </div>
        <div class="mt-8 px-8 text-center montserrat">
          Gooi jij je restjes in de prullenbak? Zo’n klein beetje eten
          onderschat je al snel, maar al die kleine beetjes tellen toch op tot
          40 kilo weggegooid voedsel per persoon per jaar. Terwijl al dat eten
          eigenlijk nog prima eetbaar is. Als je geen eten meer weggooit bespaar
          je zo’n €140 per jaar.
        </div>
        <div class="interior w-3/4 justify-center m-auto text-center">
          <a
            class="
              btn
              montserrat-bold
              bg-white
              text-gray-800
              rounded-full
              p-4
              m-auto
              block
              justify-center
              mt-8
            "
            href="#open-modal"
            >ACCEPT CHALLENGE</a
          >
        </div>

        <div class="pt-8 pb-24">
          <div>
            <p
              class="
                text-gray-800
                montserrat-bold
                transform-90-text
                absolute
                montserrat
                font-bold
                text-5xl
                -left-16
              "
            >
              EFFECTEN
            </p>
          </div>
          <div class="w-full flex flex-wrap">
            <div class="block w-1/5"></div>
            <div class="block w-1/5 m-auto">
              <img
                src="../../static/img/Challenge-AllPedal,LessMetal.png"
                class="p-2 top-0 m-auto"
                alt="blaadjes"
              />
            </div>
            <div class="block w-3/5">
              <div class="py-4 px-4 text-center montserrat m-auto">
                Bespaar geld en bouw je spaarrekening op.
              </div>
            </div>
          </div>

          <div class="w-full flex flex-wrap">
            <div class="block w-1/5"></div>
            <div class="block w-1/5 m-auto">
              <img
                src="../../static/img/Challenge-AllPedal,LessMetal.png"
                class="p-2 top-0 m-auto"
                alt="blaadjes"
              />
            </div>
            <div class="block w-3/5">
              <div class="py-4 px-4 text-center montserrat m-auto">
                Bespaar geld en bouw je spaarrekening op.
              </div>
            </div>
          </div>

          <div class="w-full flex flex-wrap">
            <div class="block w-1/5"></div>
            <div class="block w-1/5 m-auto">
              <img
                src="../../static/img/Challenge-AllPedal,LessMetal.png"
                class="p-2 top-0 m-auto"
                alt="blaadjes"
              />
            </div>
            <div class="block w-3/5">
              <div class="py-4 px-4 text-center montserrat m-auto">
                Bespaar geld en bouw je spaarrekening op.
              </div>
            </div>
          </div>
        </div>
        <div id="open-modal" class="modal-window">
          <div class="h-full p-0 bg-black opacity-60 text-white">
            <div>
              <a href="#" title="Close" class="modal-close ml-4 mt-4 text-3xl">
                <font-awesome-icon icon="times" />
              </a>

              <div
                class="
                  text-white
                  font-bold
                  text-shadow-custom text-center
                  bebas
                  text-4xl
                  m-auto
                  pt-40
                "
              >
                Challenge accepted
              </div>
              <div class="slidecontainer">
                <input
                  type="range"
                  min="1"
                  max="100"
                  value="60"
                  v-model.number="picked"
                  class="slider block m-auto"
                  id="myRange"
                />
                <p
                  class="bebas text-2xl text-center"
                  v-if="picked >= 0 && picked <= 20"
                >
                  ROOKIE
                </p>
                <p
                  class="bebas text-2xl text-center"
                  v-if="picked >= 21 && picked <= 40"
                >
                  LESS ROOKIE
                </p>
                <p
                  class="bebas text-2xl text-center"
                  v-if="picked >= 41 && picked <= 60"
                >
                  MIDDLE
                </p>
                <p
                  class="bebas text-2xl text-center"
                  v-if="picked >= 61 && picked <= 80"
                >
                  LESS VETERAN
                </p>
                <p
                  class="bebas text-2xl text-center"
                  v-if="picked >= 81 && picked < 99"
                >
                  VETERAN
                </p>
                <p class="bebas text-2xl text-center" v-if="picked >= 99">
                  MANIAC
                </p>
              </div>
              <div class="montserrat text-center w-3/5 m-auto block">
                Vul hier je gegevens in en doe mee met de challeneg
              </div>
            </div>
            <div class="justify-center w-screen m-auto block">
              <div class="w-screen m-auto">
                <div class="">
                  <input
                    class="text-black block m-auto mt-8 h-10 w-64 p-2"
                    placeholder="edit me"
                  />
                </div>
              </div>
            </div>
            <div class="justify-center w-screen m-auto block">
              <div class="w-screen m-auto">
                <div class="">
                  <input
                    class="text-black block m-auto mt-4 h-10 w-64 p-2"
                    placeholder="edit me"
                  />
                </div>
              </div>
            </div>
            <div class="interior w-3/4 justify-center m-auto text-center">
              <a
                class="
                  btn
                  montserrat-bold
                  bg-white
                  text-gray-800
                  rounded-full
                  p-4
                  m-auto
                  block
                  justify-center
                  mt-8
                "
                href="#open-modal"
                >ACCEPT CHALLENGE</a
              >
            </div>
            <p class="bebas text-2xl text-center mt-8">CHALLENGE A FRIEND</p>

            <div class="w-screen m-auto flex justify-center">
              <div class="text-5xl px-4 pt-2">
                <font-awesome-icon icon="envelope" />
              </div>
              <div class="text-5xl px-4 pt-2">
                <font-awesome-icon :icon="['fab', 'whatsapp']" />
              </div>
            </div>
          </div>
        </div>
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
              class="menu-open-button bottom-0 mb-8 h-16 w-16"
              for="menu-open"
            >
              <img
                src="../../static/img/leaves.png"
                class="p-2"
                alt="blaadjes"
              />
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
          <a href="#" class="menu-item blue h-16 w-16 mb-6 bottom-0">
            <i class="fa fa-anchor"></i>
          </a>
          <a href="#" class="menu-item green h-16 w-16 mb-6 bottom-0">
            <i class="fa fa-coffee"></i>
          </a>
          <a
            href="/challenges/"
            class="menu-item lightblue h-16 w-16 bottom-0 mb-6"
          >
            <i class="fa fa-diamond"></i
          ></a>
        </nav>
      </div>
    </main>
  </Layout>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<script>
export default {
  asyncData(context) {
    // called every time before loading the component
    // as the name said, it can be async
    // Also, the returned object will be merged with your data object
    var test = " joo";

    return {
      picked: "",

      result: test,
    };
  },
  fetch() {
    // The `fetch` method is used to fill the store before rendering the page
  },
  head() {
    // Set Meta Tags for this Page
  },
  // and more functionality to discover
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
