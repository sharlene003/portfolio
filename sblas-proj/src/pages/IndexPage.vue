<template>
  <div class="q-pa-md">
    <div id="content1">
      <!-- <code>
        <div>
          <p class="typingEffect">console.log('Hello world')</p>
        </div>
      </code> -->
      <q-carousel
        v-model="slide"
        vertical
        transition-prev="slide-down"
        transition-next="slide-up"
        swipeable
        autoplay
        animated
        control-color="primary"
        control-type="flat"
        navigation-icon="radio_button_unchecked"
        navigation
        padding
        height="500px"
        class="text-white shadow-1 rounded-borders"
      >
        <q-carousel-slide
          name="style"
          class="bg bg1 column no-wrap flex-center"
        >
          <div class="column" style="height: 150px">
            <div class="col-4 col-md-6">
              <div class="offset-header">
                <h1 class="hero-header">
                  <span class="offset-header"><span>Hi !</span></span>
                  <span class="offset-header"><span>I'm Sharlene</span></span>

                  <a
                    href="../../src/assets/cv/sblas.pdf"
                    download="sblas_CV"
                    target="_blank"
                  >
                    <span class="offset-header">
                      <q-btn
                        color="grey-4"
                        text-color="primary"
                        glossy
                        unelevated
                        icon="download"
                        label="DOWNLOAD CV" /></span
                  ></a>
                </h1>
              </div>
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="bg bg2 column no-wrap flex-center">
          <div class="column" style="height: 150px">
            <div class="col-4 col-md-6">
              <div class="offset-header">
                <h1 class="hero-header">
                  <span class="offset-header text-white"
                    ><span class="text-weight-thin">I am a</span></span
                  >
                  <span class="offset-header text-white"
                    ><span class="text-weight-thin">Web Developer</span></span
                  >
                  <span class="offset-header"
                    ><span class="text-subtitle2 text-white"
                      >100% Quasar Framework Made by sblas.com</span
                    ></span
                  >

                  <a
                    href="../../src/assets/cv/sblas.pdf"
                    download="sblas_CV"
                    target="_blank"
                  >
                    <span class="offset-header">
                      <q-btn
                        color="grey-4"
                        text-color="primary"
                        glossy
                        unelevated
                        icon="download"
                        label="DOWNLOAD CV" /></span
                  ></a>
                </h1>
              </div>
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>

    <div id="content2" class="q-mt-xl">
      <AboutSection></AboutSection>
    </div>

    <div id="content3" class="q-mt-xl">
      <ExpertiseSection></ExpertiseSection>
    </div>
    <div id="content5" class="q-mt-xl">
      <RecentWorkSection></RecentWorkSection>
    </div>
    <div id="content4" class="q-mt-xl">
      <ExperienceSection></ExperienceSection>
    </div>
    <div class="q-mt-xl">
      <div class="q-mt-xl"></div>
    </div>
  </div>
</template>

<script>
import csvFile from "../../src/assets/cv/sblas.pdf";
import ExpertiseSection from "../components/pages/ExpertiseSection.vue";
import ExperienceSection from "../components/pages/ExperienceSection.vue";
import AboutSection from "../components/pages/AboutSection.vue";
import RecentWorkSection from "../components/pages/RecentWorkSection.vue";
export default {
  components: {
    ExpertiseSection,
    ExperienceSection,
    AboutSection,
    RecentWorkSection,
  },
  data() {
    return {
      slide: "style",
      pdf: "../assets/sblas.pdf",
    };
  },
};
</script>
<style scoped>
.offset-header {
  overflow: hidden;
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 44px;
  letter-spacing: -0.02em;
  max-width: 500px;
  margin: 10px 0;
  color: black;
  animation-name: slideUp;
  animation-duration: 3s;
  animation-timing-function: ease-in;
  display: block;
}

.offset-header {
  overflow: hidden;
  animation-name: slideUp;
  animation-duration: 2s;
  animation-timing-function: ease-in;
  display: block;
}

.offset-header-odd > span {
  text-align: left;
  animation-delay: 0s;
  animation-fill-mode: forwards;
}

.offset-header-even > span {
  text-align: right;
  animation-delay: 150ms;
  animation-fill-mode: both;
}

@keyframes slideUp {
  0%,
  50% {
    transform: translateY(100%);
    opacity: 0;
  }

  50%,
  100% {
    transform: translateY(0);
    opacity: 1;
    transition: all 0.2s ease-in;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.fade-in-image {
  animation: fadeIn 5s;
}

body {
  padding: 0;
  margin: 0;
  font-family: "Inter", sans-serif;
  overflow-x: hidden;
  background-color: #080202;
}

img {
  display: block;
  padding: 0;
  margin: 0;
}

/* CLASS STYLES */
.main-section {
  padding: 70px 0;
  width: 80%;
  margin: 0 auto;
}

.img_container {
  width: 100%;
  height: 80vh;
}

@keyframes slide-in-left {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}
@keyframes slide-in-right {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
}
.anime_img {
  object-fit: cover;
  animation: img_key linear forwards;
  animation-timeline: view(block);
  animation-range: cover 0% cover 50%;
  overflow: hidden;
  animation-name: slide-in-left;
  animation-duration: 2s;
  animation-timing-function: ease-in;
  display: block;
}

.bg2 {
  background-image: url(https://i.pinimg.com/564x/1e/8d/4a/1e8d4aac852da471d416223ca38606f3.jpg);
  float: left;
  margin-right: -100%;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
}

.bg1 {
  background-image: url(https://i.pinimg.com/736x/8d/85/6d/8d856d73c15c6281d004b33f291412bf.jpg);
  float: left;
  margin-right: -100%;
  display: block;
  background-size: auto;
  background-repeat: no-repeat;
}

.slider {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  overflow: hidden;
  background-color: #000;
  color: #fff;
  transition: all 1s;
}

.slider.close {
  top: 100%;
  height: 0;
}

code {
  background-color: #202129;
  border-radius: 4px;
  padding: 20px;
  height: 70px;
  color: red;
  display: flex;
  margin: 0 auto;
  align-items: center;
  width: 350px;
}
.typingEffect {
  width: 0;
  overflow: hidden; /* Ensure the text is not visible until the typewriter effect*/
  border-right: 2px solid violet; /* The cursor*/
  font-size: 16px;
  white-space: nowrap; /* Keeps the text on a single line */
  animation: typing 2s steps(30) forwards, blink 1s infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
@keyframes blink {
  0%,
  45% {
    border-color: transparent;
  }
  50%,
  100% {
    border-color: white;
  }
}
</style>
