<template>
  <div class="page1">
    <div class="background-img-container">
      <div class="filterBackground"></div>
    </div>
    <div class="colored-headband">
      <p>Les légumes de Cédric est une landing page qui présente l'activité d'un ami.<br>
      Mes missions: charte graphique, maquette, développement et mise en ligne du site.</p>
    </div>
    <div class="project-scene">
      <h1 ref="title">Les légumes<br> de Cédric</h1>
      <div class="visual-container">
        <div class="carroussel">
          <img  src="../assets/royco2.png" alt="">
        </div>
      </div>
    </div>
    <a class="linkToWebSite" href="http://ikmusic.org/" target="_blank">Voir le site</a>
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
    display: flex;
    width: 100%;
    height: 28%;
    justify-content: flex-end;
    align-items: center;
    background: #DCE35B;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #45B649, #DCE35B);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #45B649, #DCE35B); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    left: 0;
    top: 55%;
    opacity: 0.9;
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

  .colored-headband p {
    width: 40%;
    min-width: 320px;
    font-size: 0.9em;
    font-weight: 500;
    color: white;
    overflow: hidden;
    line-height: -1.2;
    margin-right: 5%;
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

    .colored-headband p{
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

    .colored-headband p{
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

    br {
      display: none;
    }

    .colored-headband p{
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

    .colored-headband p{
      margin-top: 10%;
    }

    .background-img-container {
      background: url('../assets/pfgc2.png') bottom scroll;
      background-size: auto;
    }
  }

  @media only screen and (max-width: 768px) and (orientation: landscape) {
    h1 {
      width: auto;
      font-size: 2.7vw;
      top: 15%;
      left: 18%;
      padding: 10px 20px;
      background-color: white;
    }

    .colored-headband p{
      margin-top: 0;
      padding: 0 10px;
    }
  }

  @media only screen and (min-width: 330px) and (max-width: 650px) and (orientation: landscape) {
    h1 {
      font-size: 16px;
      padding: 10px 20px;
      width: auto;
      top: 16%;
      left: 12%;
    }

    .colored-headband {
      top: 40%;
      height: 40%;
      opacity: 0.9;
      background: #DCE35B;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to left, #98a900, #91cd52);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to left, #98a900, #91cd52); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }

    .colored-headband p{
      width: 75%;
      font-size: 12px;
      margin-left: 5%;
      margin-right: auto;
      padding: 0 10px;
    }

    .linkToWebSite {
      right: 10px;
      font-size: 0.8em;
      font-weight: normal;
      bottom: 32%;
      letter-spacing: normal;
    }

    .linkToWebSite::after {
      display: none;
    }
  }

  @media only screen and (max-width: 650px) and (orientation: portrait){

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
      height: 35%;
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

    .colored-headband p{
      font-size: 3.6vw;
      padding: 0 10px;
      margin: 0;
    }

    .visual-container .carroussel {
      display: none;
    }

    .linkToWebSite {
      right: 30px;
      font-size: 0.8em;
      font-weight: normal;
      bottom: 26%;
      letter-spacing: normal;
    }

    .linkToWebSite::after {
      top: 8px;
      height: 1px;
    }
  }

  @media only screen and (max-width: 330px) and (orientation: portrait){
    .colored-headband p {
      font-size: 12px;
      padding: 0 10px;
    }
  }
</style>
