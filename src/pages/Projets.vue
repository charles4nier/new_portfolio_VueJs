<template>
  <v-touch tag="section" v-on:swipedown="swipeDown" v-on:swipeup="swipeUp">
    <div id="projets" @wheel="scrollTo">
      <transition name="showNavProject">
        <nav v-if="show" class="projects-nav">
          <ul ref="ulProjects">
            <li class="li-menu" v-for="item in dataNav"><router-link class="nav-link" :to="{ path: item.link}" @click.native="goTo" :style="{ backgroundImage: 'url(' + item.style + ')' }"><span class="spanCache"></span><span class="spanMessage">{{ item.name }}</span></router-link></li>
          </ul>
        </nav>
      </transition>
      <transition name="showNavProject">
        <div v-if="show" class="arrowContainer">
          <v-touch v-on:tap="upNav">
            <span class="up-arrow"></span>
          </v-touch>
          <v-touch v-on:tap="downNav">
            <span class="down-arrow"></span>
          </v-touch>
        </div>
      </transition>
      <transition name="showCalc">
        <div class="calc" v-if="show" @click="show = !show"></div>
      </transition>
      <p @click="show = !show"><span>Plus de projets</span></p>
      <article :class="{'down-transition': downTransition, 'up-transition': upTransition} ">
        <transition name="projectsTransition">
          <router-view></router-view>
        </transition>
      </article>
      <span class="scroll-info">Scrollez pour naviguer</span>
    </div >
  </v-touch>
</template>

<script>
import Vue from 'vue'

let VueTouch = require('vue-touch')

Vue.use(VueTouch, {name: 'v-touch'})

export default {
  name: 'projets',
  data () {
    return {
      show: false,
      downTransition: true,
      upTransition: false,
      image: 'http://1.bp.blogspot.com/-8PfnHfgrH4I/TylX2v8pTMI/AAAAAAAAJJ4/TICBoSEI57o/s1600/search_by_image_image.png',
      dataNav: [
        {link: '/projets/learn-eat', name: 'Learn Eat', style: '../../static/assets/learnEat.png'},
        {link: '/projets/paris-foot-golf-club', name: 'Paris Foot Golf Club', style: '../../static/assets/pfgc2.png'},
        {link: '/projets/ik-music-production', name: 'Ik music Production', style: '../../static/assets/ikmusic.png'},
        {link: '/projets/les-legumes-de-cedric', name: 'Les légumes de Cédric', style: '../../static/assets/royco.png'}
      ]
    }
  },
  methods: {
    // fonction qui permet de naviguer au click
    goTo: function () {
      this.show = false
    },
    // fonction qui permet de naviguer grace au scroll de la souris
    scrollTo: function (event) {
      this.show = false
      // récupération de l'url
      let path = this.$route.path
      // navigation dans le tableau dataNav qui contient toutes les url
      for (let i = 0; i < this.dataNav.length; i++) {
        // on vérifie que le chemin l'url correspond bien à un lien stocké
        // dans dataNav
        if (path === this.dataNav[i].link) {
          // permet de détecter si le mouvement de la souris est vers le
          // ou ver le haut.
          // positif = vers le bas
          if (event.deltaY > 0) {
            // permet de gérer le sens du départ de la page
            this.downTransition = true
            this.upTransition = false
            // permet de vérifier si nous sommes à la fin du début this.dataNav et revenir au début ou pas
            if (i + 1 === this.dataNav.length) {
              this.$router.push(this.dataNav[0].link)
            } else {
              this.$router.push(this.dataNav[i + 1].link)
            }
          } else {
            // permet de gérer le sens du départ de la page
            this.downTransition = false
            this.upTransition = true
            // permet de vérifier si nous sommes au début du début this.dataNav et d'aller à la fin ou pas
            if (i === 0) {
              i = this.dataNav.length - 1
              this.$router.push(this.dataNav[i].link)
            } else {
              this.$router.push(this.dataNav[i - 1].link)
            }
          }
        }
      }
    },
    // Les méthodes swipeUp et swipeDown permettent une
    // navigation au swipe (aussi bien sur mobile que sur oridnateur)
    swipeUp: function () {
      let path = this.$route.path

      this.downTransition = false
      this.upTransition = true

      for (let i = 0; i < this.dataNav.length; i++) {
        if (path === this.dataNav[i].link) {
          if (i === 0) {
            i = this.dataNav.length - 1
            this.$router.push(this.dataNav[i].link)
          } else {
            this.$router.push(this.dataNav[i - 1].link)
          }
        }
      }
    },
    swipeDown: function () {
      let path = this.$route.path

      this.downTransition = true
      this.upTransition = false

      for (let i = 0; i < this.dataNav.length; i++) {
        if (path === this.dataNav[i].link) {
          if (i + 1 === this.dataNav.length) {
            this.$router.push(this.dataNav[0].link)
          } else {
            this.$router.push(this.dataNav[i + 1].link)
          }
        }
      }
    },
    upNav: function () {
      this.$refs.ulProjects.style.transform = 'translate3d(0, -100px, 0)'
    },
    downNav: function () {
      this.$refs.ulProjects.style.transform = 'translate3d(0, 100px, 0)'
    }
  }
}
</script>

<style scoped>
section {
  height: 100vh;
}

.scroll-info {
  position: absolute;
  left: 4%;
  bottom: 4%;
  font-size: 0.9em;
  letter-spacing: -1px;
  transform: skewX(-3deg);
  z-index: 5;
}

.scroll-info::before {
  position: absolute;
  width: 1px;
  height: 50px;
  top: -60px;
  left: calc(50% - 1px);
  background-color: black;
  transform: skewX(3deg);
  opacity: 0.6;
  content: '';
}

.calc {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(5,5,5,0.45);
  z-index: 140;
  opacity: 1;
  transition: opacity .1s ease-out;
  pointer-events: auto;
  filter: blur(40px);
}

.showCalc-leave-active {
  opacity: 0;
}

.showCalc-enter-active {
  opacity: 0;
}

.projects-nav {
  position: absolute;
  width: 350px;
  height: 100vh;
  border-right: 2px solid white;
  top: 0;
  left: 0;
  z-index: 150;
  transform-origin: top;
  transform: translate3d(0, 0, 0);
  transition-property: all;
  transition-duration: .3s;
  transition-timing-function: ease-in-out;
}

.showNavProject-enter {
  transform: translate3d(-350px, 0, 0);
}

.showNavProject-leave-active {
  transform: translate3d(-350px, 0, 0);
}

.arrowContainer {
  position: absolute;
  height: 100vh;
  width: auto;
  top: 0;
  left: 2%;
  transition: all .2s;
  z-index: 100000;
}

.up-arrow, .down-arrow {
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: green;
}

.up-arrow {
  top: 5%;
}

.down-arrow {
  bottom: 5%;
}

.projects-nav ul {
  height: 100%;
  width: 100%;
  background-color: black;
  transition: all .2s ease-in-out;
}

.projects-nav ul li {
  display: flex;
  height: 25%;
  width: 100%;
  justify-content: center;
  align-items: center;
  list-style-type: none;
}

.nav-link {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-size: cover;
  text-decoration: none;
}

.nav-link .spanCache {
  display: flex;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0, 0.9);
  color: white;
  font-weight: 600;
  z-index: 8;
  transition: all .2s ease-in-out;
}

.nav-link:hover .spanCache {
  background-color: rgba(0,0,0, 0);
  color: black;
}

.router-link-exact-active .spanCache{
  background-color: rgba(0,0,0, 0);
  color: black;
}

.nav-link .spanCache::before {
  position: absolute;
  width: 190px;
  height: 30%;
  z-index: 5;
  background-color: white;
  transform: skewX(-3deg) scaleX(1);
  transform-origin: left;
  transition: transform .2s ease-out;
  content: '';
}

.nav-link:hover .spanCache::before {
  transform: skewX(-3deg) scaleX(0);
}

.nav-link .spanCache::after {
  width: 192px;
  height: 30%;
  z-index: 5;
  background-color: black;
  transform: skewX(-3deg) scaleX(0);
  transform-origin: right;
  transition: transform .2s ease-out;
  content: '';
}

.nav-link:hover .spanCache::after, .router-link-exact-active .spanCache::after {
  transform: skewX(-3deg) scaleX(1);
}

.spanMessage {
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 0.9em;
  font-weight: 600;
  z-index: 8;
  transition: all .2s ease-in-out;
}

.nav-link:hover .spanMessage, .router-link-exact-active .spanMessage {
  color: white;
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
  height: 110%;
  background-color: black;
  transition: all .1s ease-out;
  content: '';
}

p::before {
  top: 0;
  left: 0;
  transform: translate3d(0, -110%, 0);
}

p:hover::before {
  transform: translate3d(0, 0, 0);
}

p::after {
  top: 0;
  right: 0;
  transform: translate3d(0, 200%, 0);
}

p:hover::after {
  transform: translate3d(0, 0, 0);
}

p:hover span {
  transition: all .1s ease-out;
  color: white;
  z-index: 2;
}

article {
  position: absolute;
  width: 100%;
  height: 100%;
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

.down-transition .projectsTransition-leave-active {
  transition-property: all;
  transition-duration: .4s;
  transition-timing-function: ease-in-out;
  transform: translate3d(0, 100%, 0);
  opacity: 0;
}

.up-transition .projectsTransition-leave-active {
  transition-property: all;
  transition-duration: .4s;
  transition-timing-function: ease-in-out;
  transform: translate3d(0, -100%, 0);
  opacity: 0;
}

.router-link-exact-active {
  background-color: red;
}

@media only screen and (max-width: 4000px) {
  p {
    width: 12%;
    height: 7%;
    font-size: 1.4vw;
  }
}


@media only screen and (max-width: 1024px) and (orientation: landscape) {
  p {
    left: 5%;
  }

  .scroll-info {
    display: none;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  p {
    width: 16%;
    height: 5.5%;
    font-size: 1.4vh;
  }
}
@media only screen and (min-width: 330px) and (max-width: 650px) and (orientation: landscape) {
  p {
    width: 130px;
    height: 40px;
    top: 80.5%;
    font-size: 13px;
    left: calc(50% - 65px);
  }
}

@media only screen and (max-width: 650px) and (orientation: portrait){

  p {
    width: 130px;
    height: 40px;
    left: calc(50% - 65px);
    top: 90.5%;
    font-size: 0.9em;
  }

  .scroll-info {
    display: none;
  }
}
</style>
