<template>

  <Layout>
    <div id="app">
  <div>
          <div v-for="content in test" :key="content.challengeName">
         <div v-if="test">
           
    <main class=" flex flex-col justify-center items-center bg-yellow-200">
      
      <div id="turn">
        <img src="../assets/img/turndevice.png" alt="turn device" />
      </div>
      <div class="bg-yellow-200 h-screen absolute w-full"></div>
      <div class=" w-full fixed"></div>

      <div class="m-auto block z-10">
        <img
          :src="'/img/svg/' + content.imageUrl"
          class="p-12 h-2/4 w-2/4 top-0 m-auto mt-8"
          alt="blaadjes"
        />
        <div class="text-white text-shadow-custom text-center bebas text-4xl">
          {{content.name}}
        </div>
        <div class="mt-20 px-12 text-center montserrat ">
          {{content.challengeDescription}}
        </div>
        <div class="interior px-12 justify-center m-auto text-center">
          <a
            class="btn montserrat-bold bg-white text-gray-800 rounded-full p-4 block justify-center mt-8"
            href="#open-modal"
            >ACCEPT CHALLENGE</a
          >
        </div>

        <div class="pt-8 pb-24">
          <div class="w-full flex">
            <div class="w-24 absolute">
              <p
                class="text-gray-800 montserrat-bold transform -rotate-90 montserrat font-bold text-5xl mt-48 l-16"
              >
                EFFECTEN
              </p>
            </div>
            <div class="block w-20 ml-20 ">
              <img src="../static/img/svg/bullet.svg" alt="blaadjes" />
            </div>
            <div class="py-4 -ml-4 mr-12 text-center montserrat m-auto block w-48">
              {{content.effectOne}}
            </div>
          </div>
          <div class="w-full flex">
            <div class="w-24 absolute">
              <p
                class="text-gray-800 montserrat-bold transform -rotate-90 montserrat font-bold text-5xl mt-48 l-16"
              ></p>
            </div>
            <div class="block w-20 ml-20 ">
              <img src="../static/img/svg/bullet.svg" alt="blaadjes" />
            </div>
            <div class="py-4 -ml-4 mr-12 text-center montserrat m-auto block w-48">
              {{content.effectTwo}}
            </div>
          </div>
          <div class="w-full flex">
            <div class="w-24 absolute">
              <p
                class="text-gray-800 montserrat-bold transform -rotate-90 montserrat font-bold text-5xl mt-48 l-16"
              ></p>
            </div>
            <div class="block w-20 ml-20 ">
              <img src="../static/img/svg/bullet.svg" alt="blaadjes" />
            </div>
            <div class="py-4 -ml-4 mr-12 text-center montserrat m-auto block w-48">
              {{content.effectThree}}
            </div>
          </div>
          <div class="w-full flex">
            <div class="w-24 absolute">
              <p
                class="text-gray-800 montserrat-bold transform -rotate-90 montserrat font-bold text-5xl mt-48 l-16"
              ></p>
            </div>
            <div class="block w-20 ml-20 ">
              <img src="../static/img/svg/bullet.svg" alt="blaadjes" />
            </div>
            <div class="py-4 -ml-4 mr-12 text-center montserrat m-auto block w-48">
              {{content.effectFour}}
            </div>
          </div>
        </div>

        <div id="open-modal" class="modal-window">
          <div class="h-full p-16 leaf opacity-60 text-white">
            <div>
              <a href="#" title="Close" class="modal-close ml-4 mt-4 text-3xl">
                <font-awesome-icon icon="times" />
              </a>
              <p
                class="bebas text-2xl text-center"
                v-if="total1"
              >
                <img
                  src="../static/img/svg/challengeacc1.svg"
                  alt="blaadjes"
                  class="custom"
                />
              </p>
              <p
                class="bebas text-2xl text-center"
                v-if="total2"
              >
                <img src="../static/img/svg/challengeacc2.svg" alt="blaadjes" />
              </p>
              <p
                class="bebas text-2xl text-center"
                v-if="total3"
              >
                <img src="../static/img/svg/challengeacc3.svg" alt="blaadjes" />
              </p>
              <div
                class="text-white font-bold text-shadow-custom text-center bebas text-4xl m-auto pt-8"
              >
                Challenge accepted
              </div>
              
              <div class="slidecontainer ">
                <input
                  type="range"
                  min="1"
                  max="100"
                  value="20"
                  v-model.number="picked"
                  class="slider block m-auto"
                  id="myRange"
                  name="image"
                />
                <p
                  class="bebas text-2xl text-center mt-2 pb-8"
                  v-if="total1"
                >
                  1 maand <br> Green Novice
                </p>
                <p
                  class="bebas text-2xl text-center mt-2 pb-8"
                  v-if="total2"
                >
                  3 maanden <br> Eco Warrior
                </p>
                <p
                  class="bebas text-2xl text-center mt-2 pb-8"
                  v-if="total3"
                >
                  6 maanden <br> Sustainability Soldier
                </p>
              </div>
              <div class="montserrat text-center w-3/4 m-auto block pb-4">
                Voer je gegevens in en start de challenge!
              </div>

























              <!-- <form>
              <div class="justify-center">
                <input
                  class="text-black block m-auto mt-8 h-10 w-64 p-2 rounded-lg"
                  type="text"
                  name="user_name"
                />
              </div>
              <div class="justify-center">
                <input
                  class="text-black block m-auto mt-2 h-10 w-64 p-2 rounded-lg"
                  placeholder="Email"
                    type="email" 
            v-model="email"
            name="email"
                />
                    <textarea name="message"></textarea>
    <input type="submit" value="Send">
              </div>
              </form> -->

<form class="contact-form" @submit.prevent="sendEmail" >
                
              <label>Name</label>
                              <input
                  class="text-black block m-auto mt-2 h-10 w-64 p-2 rounded-lg"
                  type="text"
                  name="name"
                  v-model="name"
                  placeholder="Naam"
                />
              <label>Email</label>
                              <input
                  class="text-black block m-auto mt-2 h-10 w-64 p-2 rounded-lg"
                  placeholder="Email"
                    type="email" 
            v-model="email"
            name="email"
                />
                
              
            
  <!-- <div id="app">
    <test v-on:click="sendEmail">test</test>
  </div> -->







              <div class="interior w-full justify-center text-center flex">
                <button
                type="submit" value="Send"
                  class="btn montserrat-bold border bg-white text-gray-800 rounded-full p-1 w-full block justify-center mt-8 flex"
                  href="#open-modal"
                  ><p class="m-auto pt-px">ACCEPT CHALLENGE</p><font-awesome-icon class="text-5xl sizes pr-4 align-middle" :icon="['far', 'envelope']" /></button
                >
                
              </div>



</form>

                                  <a class="interior w-full justify-center text-center flex"
                    href="whatsapp://send?text=Hey! Ik doe mee met de Green Challenge; een groen wedstrijdje om de wereld duurzamer te maken. Kijken wie het 
langer volhoudt? ;) 

Check hier de Washed Up 30-challenge!
 http://greenchallengepopup.nl/Challenge-WashedUp30"
                    data-action="share/whatsapp/share"
                  >
                <button
                type="submit" value="Send"
                  class="btn montserrat-bold border bg-white text-gray-800 rounded-full p-1 w-full block justify-center mt-8 flex"
                  href="#open-modal"
                  ><p class="m-auto pt-px">CHALLENGE A FRIEND</p><font-awesome-icon class="text-5xl pr-4 align-middle" :icon="['fab', 'whatsapp']" /></button
                >
                </a>
                
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
              class="menu-open-button blob white bottom-0 mb-8  h-16 w-16"
              for="menu-open"
            >
              <img
                src="../static/img/svg/home.svg"
                class="p-2 "
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
        <a href="/About/" class="menu-item white h-16 w-16 mb-6 bottom-0">
          <img src="../static/img/svg/about.svg" class="p-2 " alt="blaadjes" />
        </a>
        <a href="/SocialHub/" class="menu-item white h-16 w-16 mb-6 bottom-0">
          <img src="../static/img/svg/hub.svg" class="p-2 " alt="blaadjes" />
        </a>
        <a href="/challenges/" class="menu-item white h-16 w-16 bottom-0 mb-6">
          <img
            src="../static/img/svg/challengeoverview.svg"
            class="p-2 "
            alt="blaadjes"
        /></a>
            <img
              src="../static/img/svg/challengeoverview.svg"
              class="p-2 "
              alt="blaadjes"
          />
          </a>
        </nav>
      </div>
    </main>



























         </div>
       </div>
  </div>
</div>
    </Layout>
    </template>


<script>
</script>
<script>
import data from "../static/data.json";
import emailjs from "emailjs-com";
export default {
  data() {
    return {
      data: data,
      challenge: this.$route.query.challenge,
      picked: 20,
      email: undefined,
      name: undefined,
      test: "",
    };
  },
  created() {
    let result = data.filter((obj) => {
      return obj.challengeName === this.challenge;
    });
    this.test = result;
    console.log(result);
  },

  computed: {
    total1: function () {
      if (this.picked >= 0 && this.picked <= 33) return true;
    },
    total2: function () {
      if (this.picked >= 34 && this.picked <= 66) return true;
    },
    total3: function () {
      if (this.picked >= 67 && this.picked <= 100) return true;
    },
  },
  methods: {
    alert: function () {},
    sendEmail: function (e) {
      if (this.name == undefined) {
        alert("niets ingevuld");
      } else if (this.email == undefined) {
        alert("niets ingevuld");
        console.log(this.test);
      } else {
        var x = "";
        var y = "";
        var z = "";
        if (this.picked >= 0 && this.picked <= 33) {
          x = "https://greenchallengepopup.nl/challengeacc1.svg";
          y = "1 maand";
          z =
            "1 maand. Dat is de periode waarvoor jij jezelf hebt uitgedaagd. Natuurlijk hoef je dit niet alleen te doen! Via deze button kun je vrienden en andere bekenden uitnodigen. Wie van jullie houd het langer vol en creëert een nieuwe, groene gewoonte? Succes met je challenge. Dankzij jou inzet wordt de wereld een stuk groener, stap bij stap. Oh ja, vergeet het groeikaartje niet te planten!";
        }
        if (this.picked >= 34 && this.picked <= 66) {
          x = "https://greenchallengepopup.nl/challengeacc2.svg";
          y = "3 maanden";
          z =
            "1 maand. Dat is de periode waarvoor jij jezelf hebt uitgedaagd. Natuurlijk hoef je dit niet alleen te doen! Via deze button kun je vrienden en andere bekenden uitnodigen. Wie van jullie houd het langer vol en creëert een nieuwe, groene gewoonte? Succes met je challenge. Dankzij jou inzet wordt de wereld een stuk groener, stap bij stap. Oh ja, vergeet het groeikaartje niet te planten!";
        }
        if (this.picked >= 67 && this.picked <= 100) {
          x = "https://greenchallengepopup.nl/challengeacc3.svg";
          y = "6 maanden";
          z =
            "1 maand. Dat is de periode waarvoor jij jezelf hebt uitgedaagd. Natuurlijk hoef je dit niet alleen te doen! Via deze button kun je vrienden en andere bekenden uitnodigen. Wie van jullie houd het langer vol en creëert een nieuwe, groene gewoonte? Succes met je challenge. Dankzij jou inzet wordt de wereld een stuk groener, stap bij stap. Oh ja, vergeet het groeikaartje niet te planten!";
        }
        var templateParams = {
          image:
            "https://greenchallengepopup.nl/img/svg/" + this.test[0].imageUrl,
          challengename: this.test[0].challengeName,
          challengedescription: this.test[0].challengeDescription,
          levelimage: x,
          levelimagetitle: y,
          effectenimage: "https://greenchallengepopup.nl/bullet.svg",
          leveltext: z,
          effectone: this.test[0].effectOne,
          name: this.name,
          email: this.email,
          notes: x,
        };

        emailjs
          .send(
            "service_qxf4siu",
            "template_84s7uzk",
            templateParams,
            "user_L9DI1MyFFJLes28r3f3Co"
          )
          .then(
            function (response) {
              alert("Check je inbox voor je geaccepteerde challenge.");
              console.log("SUCCESS!", response.status, response.text);
            },
            function (error) {
              alert(
                "Je email is niet verzonden, de gegevens zijn niet in orde!"
              );
              console.log("FAILED...", error);
            }
          );
      }
    },
  },
};
</script>
