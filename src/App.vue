<!-- <template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>Bonjour</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->

<template>
  <div id="app">
    <nav class="main-nav">
      <div class="button-menu">
        <div class="first-bar"></div>
        <div class="second-bar"></div>
        <div class="third-bar"></div>
      </div>
      <ul>
        <li><router-link class="main-nav-link" to="/projets/learn-eat">Projets</router-link></li>
          <li><router-link class="main-nav-link" to="/a-propos">A propos de moi</router-link></li>
        <li><a class="main-nav-link" href="https://github.com/charles4nier" target="_blank"><img src="./assets/gitHub.svg" alt="l'icône de github" width="18px"></a></li>
        <li><a class="main-nav-link" href="https://www.linkedin.com/in/charles-fournier-856723121/" target="_blank"><img src="./assets/linkedin.svg" alt="l'icône de github" width="18px"></a></li>
      </ul>
    </nav>
    <main ref="main">
      <transition name="mainTransition">
        <router-view></router-view>
      </transition>
    </main>
    <div ref="background1" class="background1"></div>
    <div ref="background2" class="background2"></div>
    <div ref="background3" class="background3"></div>
  </div>
</template>

<script>
export default {
  name: 'app',
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

  .main-nav {
    position: absolute;
    display: flex;
    width: 100%;
    height: 80px;
    justify-content: flex-end;
    z-index: 10;
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
    transition: all .1s ease-in-out;
    margin: 2px 0;
    overflow: hidden;
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

  .button-menu:hover .second-bar {<div ref="background1" class="background1"></div>
    <div ref="background2" class="background1"></div>
    <div ref="background3" class="background1"></div>
    transform: translate3d(2px,0,0) skewX(-10deg) rotate(0deg);
  }

  .button-menu:hover .first-bar::after, .button-menu:hover .third-bar::after {
    transform: translate3d(100%, 0, 0);
  }

  .button-menu:hover .second-bar::after {
    transform: translate3d(-100%, 0, 0);
  }

  .main-nav ul {
    display: flex;
  }

  .main-nav ul li {
    font-size: 0.9em;
    letter-spacing: -1px;
    font-weight: 600;
    margin-right: 20px;
    margin-top: 10px;
    list-style-type: none;
  }

  .background1, .background2, .background3 {
    position: absolute;
    height: 100%;
    width: 33.4%;
    top: 0;
    background: #4CA1AF;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #C4E0E5, #4CA1AF);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #C4E0E5, #4CA1AF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    z-index: 10;
  }

  .background1 {
    transform: translate3d(-30%, -100%, 0);
    transition: transform .2s ease-out;
  }

  .background2 {
    transform: translate3d(0, 100%, 0);
    transition: transform .2s ease-out .1s;
    left: 33.4%;
  }

  .background3 {
    transform: translate3d(30%, -100%, 0);
    transition: transform .2s ease-out .2s;
    left: 66.8%;
  }

  .mainTransition-enter {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  .mainTransition-enter-active {
    animation-name: mainTransitionEnter;
    animation-duration: .5s;
    animation-timing-function: ease-out;
    transform-origin: 50% 30%;
    transform: scale(1);
  }

  @keyframes mainTransitionEnter {
    0% {opacity: 0; transform: translate3d(0, -100%, 0) scaleX(1.6);},
    100% {opacity: 1; transform: translate3d(0, 0, 0) scaleX(1);}
  }

  .mainTransition-leave-active {
    transition-property: all;
    transition-duration: .4s;
    transition-timing-function: ease-in-out;
    transform-origin: 50% 30%;
    transform: translate3d(0, 100%, 0) scaleY(0.8);
    opacity: 0;
  }
</style>
