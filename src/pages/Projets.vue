<template>
  <section id="projets" @wheel="scrollTo">
    <!-- <span class="scroll-up"><img src="../assets/uparrow.png" alt="une pointe de flèche" width="15px"></span>
    <span class="scroll-down"><img src="../assets/uparrow.png" alt="une pointe de flèche" width="15px"></span> -->
    <transition name="showNavProject">
      <nav v-if="show" class="projects-nav">
        <ul>
          <li v-for="item in dataNav" :style="{ backgroundImage: 'url(' + item.style + ')' }"><router-link class="nav-link" :to="{ path: item.link}" @click.native="goTo">{{ item.name }}</router-link></li>
        </ul>
      </nav>
    </transition>
    <div class="calc" v-if="show"></div>
    <p @click="show = !show"><span>Plus de projets</span></p>
    <article :class="{'down-transition': downTransition, 'up-transition': upTransition} ">
      <transition name="projectsTransition">
        <router-view></router-view>
      </transition>
    </article>
    <span class="scroll-info">Scrollez pour naviguer</span>
  </section >
</template>

<script>
export default {
  name: 'projets',
  data () {
    return {
      show: false,
      downTransition: true,
      upTransition: false,
      image: 'http://1.bp.blogspot.com/-8PfnHfgrH4I/TylX2v8pTMI/AAAAAAAAJJ4/TICBoSEI57o/s1600/search_by_image_image.png',
      dataNav: [
        {link: '/projets/learn-eat', name: 'Learn Eat', style: 'http://1.bp.blogspot.com/-8PfnHfgrH4I/TylX2v8pTMI/AAAAAAAAJJ4/TICBoSEI57o/s1600/search_by_image_image.png'},
        {link: '/projets/paris-foot-golf-club', name: 'Paris Foot Golf Club', style: '../assets/ikmusic.png'},
        {link: '/projets/ik-music-production', name: 'Ik music Production', style: '../assets/ikmusic.png'},
        {link: '/projets/les-legumes-de-cedric', name: 'Les légumes de Cédric', style: '../assets/ikmusic.png'}
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
    }
  }
}
</script>

<style scoped>
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
  /*background-image: url('../assets/pfgc.png');*/
  background-size: cover;
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
</style>
