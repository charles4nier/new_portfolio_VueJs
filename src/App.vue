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
