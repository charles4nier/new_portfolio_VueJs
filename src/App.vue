<template>
  <div id="app">
    <transition
      @before-enter="beforeCalc"
      @enter="enterCalc"
      @leave="leaveCalc"
      :css="false"
    >
      <div v-if="showMenu" class="calc" v-on:click="openMenu"></div>
    </transition>
    <nav class="main-nav">
      <div ref="buttonMenu" class="button-menu" v-on:click="openMenu">
        <div class="first-bar"></div>
        <div class="second-bar"></div>
        <div class="third-bar"></div>
      </div>
      <transition-group
        tag="ul"
        :css="false"
        @before-enter="beforeEnterList"
        @enter="enterList"
        @leave="leaveList"
        class="hide-menu"
      >
          <li v-if="showMenu" :key="3" :data-index="1"><a href="mailto:charles.4nier@gmail.com" target="_top">Accueil</a></li>
          <li v-if="showMenu" :key="2" :data-index="2"><a href="../static/assets/cv_Charles_Fournier.pdf" download>Mon CV</a></li>
          <li v-if="showMenu" :key="1" :data-index="3"><a href="mailto:charles.4nier@gmail.com" target="_top">charles.4nier@gmail.com</a></li>
      </transition-group>
      <ul class="right-menu">
        <li><router-link class="main-nav-link" to="/projets/learn-eat">Projets</router-link></li>
        <li><router-link class="main-nav-link" to="/a-propos">Mon Cv</router-link></li>
        <li><a class="main-nav-link" href="https://github.com/charles4nier" target="_blank"><img src="./assets/gitHub.svg" alt="l'icône de github" width="18px"></a></li>
        <li><a class="main-nav-link" href="https://www.linkedin.com/in/charles-fournier-856723121/" target="_blank"><img src="./assets/linkedin.svg" alt="l'icône de github" width="18px"></a></li>
      </ul>
    </nav>
    <main ref="main">
      <transition name="mainTransition" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import Vue from 'vue'
import Velocity from 'velocity-animate'

let VueTouch = require('vue-touch')

Vue.use(VueTouch, {name: 'v-touch'})

export default {
  name: 'app',
  data () {
    return {
      showMenu: false
    }
  },
  methods: {
    mainTransition: function () {
      this.$refs.background1.style.transform = 'translate3d(0,0,0)'
      this.$refs.background2.style.transform = 'translate3d(0,0,0)'
      this.$refs.background3.style.transform = 'translate3d(0,0,0)'

      setTimeout(() => {
        this.$refs.background1.style.transform = 'translate3d(-50%,100%,0)'
        this.$refs.background2.style.transform = 'translate3d(0,-100%,0)'
        this.$refs.background3.style.transform = 'translate3d(50%,100%,0)'
      }, 600)
    },
    openMenu: function () {
      this.showMenu = !this.showMenu
      this.$refs.buttonMenu.classList.toggle('active')
    },
    beforeEnterList: function (el) {
      el.style.opacity = 0
    },
    enterList: function (el, done) {
      var delay = el.dataset.index * 130
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 1, translateY: '5px', rotateZ: '0' },
          { duration: 450 },
          { complete: done }
        )
      }, delay)
    },
    leaveList: function (el, done) {
      Velocity(
        el,
        { opacity: 0, translateY: '100%' },
        { duration: 320 },
        { complete: done }
      )
    },
    beforeEnterCalc: function (el) {
      el.style.opacity = 1
    },
    enterCalc: function (el, done) {
      el.style.pointerEvents = 'auto'
      Velocity(
        el,
        { opacity: 1 },
        { duration: 550 },
        { complete: done }
      )
    },
    leaveCalc: function (el, done) {
      el.style.pointerEvents = 'none'
      Velocity(
        el,
        { opacity: 0 },
        { duration: 150 },
        { complete: done }
      )
    }
  }
}
</script>

<style>
  #app {
    position: relative;
    height: 100vh;
    width: 100vw;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  main {
    transition: opacity .2s ease-out;
  }

  li {
    list-style-type: none;
  }

  .calc {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.95);
    z-index: 140;
  }

  .main-nav {
    position: absolute;
    display: flex;
    width: 100%;
    height: 80px;
    justify-content: flex-end;
    z-index: 180;
    pointer-events: none;
  }

  .main-nav-link  {
    text-decoration: none;
    color: black;
    pointer-events: auto;
  }

  .button-menu {
    position: absolute;
    width: 30px;
    height: 20px;
    top: 12%;
    left: 4%;
    cursor: pointer;
    z-index: 5;
    pointer-events: auto;
  }

  .first-bar, .second-bar, .third-bar {
    position: relative;
    width: 30px;
    height: 2px;
    background-color: #2d2d2a;
    transform: translate3d(0,0,0) skewX(-10deg) rotate(0deg);
    transition: all .3s ease-in-out;
    margin: 2px 0;
    overflow: hidden;
  }

  .active .first-bar, .active .second-bar, .active .third-bar {
    background-color: white;
  }

  .active .first-bar {
    transform: translate3d(0,28px,0) skewX(0deg) rotate(45deg);
  }

  .active .second-bar {
    transform: translate3d(50px,4px,0) skewX(0deg) rotate(0deg);
    opacity: 0;
  }

  .active .third-bar {
    transform: translate3d(0,20px,0) skewX(0deg) rotate(-45deg);
  }

  .first-bar::after, .second-bar::after, .third-bar::after {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: white;
    transition: transform .2s ease-out;
    content: '';
  }

  .first-bar::after, .third-bar::after {
    transform: translate3d(-100%, 0, 0);
  }

  .second-bar::after {
    transform: translate3d(100%, 0, 0);
  }

  .button-menu:hover .first-bar, .button-menu:hover .third-bar {
    transform: translate3d(-2px,0,0) skewX(-10deg) rotate(0deg);
  }

  .button-menu:hover .second-bar {
    transform: translate3d(2px,0,0) skewX(-10deg) rotate(0deg);
  }

  .button-menu:hover .first-bar::after, .button-menu:hover .third-bar::after {
    transform: translate3d(100%, 0, 0);
  }

  .button-menu:hover .second-bar::after {
    transform: translate3d(-100%, 0, 0);
  }

  .active:hover .first-bar {
    transform: translate3d(0,28px,0) skewX(0deg) rotate(45deg);
  }

  .active:hover .third-bar {
    transform: translate3d(0,20px,0) skewX(0deg) rotate(-45deg);
  }

  .main-nav ul.right-menu {
    display: flex;
  }

  .main-nav ul.right-menu li {
    font-size: 0.9em;
    letter-spacing: -1px;
    font-weight: 600;
    margin-right: 20px;
    margin-top: 10px;
  }

  ul.hide-menu {
    position: absolute;
    display: flex;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    transform: translateY(-300px);
  }

  ul.hide-menu li {
    position: relative;
    display: flex;
    width: 200px;
    height: 45px;
    justify-content: center;
    align-items: center;
    color: white;
    z-index: 1000000;
  }

  ul.hide-menu li a {
    position: relative;
    font-size: 17px;
    font-weight: bold;
    text-decoration: none;
    color: white;
    pointer-events: auto;
    transform: skewX(-3deg);
  }

  ul.hide-menu li a::after {
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: white;
    bottom: -3px;
    left: 0;
    transition: all .2s ease-out;
    transform: scaleX(0);
    content: '';
  }

  ul.hide-menu li a:hover::after {
    transform: scaleX(1);
  }

  .mainTransition-enter {
    animation-name: mainTransitionEnter;
    animation-duration: .5s;
  }

  @keyframes mainTransitionEnter {
    0% {opacity: 0; trans  nav {
    background-color: white;
  }form: translate3d(0, -100%, 0);},
    100% { opacity: 0; transform: translate3d(0, -100%, 0);}
  }

  .mainTransition-enter-active {
    animation-name: mainTransitionEnterActive;
    animation-duration: .5s;
    animation-timing-function: ease-out;
    transform-origin: 50% 30%;
    transform: scale(1);
  }

  @keyframes mainTransitionEnterActive {
    0% {opacity: 0; transform: translate3d(0, -100%, 0) scaleY(2);},
    80% {opacity: 0; transform: scaleY(1.6);},
    100% {opacity: 1; transform: translate3d(0, 0, 0)scaleY(1);}
  }

  .mainTransition-leave-active {
    transition-property: all;
    transition-duration: .5s;
    transition-timing-function: ease-out;
    transform-origin: 50% 50%;
    transform: translate3d(0, 100%, 0);
    opacity: 0;
  }

  @media only screen and (min-width: 1370px) and (max-width: 4000px) and (orientation: landscape) {
    .main-nav-link {
      font-size: 1.2vw;
    }

    .main-nav-link img {
      width: 1.2vw;
    }

    .button-menu div {
      width: 3vw;
      height: 0.2vw;
      margin-bottom: 0.2vw;
    }
  }

  @media only screen and (max-width: 650px) {
    .main-nav {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 50px;
      background-color: white;
    }

    .button-menu {
      top: 23px;
    }

    footer {
      position: absolute;
      width: 100%;
      height: 80px;
      background-color: white;
      bottom: 0;
      left: 0;
      z-index: 1;
    }
  }
</style>
