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
        <li>Projets</li>
        <li>A propos de moi</li>
        <li><a href="https://github.com/charles4nier"><img src="./assets/gitHub.svg" alt="l'icône de github" width="18px" target="_blank"></a></li>
        <li><a href="https://github.com/charles4nier"><img src="./assets/linkedin.svg" alt="l'icône de github" width="18px" target="_blank"></a></li>
      </ul>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
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

  .main-nav {
    position: absolute;
    display: flex;
    width: 100%;
    height: 80px;
    justify-content: flex-end;
    z-index: 5;
  }

  .button-menu {
    position: absolute;
    width: 30px;
    height: 20px;
    top: 12%;
    left: 4%;
    cursor: pointer;
    z-index: 5;
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

  .button-menu:hover .second-bar {
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

</style>
