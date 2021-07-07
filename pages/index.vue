<template>
  <Layout>
    <main
      class="h-screen flex flex-col justify-center items-center bg-yellow-200"
    >
      <div id="turn">
        <img src="../assets/img/turndevice.png" alt="turn device" />
      </div>

      <h1 class="text-white font-medium text-center absolute top-0 block mt-12">
        Green<br />challenge<br />popup
      </h1>
      <svg class="arrows">
        <path class="a1" d="M0 0 L30 32 L60 0"></path>
        <path class="a2" d="M0 20 L30 52 L60 20"></path>
        <path class="a3" d="M0 40 L30 72 L60 40"></path>
      </svg>
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
export default {};
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
