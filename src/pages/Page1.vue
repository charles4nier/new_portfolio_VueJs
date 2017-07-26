<template>
  <section class="page1">
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
        <h1 ref="title" v-if="showTitle">Learn Eat</h1>
      </transition>
      <div class="carroussel">
        <!-- <div class="card">
          <p @click="test" class="cv-nav" :class="{active: developper}">Développeur Web</p>
            <div v-if="show" class="cv-container">
            </div>
        </div> -->
        <transition name="showImg">
          <div class="divrouge" v-if="showImg">
            <img  src="../assets/learn-eat.jpg" alt="">
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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
    }, 850)
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
    background: linear-gradient(to right, #fd746c, #ff9068);
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
    height: 75%;
    left: 40%;
    top: 15%;
    background-image: url('../assets/learn-eat.jpg');
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
    opacity: 0.7;
    background: #00C9FF;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #92FE9D, #00C9FF);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #92FE9D, #00C9FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */



  }

  .showBackgroundImg-enter-active {
    animation: showBackgroundImg .35s ease-out forwards;
  }

  @keyframes showBackgroundImg {
    0% { transform: translate3d(0, -90%, 0) scaleY(1.6);},
    5% {opacity: 1;},
    45% { transform: translate3d(0, -20%, 0);},
    90% {transform: scaleY(1);},
    100% { transform: translate3d(0, 0, 0);}
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
  }

  .title-enter-active {
    animation: titleEnter .35s ease-out forwards;
  }

  .title-leave-active {
    animation: titleLeave .4s ease-out forwards;
  }

  @keyframes titleEnter {
    0% { transform: translate3d(0, -110%, 0)},
    5% {opacity: 1;},
    45% { transform: translate3d(0, -20%, 0) scaleY(1.6);},
    90% {transform: scaleY(1);},
    100% { transform: translate3d(0, 0, 0);}
  }

  @keyframes titleLeave {
    0% { transform: translate3d(0, 0, 0) scaleY(1);},
    100% { transform: translate3d(0, -110%, 0) scaleY(2);}
  }

  .card {
    position: absolute;
    width: 450px;
    height: 500px;
    top: 15%;
    right: 11%;
    background-color: white;
    color: black;
    z-index: 3;
    border: 1px solid black;
  }

  .carroussel {
    display: flex;
    width: 86%;
    height: 35%;
    margin-top: 50%;
    overflow: hidden;
  }

  .carroussel .divrouge {
    background-color: red;
    width: 35%;
    height: 100%;
    z-index: 2;
    margin-left: 18%;
    transform-origin: 50% 0%;
    transform: translate3d(0, 0, 0);
  }

  .showImg-enter, .showImg-enter-active {
    animation: titleEnter .3s ease-out forwards;
  }

  .divrouge img {
    width: 100%;
    height: 100%;
    border: 1px solid rgb(220, 220, 220);
  }
</style>
