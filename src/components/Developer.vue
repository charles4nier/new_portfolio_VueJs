<template id="">
  <article>
    <div v-if="developper" class="cv-container">
      <ul>
        <li v-for="experience in developperData"><span class="blue">{{ experience.agence }}</span>
          <div v-for="(value, key) in experience.missions">{{ value }}
          </div>
        </li>
      </ul>
    </div>
    
  </article>
</template>
<script>
  export default {
    data () {
      return {
        developper: true,
        developperData: [
          {agence: 'WNP909 (juin 2017)', missions: ['- Réalisation d\'un template de site (React / Vue.js)', '- Débuggage d\'une appli  (Vue.js / Laravel)', '- Réalisation d\'un prototype pour un appel d\'offre (Jquery / HammerJs)']},
          {agence: 'Simplon (janvier 2017 - aujourd\'hui)', missions: ['- Réalisation d\'un portfolio avec Jquery. Actuellement en refonte (Vue.js / Gsap)', '- Réalisation du site du Paris Foot Golf Club (Maquette / Diagramme de Classe / Cahier des charges / Php 7 / Jquery / Sql)', '- Réalisation d\'une interface utilisateur type blog (Maquette/ Php 7 / Sql / AngularJS)', '- Maquette du site Act ! (Html / Css)']},
          {agence: 'FreeLance (novembre 2016 - Décembre 2016)', missions: ['- Réalisation du site Learn-eat ( Design / Maquette / Cahier des charges / Jquery )']}
        ]
      }
    }
  }
</script>
