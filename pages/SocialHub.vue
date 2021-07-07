<template>
  <Layout>
    <script
      type="application/javascript"
      defer
      src="https://widget.taggbox.com/embed.min.js"
    ></script>
    <main class="pb-24 flex flex-col justify-center items-center brown">
      <img
        src="../static/img/svg/hub2.svg"
        class="p-12 h-2/4 w-2/4 top-0 m-auto mt-8"
        alt="blaadjes"
      />
      <div
        class="
          text-white text-shadow-custom text-center
          bebas
          text-4xl
          -mt-8
          mb-8
          h-auto
        "
      >
        Social Hub
      </div>
      <div
        class="taggbox-container"
        style="width: 100%; height: 100%; overflow: auto"
      >
        <div
          class="taggbox-socialwall"
          data-wall-id="61187"
          view-url="https://widget.taggbox.com/61187"
        ></div>
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
      <script>
        import VueInstagram from "vue-instagram";
      </script>
    </main>
  </Layout>
</template>
