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
  <section id="projets">
    <transition name="showNavProject">
      <nav v-if="show" class="projects-nav">
        <ul>
          <li v-for="item in dataNav"><router-link class="nav-link" :to="{ path: item.link}" @click.native="test">{{ item.name }}</router-link></li>
        </ul>
      </nav>
    </transition>
    <div class="calc" v-if="show"></div>
    <span class="up-arrow"><img src="../assets/uparrow.png" alt="une pointe de flèche" width="25px"></span>
    <p @click="show = !show"><span>Plus de projets</span></p>
    <span class="down-arrow"><img src="../assets/uparrow.png" alt="une pointe de flèche" width="25px"></span>
    <transition name="projectsTransition">
      <router-view></router-view>
    </transition>
  </section >
</template>

<script>
export default {
  name: 'projets',
  data () {
    return {
      show: false,
      dataNav: [
        {link: '/projets/page1', name: 'Page 1'},
        {link: '/projets/page2', name: 'Page 2'}
      ]
    }
  },
  methods: {
    test: function () {
      this.show = false
    }
  }
}
</script>

<style scoped>
.calc {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(5,5,5,0.65);
  z-index: 140;
}

.projects-nav {
  position: absolute;
  width: 250px;
  height: 100%;
  background-color: lime;
  top: 0;
  left: 0;
  z-index: 150;
  transform-origin: top;
  transform: translate3d(0, 0, 0);
  transition-property: all;
  transition-duration: .2s;
  transition-timing-function: ease-in-out;
}

.showNavProject-enter {
  transform: translate3d(-250px, 0, 0);
}

.showNavProject-leave-active {
  transform: translate3d(-250px, 0, 0);
}

.projects-nav ul {
  height: 100%;
  width: 100%;
}

.projects-nav ul li {
  display: flex;
  height: 150px;
  width: 100%;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  background-color: blue;
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
  cursor: pointer;
  overflow: hidden;
  transition: all .1s ease-out;
}

p:hover {
  box-shadow: 0 0 4px rgba(255,255,255, 0.4);
}

p::before, p::after {
  position: absolute;
  width: 50%;
  height: 100%;
  background-color: black;
  transition: all .1s ease-out;
  content: '';
}

p::before {
  top: 0;
  left: 0;
  transform: translate3d(0, -100%, 0);
}

p:hover::before {
  transform: translate3d(0, 0, 0);
}

p::after {
  top: 0;
  right: 0;
  transform: translate3d(-50%, 200%, 0);
}

p:hover::after {
  transform: translate3d(0, 0, 0);
}

p:hover span {
  transition: all .1s ease-out;
  color: white;
  z-index: 2;
}

.up-arrow {
  position: absolute;
  top: 50%;
  left: 8%;
  z-index: 5;
}

.down-arrow {
  position: absolute;
  bottom: 12%;
  left: 8%;
  z-index: 5;
  transform: rotate(180deg);
}

.projectsTransition-enter {
  opacity: 0;
}

.projectsTransition-enter-active {
  animation-name: projectsTransitionEnter;
  animation-duration: .4s;
  animation-delay: .4s;
  animation-timing-function: ease-out;
  transform-origin: 50% 100%;
}

@keyframes projectsTransitionEnter {
  0% {transform: scale(2); opacity: 0;},
  100% {transform: scale(1); opacity: 1;}
}

.projectsTransition-leave-active {
  transition-property: all;
  transition-duration: .4s;
  transition-timing-function: ease-in-out;
  transform: translate3d(0, 100%, 0);
  opacity: 0
}

.router-link-exact-active {
  background-color: red;
}
</style>
