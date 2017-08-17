<template>
  <div id="app">
    <transition
      @before-enter="beforeCalc"
      @enter="enterCalc"
      @leave="leaveCalc"
      :css="false"
    >
      <div v-if="showMenu" class="calc" ref="calc" v-on:click="openMenu">
        <DeveloperSkills :showChartDev="showChartDev"></DeveloperSkills>
        <Developer :showDeveloper="showDeveloper"></Developer>
      </div>
    </transition>
    <nav class="main-nav" ref="mainNav">

      <transition-group
        tag="ul"
        :css="false"
        @before-enter="beforeEnterList"
        @enter="enterList"
        @leave="leaveList"
        class="hide-menu"
      >
          <li v-if="showMenu" :key="2" :data-index="2"><a href="../static/assets/cv_Charles_Fournier.pdf" download><span>Télécharger mon CV</span></a></li>
          <li v-if="showMenu" :key="1" :data-index="3"><a href="mailto:charles.4nier@gmail.com" target="_top"><span>charles.4nier@gmail.com</span></a></li>
      </transition-group>

      <ul v-if="showNav" ref="rightMenu" class="right-menu">
        <li><router-link class="main-nav-link cv" to="/">home</router-link></li>
        <li><a @click="openMenu" class="main-nav-link cv" ref="cv">cv</a></li>
        <li><a href="https://github.com/charles4nier" target="_blank"class="main-nav-link cv">github</a></li>
        <li><a href="https://www.linkedin.com/in/charles-fournier-856723121/" target="_blank" class="main-nav-link cv">linkedin</a></li>
      </ul>
        <!-- <div ref="buttonMenu" class="button-menu" v-on:click="openMenu">
         <div class="first-bar"></div>
         <div class="third-bar"></div>
       </div> -->
    </nav>
    <main ref="main">
      <transition name="mainTransition" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
import Vue from 'vue'
import Velocity from 'velocity-animate'
import Developer from './components/Developer'
import DeveloperSkills from './components/DeveloperSkills'

let VueTouch = require('vue-touch')

Vue.use(VueTouch, {name: 'v-touch'})

export default {
  components: {Developer, DeveloperSkills},
  name: 'app',
  data () {
    return {
      showNav: true,
      showHomeButton: false,
      showDeveloper: false,
      showMenu: false,
      showChartDev: false
    }
  },
  mounted: function () {
    setTimeout(() => {
      this.showHomeButton = true
    }, 100)

    let path = this.$route.path
    if (path.match(/projets/)) {
      this.showHomeButton = true
      this.$refs.rightMenu.classList.add('active')
      this.$refs.mainNav.classList.add('active')
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
      if (this.showMenu === true) {
        setTimeout(() => {
          this.showDeveloper = true
        }, 550)
        setTimeout(() => {
          this.showChartDev = true
          this.$refs.rightMenu.classList.remove('active')
        }, 150)
      } else {
        this.showDeveloper = false
        this.showChartDev = false
        this.$refs.rightMenu.classList.add('active')
      }
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
          { opacity: 1, translateY: '55%' },
          { duration: 450 },
          { complete: done }
        )
      }, delay)
    },
    leaveList: function (el, done) {
      Velocity(
        el,
        { opacity: 0, translateY: '-100%' },
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
  },
  watch: {
    '$route' (to, from) {
      let path = this.$route.path
      if (path.match(/projets/)) {
        this.showHomeButton = true
        this.$refs.rightMenu.classList.add('active')
        this.$refs.mainNav.classList.add('active')
      } else {
        this.showHomeButton = false
        this.$refs.rightMenu.classList.remove('active')
        this.$refs.mainNav.classList.remove('active')
      }
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
    display: flex;
    top: 0;
    left: 0;
    justify-content: flex-start;
    align-items: center;
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
    cursor: pointer;
  }

  .main-nav ul.right-menu {
    display: flex;
    height: 20px;
    width: 250px;
    justify-content: center;
    opacity: 0;
    transform: translate3d(0, -50px, 0);
    transition: all .4s ease-out .2s;
  }

  .main-nav ul.right-menu.active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  .main-nav ul.right-menu li {
    height: 100%;
    font-size: 0.9em;
    letter-spacing: -1px;
    font-weight: 600;
    margin-right: 20px;
    margin-top: 12px;
  }

  .cv {
    position: relative;
    display: block;
    margin-top: -2px;
    font-size: 16px;
    font-weight: 600;
  }

  .cv::after {
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    background-color: black;
    bottom: -1px;
    left: 0;
    transform: scaleX(0) skewX(-15deg);
    transition: all .2s ease-out;
    content: '';
  }

  .cv:hover::after {
    transform: scaleX(1) skewX(-15deg);
  }

  ul.hide-menu {
    position: absolute;
    display: flex;
    width: 100vw;
    height: 100vh;
    top: 5%;
    left: 0;
    justify-content: center;
    align-items: flex-start;
    transform: translateY(0);
  }

  ul.hide-menu li {
    position: relative;
    display: flex;
    width: 220px;
    height: 40px;
    justify-content: space-around;
    align-items: center;
    color: white;
    z-index: 1000000;
    margin-left: 5px;
    margin-right: 5px;
  }

  ul.hide-menu li a {
    position: relative;
    width: 100%;
    height: 100%;
    font-size: 17px;
    font-weight: bold;
    text-decoration: none;
    color: white;
    pointer-events: auto;
    overflow: hidden;
  }

  ul.hide-menu span{
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    z-index: 5;
    transition: color .1s ease-out;
    font-style: italic;
  }


  ul.hide-menu li a::after {
    position: absolute;
    width: 100%;
    height: 100%;
    content: '';
    top: 0;
    left: 0;
    transform: translate3d(-100%, 0, 0);
    transition: transform .2s ease-out;
    background: #ff9966;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #ff5e62, #ff9966);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #ff5e62, #ff9966); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  ul.hide-menu li a:hover::after {
    transform: scaleX(1);
  }

  .mainTransition-enter {
    animation-name: mainTransitionEnter;
    animation-duration: .5s;
  }

  @keyframes mainTransitionEnter {
    0% {opacity: 0; transform: translate3d(0, -100%, 0);},
    100% { opacity: 0; transform: translate3d(0, -100%, 0);}
  }

  .mainTransition-enter-active {
    animation-name: mainTransitionEnterActive;
    animation-duration: .6s;
    animation-timing-function: ease-out;
    transform-origin: 50% 30%;
  }

  @keyframes mainTransitionEnterActive {
    0% {opacity: 0; transform: translate3d(0, -100%, 0);},
    /*80% {opacity: 0; transform: scaleY(1.6);},*/
    100% {opacity: 1; transform: translate3d(0, 0, 0);}
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

    .calc {
      justify-content: center;
    }

    .main-nav-link {
      font-size: 1.2vw;
    }

    .main-nav-link img {
      width: 1.2vw;
    }
  }



  @media only screen and (max-width: 750px) {
    nav {
      transition: all .2s ease-out;
    }

    .main-nav {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      background-color: rgba(0,0,0,0);
      padding-bottom: 15px;
    }

    .main-nav.active {
      background-color: black;
    }

    .main-nav ul.right-menu li a {
      color: white;
      font-size: 15px;
    }

    .cv::after {
      display: none;
    }
  }

  @media only screen and (max-width: 650px) and (orientation: portrait){

    ul.hide-menu {
      top: 30px;
    }

    ul.hide-menu li {
      width: 150px;
    }

    ul.hide-menu span {
      font-size: 12px;
    }

    .main-nav-link {
      font-size: 11px;
    }

    .main-nav-link img{
      width: 13px;
    }
  }
</style>
