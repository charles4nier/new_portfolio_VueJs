<template>
  <section class="page1">
    <transition name="test" type="animation" appear>
      <div class="colored-headband">

      </div>
    </transition>
    <div class="project-scene">
      <transition name="title" type="animation" appear>
        <h1>Learn Eat</h1>
      </transition>
      <div class="carroussel">
        <div class="card">
          <p @click="test" class="cv-nav" :class="{active: developper}">Développeur Web</p>
            <div v-if="show" class="cv-container">
            </div>
        </div>
        <div class="divrouge">
          <transition>
            <img v-if="show" src="" alt="">
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      show: true
    }
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
    height: 100%;
    background-color: pink;
    left: 0;
    top: 55%;
    transform: translate3d(0,0,0) scaleY(0.3);
    transform-origin: 50% 0%;
  }

  .test-enter-active {
    animation: coloredHeadbandEnter .65s ease-out forwards .3s;
  }

  .test-leave-active {
    animation: coloredHeadbandLeave .6s ease-out forwards;
  }

  @keyframes coloredHeadbandEnter {
    0% { transform: translate3d(0, -650px, 0) scaleY(1);},
    100% { transform: translate3d(0, 0, 0) scaleY(0.3);}
  }

  @keyframes coloredHeadbandLeave {
    100% { transform: translate3d(0, 0, 0) scaleY(0.3);},
    0% { transform: translate3d(0, -650px, 0) scaleY(15);}
  }

  .project-scene {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-around;
  }

  h1 {
    position: absolute;
    top: 10%;
    left: 8%;
    font-size: 4em;
    opacity: 1;
    transform-origin: bottom;
    transform: translate3d(0, 0, 0) scaleY(1);
  }

  .title-enter {
    opacity: 0;
  }

  .title-enter-active {
    animation: titleEnter .7s ease-out forwards .4s;
  }

  @keyframes titleEnter {
    0% { transform: translate3d(0, -110%, 0) scaleY(2); },
    95% { transform: translate3d(0, -20%, 0) scaleY(1.6); },
    100% { transform: translate3d(0, 0, 0) scaleY(1); }
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

  /*.card::before {
    position: absolute;
    width: calc(100% - 15px);
    height: 15px;
    bottom: -15px;
    right: 15px;
    background-color: rgba(0, 255, 0, 0.5);
    z-index: -1;
    content: '';
  }

  .card::after {
    position: absolute;
    width: 15px;
    height: 100%;
    top: 15px;
    right: -15px;
    background-color: rgba(0, 255, 0, 0.5);
    z-index: -1;
    content: '';
  }*/

  .carroussel {
    display: flex;
    width: 86%;
    height: 230px;
    margin-top: 50%;
    justify-content: space-around;
    flex-wrap: nowrap;
  }

  .carroussel .divrouge {
    background-color: red;
    width: 310px;
    height: 230px;
    z-index: 2;
  }
</style>
