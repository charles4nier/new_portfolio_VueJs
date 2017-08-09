<template id="Developper">
  <article>
    <transition name="experiences-transition">
      <div v-if="showDeveloper" class="cv-container">
        <ul>
          <li v-for="experience in developperData"><span class="blue">{{ experience.agence }}</span>
            <div v-for="(value, key) in experience.missions">{{ value }}
            </div>
          </li>
        </ul>
      </div>
    </transition>
  </article>
</template>

<script>
  export default {
    props: ['showDeveloper'],
    name: 'Developer',
    data () {
      return {
        developperData: [
          {agence: 'Simplon (janvier 2017 - aujourd\'hui) :', missions: ['- Réalisation d\'un portfolio avec Vue Js 2', '- Animation d\'un atelier Vue Js 2', '- Réalisation du site du Paris Foot Golf Club (Maquette / Diagramme de Classe / Cahier des charges / Php 7 / Jquery / Sql)', '- Réalisation d\'une interface utilisateur type blog (Maquette/ Php 7 / Sql / AngularJS)', '- Maquette du site Act ! (Html / Css)']},
          {agence: 'WNP909 (juin 2017) :', missions: ['- Réalisation d\'un template de site (React / Vue.js)', '- Débuggage d\'une appli  (Vue.js / Laravel)', '- Réalisation d\'un prototype pour un appel d\'offre (Jquery / HammerJs)']},
          {agence: 'FreeLance (novembre 2016 - Décembre 2016) :', missions: ['- Réalisation du site Learn-eat ( Design / Maquette / Cahier des charges / Jquery )', '- Réalisation du site Ik Music Production ( Design / Maquette / Cahier des charges / Jquery )']}
        ]
      }
    }
  }
</script>

<style scoped>
  article {
    position: relative;
    width: 550px;
    height: 450px;
    margin-top: -25px;
    margin-left: 8%;
    padding: 15px 5px;
    overflow: hidden;
  }

  .cv-container {
    overflow: hidden;
    transition: all .3s ease-out;
    transform-origin: 100% 50%;
  }

  li {
    list-style-type:none;
    margin-bottom: 35px;
    color: #ff5e62;
  }

  li span {
    width: 75%;
    display: block;
    font-weight: 600;
    font-size: 0.9em;
    margin-bottom: 10px;
  }

  ul div {
    font-size: 14px;
    margin-bottom: 8px;
    color: white;
  }

  .experiences-transition-enter, .experiences-transition-leave {
    opacity: 0;
  }

  .experiences-transition-enter-active {
    animation: showExperiences .3s ease-out forwards;
  }

  @keyframes showExperiences {
    0% { opacity: 0;},
    100% { transform: translate3d(0, 0, 0);}
  }

  .experiences-transition-leave-active {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  @media only screen and (max-width: 1200px) {
    article {
      display: none;
    }
  }
</style>
