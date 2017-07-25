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
  <div id="projets">
    <nav class="projects-nav">
      <ul>
        <li v-for="item in dataNav"><router-link class="nav-link" :to="{ path: item.link}">{{ item.name }}</router-link></li>
      </ul>
    </nav>
    <p>Plus de projets</p>
    <transition name="projectsTransition">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'projets',
  data () {
    return {
      dataNav: [
        {link: '/projets/page1', name: 'Page 1'},
        {link: '/projets/page2', name: 'Page 2'}
      ]
    }
  }
}
</script>

<style scoped>
.projects-nav {
  position: absolute;
  width: 150px;
  height: 100%;
  background-color: lime;
  top: 5%;
  left: 5%;
  z-index: 150;
}

.porjects-nav ul {
  display: flex;
  flex-direction: column;
}

p {
  position: absolute;
  display: flex;
  width: 150px;
  height: 50px;
  color: black;
  border: 2px solid black;
  top: 65%;
  left: 3%;
  z-index: 100;
  font-weight: 600;
  justify-content: center;
  align-items: center;
}

.projectsTransition-enter {
  opacity: 0;
}

.projectsTransition-enter-active {
  animation-name: projectsTransitionEnter;
  animation-duration: .4s;
  animation-delay: .4s;
  animation-timing-function: ease-out;
  transform-origin: 50% 50%;
}

@keyframes projectsTransitionEnter {
  0% {transform: scale(2); opacity: 1},
  100% {transform: scale(1); opacity: 0}
}

.projectsTransition-leave-active {
  transition-property: all;
  transition-duration: .4s;
  transition-timing-function: ease-in-out;
  transform: translate3d(0, -100%, 0);
  opacity: 0
}

.router-link-exact-active {
  background-color: red;
}
</style>
