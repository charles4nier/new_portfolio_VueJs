<template>
  <div class="page1">
    <transition name="showBackgroundImg">
      <div v-if="showBackgroundImg" class="background-img-container">
        <div class="filterBackground">

        </div>
      </div>
    </transition>
    <transition name="test" type="animation" appear>
      <div class="colored-headband">

      </div>
    </transition>
    <div class="project-scene">
      <transition name="title" type="animation" appear>
        <h1 ref="title" v-if="showTitle">Les légumes<br> de Cédric</h1>
      </transition>
      <div class="visual-container">
        <div class="card">
          <transition name="showImg">
          <p v-if="showBackgroundImg">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </transition>
      </div>
        <transition name="showImg">
          <div class="carroussel" v-if="showImg">
            <img  src="../assets/royco2.png" alt="">
          </div>
        </transition>
      </div>
    </div>
    <a class="linkToWebSite" href="http://www.learn-eat.fr/" target="_blank">Voir le site</a>
  </div>
</template>

<script>
export default {
  name: 'Royco',
  data () {
    return {
      show: true,
      showTitle: false,
      showImg: false,
      showBackgroundImg: false
    }
  },
  mounted: function () {
    setTimeout(() => {
      this.showTitle = true
    }, 820)
    setTimeout(() => {
      this.showImg = true
    }, 900)
    setTimeout(() => {
      this.showBackgroundImg = true
    }, 1030)
  }
}
</script>

<style scoped>
  .page1 {
    position: relative;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: white;
    overflow: hidden;
  }

  .colored-headband {
    position: absolute;
    width: 100%;
    height: 160%;
    background: #DCE35B;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #45B649, #DCE35B);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #45B649, #DCE35B); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    left: 0;
    top: 55%;
    transform: translate3d(0,0,0) scaleY(0.17);
    transform-origin: 50% 0%;
    opacity: 0.8;
    z-index: 2;
  }

  .background-img-container {
    position: absolute;
    width: 55%;
    height: 80%;
    left: 40%;
    top: 15%;
    background: url('../assets/royco.png') 80%;
    background-size: cover;
    z-index: 1;
    /*filter: invert(75%);*/
    opacity: 1;
    transform-origin: 50% 30%;
    transform: skewX(-2deg) scaleY(1);
  }

  .filterBackground {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.3;
    background: #c21500;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #ffc500, #c21500);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #ffc500, #c21500); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .showBackgroundImg-enter-active {
    animation: showBackgroundImg .4s ease-out forwards;
  }

  @keyframes showBackgroundImg {
    0% {opacity: 0;},
    100% {opacity: 1;}
  }
/*
  .test-enter-active {
    animation: coloredHeadbandEnter .55s ease-out forwards .4s;
  }

  .test-leave-active {
    animation: coloredHeadbandLeave .6s ease-out forwards;
  }

  @keyframes coloredHeadbandEnter {
    0% { transform: translate3d(0, -650px, 0);},
    100% { transform: translate3d(0, 0, 0);}
  }*/

  .project-scene {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    z-index: 3;
  }

  h1 {
    position: absolute;
    width: 35%;
    transform-origin: bottom;
    transform: translate3d(0, 0, 0) scaleY(1) skewX(-3deg);
    top: 17%;
    left: 8%;
    font-size: 4em;
    opacity: 1;
    letter-spacing: -2px;
  }

  .title-enter {
    opacity: 0;
    transform: skewX(-3deg)
  }

  .title-enter-active {
    animation: titleEnter .35s ease-out forwards;
  }

  .title-leave-active {
    animation: titleLeave .4s ease-out forwards;
  }

  @keyframes titleEnter {
    0% { transform: translate3d(0, -110%, 0) scaleY(2) skewX(-3deg); opacity: 0;},
    5% {opacity: 1;},
    45% { transform: translate3d(0, -20%, 0) scaleY(1.6);},
    80% { transform: scaleY(1);},
    100% { transform: translate3d(0, 0, 0) skewX(-3deg);}
  }

  @keyframes titleLeave {
    0% { transform: translate3d(0, 0, 0) scaleY(1);},
    100% { transform: translate3d(0, -110%, 0) scaleY(2);}
  }

  .card {
    position: absolute;
    display: flex;
    align-items: center;
    width: 35%;
    height: 200px;
    top: 54%;
    right: 8%;
    color: black;
    z-index: 3;
  }

  .card p {
    font-size: 0.9em;
    font-weight: 500;
    color: white;
    overflow: hidden;
    line-height: -1.2;
  }

  .visual-container {
    display: flex;
    width: 86%;
    height: 35.1%;
    margin-top: 50vh;
    overflow: hidden;
  }

  .visual-container .carroussel {
    width: 40%;
    height: 100%;
    z-index: 2;
    margin-left: 14%;
    transform-origin: 50% 70%;
    transform: translate3d(0, 0, 0);
  }

  .showImg-enter, .showImg-enter-active {
    animation: showImgEnter .3s ease-out forwards;
  }

  @keyframes showImgEnter {
    0% { transform: translate3d(0, -110%, 0) scaleY(2); opacity: 0;},
    5% {opacity: 1;},
    95% { transform: translate3d(0, -20%, 0) scaleY(1.6);},
    100% { transform: translate3d(0, 0, 0) scaleY(1);}
  }

  .carroussel img {
    width: 100%;
    height: 100%;
    border: 1px solid rgb(220, 220, 220);
  }

  .linkToWebSite {
    position: absolute;
    bottom: 10%;
    right: 110px;
    z-index: 3;
    text-decoration: none;
    color: black;
    font-weight: 600;
    letter-spacing: -1px;
    transition: transform .2s ease-in-out;
  }

  .linkToWebSite:hover {
    transform: translate3d(10px, 0, 0);
  }

  .linkToWebSite::after {
    position: absolute;
    width: 45px;
    height: 2px;
    right: -95px;
    top: 10px;
    background-color: black;
    transform: scaleX(1.8);
    transform-origin: right;
    transition: transform .2s ease-in-out;
    content: '';
  }

  .linkToWebSite:hover::after {
    transform: scaleX(1.4) translate3d(-7px, 0, 0);
  }

  @media only screen and (max-width: 4000px) {
    h1 {
      width: auto;
      font-size: 5vw;
    }

    .card p{
      font-size: 1.2vw;
      padding: 0 10px;
    }

    .linkToWebSite {
      font-size: 1.3vw;
      bottom: 6%;
    }
  }

  @media only screen and (max-width: 1024px) and (orientation: landscape) {
    h1 {
      width: auto;
      font-size: 2.7vw;
      top: 55%;
      left: 28%;
      padding: 10px 20px;
      background-color: white;
    }

    br {
      display: none;
    }

    .background-img-container {
      width: 90%;
      left: 5%;
      top: 10%;
      transform: skewX(0);
    }

    .visual-container {
      width: 350px;
      margin-left: -28%;
    }

    .visual-container .carroussel{
      display: none;
    }

    .card {
      width: 65%;
    }

    .card p{
      margin-top: 5%;
      font-size: 1.7vw;
      padding: 0 10px;
    }

    .linkToWebSite {
      right: 10px;
      font-size: 0.75em;
      bottom: 19%;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
    h1 {
      width: auto;
      font-size: 2.7vw;
      top: 55%;
      left: 28%;
      padding: 10px 20px;
      background-color: white;
    }

    .colored-headband {
      opacity: 0.9;
    }

    br {
      display: none;
    }

    .card {
      display: flex;
      width: 68%;
      top: 60vh;
    }

    .card p{
      font-size: 1.7vh;
      padding: 0 10px;
    }

    .background-img-container {
      width: 90%;
      left: 5%;
      top: 10%;
      transform: skewX(0);
      background: url('../assets/royco.png') 20%;
      background-size: cover;
    }

    .visual-container .carroussel{
      display: none;
    }

    .linkToWebSite {
      font-size: 16px;
      font-weight: 600;
      right: 5%;
    }

    .linkToWebSite::after {
      display: none;
    }
  }

  @media only screen and (min-width: 880px) and (max-width: 1024px) and (orientation: landscape) {

    .colored-headband {
      opacity: 0.95;
    }

    .card p{
      margin-top: 10%;
    }
  }

  @media only screen and (max-width: 880px) {
    .visual-container .carroussel{
      display: none;
    }
  }

  @media only screen and (max-width: 650px) {

    h1 {
      font-size: 1.5em;
      background-color: rgba(255,255,255, 1);
      padding: 10px 20px;
      width: auto;
    }

    br {
      display: block;
    }

    .colored-headband {
      top: 40%;
      height: 180%;
      opacity: 1;
      background: #DCE35B;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to left, #98a900, #91cd52);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to left, #98a900, #91cd52); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }

    .background-img-container {
      height: 100vh;
      width: 100%;
      top: 0;
      left: 0;
      transform: skewX(0);
      background: url('../assets/royco.png') 40%;
      background-size: cover;
    }

    .card {
      width: 100vw;
      right: 0;
      top: 40%;
    }

    .card p{
      font-size: 3.6vw;
      padding: 0 10px;
    }

    .visual-container .carroussel {
      display: none;
    }

    .linkToWebSite {
      right: 30px;
      font-size: 0.8em;
      font-weight: normal;
      bottom: 32%;
      letter-spacing: normal;
    }

    .linkToWebSite::after {
      top: 8px;
      height: 1px;
    }
  }

  @media only screen and (max-width: 330px) {
    .card {
      width: 100vw;
      right: 0;
      top: 35%;
    }

    .card p {
      font-size: 12px;
      padding: 0 10px;
    }
  }
</style>
