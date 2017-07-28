<template>
  <section>
    <nav>
      <ul>
        <li @click="test" id="developper" class="cv-nav" :class="{active: developper}">Développeur Web</li>
        <li @click="test" id="agent" class="cv-nav" :class="{active: agent}">Agent Immobilier</li>
        <li @click="test" id="studio" class="cv-nav" :class="{active: studio}">Fondateur Studio Troll</li>
      </ul>
    </nav>
    <article class="experiences">

        <div v-if="developper" class="cv-container">
          <ul>
            <li v-for="experience in developperData"><span class="blue">{{ experience.agence }}</span>
              <div v-for="(value, key) in experience.missions">{{ value }}
              </div>
            </li>
          </ul>
        </div>
        <div v-if="agent" class="cv-container">
          <ul>
            <li v-for="experience in agentData"><span class="blue">{{ experience.agence }}</span>
              <div v-for="(value, key) in experience.missions">{{ value }}
              </div>
            </li>
          </ul>
        </div>
        <div v-if="studio" class="cv-container">
          <ul>
            <li v-for="experience in studioData"><span class="blue">{{ experience.agence }}</span>
              <div v-for="(value, key) in experience.missions">{{ value }}
              </div>
            </li>
          </ul>
        </div>
    </article>
    <div class="competences">
      <nav>
      </nav>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'competence',
    data () {
      return {
        developper: true,
        developperData: [
          {agence: 'WNP909 (juin 2017)', missions: ['- Réalisation d\'un template de site (React / Vue.js)', '- Débuggage d\'une appli  (Vue.js / Laravel)', '- Réalisation d\'un prototype pour un appel d\'offre (Jquery / HammerJs)']},
          {agence: 'Simplon (janvier 2017 - aujourd\'hui)', missions: ['- Réalisation d\'un portfolio avec Jquery. Actuellement en refonte (Vue.js / Gsap)', '- Réalisation du site du Paris Foot Golf Club (Maquette / Diagramme de Classe / Cahier des charges / Php 7 / Jquery / Sql)', '- Réalisation d\'une interface utilisateur type blog (Maquette/ Php 7 / Sql / AngularJS)', '- Maquette du site Act ! (Html / Css)']},
          {agence: 'FreeLance (novembre 2016 - Décembre 2016)', missions: ['- Réalisation du site Learn-eat ( Design / Maquette / Cahier des charges / Jquery )']}
        ],
        agent: false,
        agentData: [
          {agence: 'IPCSA (octobre 2014 - juillet 2016)', missions: ['- Négocation, vente, location, rédaction de compromis, suivi de dossier (syndic et notaires)', '- Mise en vente, communication', '- Prospection, signature de mandat']},
          {agence: 'Foncia (juin 2012 - septembre 2014)', missions: ['- Négocation, vente et location', '- Mise en vente, communication', '- Prospection, signature de mandat']}
        ],
        studio: false,
        studioData: [
          {agence: 'Conception', missions: ['- Logique interactive et ergonomique, arborescence des contenus']},
          {agence: 'Pilotage des projets', missions: ['- Gestion du calendrier, management de l\'équipe, élaboration du business plan']},
          {agence: 'Production', missions: ['- Création et intégration des contenus']}
        ]
      }
    },
    methods: {
      test: function (event) {
        switch (event.target.id) {
          case 'developper':
            this.agent = false
            this.studio = false
            this.developper = true
            break
          case 'agent':
            this.agent = true
            this.studio = false
            this.developper = false
            break
          case 'studio':
            this.agent = false
            this.studio = true
            this.developper = false
            break
        }
      }
    }
  }
</script>

<style scoped>
  section {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    top: 0;
    left: 0;
    padding: 0;
  }

  header {
    display: flex;
    width: 100%;
    height: 60px;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to top, #3c3b3f 0%, #605c3c 100%);
    box-shadow: 2px 2px 2px rgba(0,0,0,0.3);
    color: white;
  }

  .experiences, .competences {
    display: flex;
    position: relative;
    width: 50%;
    height: calc(100% - 60px);
    flex-direction: column;
  }

  .experiences {
    background-color: white;
  }

  .cv-container {
    margin-top: 70px;
    transition: all .3s;
  }


  nav {
    position: absolute;
    display: flex;
    width: 100%;
    height: 70px;
  }

  ul {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    align-items: flex-start;
    padding: 0;
    margin: 0;

  }

  li {
    position: relative;
    list-style-type: none;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    color: green;
    transition: all .2s ease-in-out;
  }

  li::before {
    position: absolute;
    top: 24px;
    left: calc(50% - 1px);
    width: 1px;
    height:  0;
    background-color: black;
    content: '';
    transition: all .1s ease-in-out;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    opacity: 0;
  }

  .fade-leave {
    opacity: 0
  }

  .fade-leave-active {
    opacity: 0;
  }

  .active {
    color: yellow;
  }

  .active::before {
    height: 34px;
  }

  .blue {
    color: blue;
  }
</style>
