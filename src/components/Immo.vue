<template id="">
  <article>
    <transition name="experiences-transition" mode="out-in">
      <div v-if="showImmo" class="cv-container">
        <ul>
          <li v-for="experience in agentData"><span class="blue">{{ experience.agence }}</span>
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
    props: ['showImmo'],
    data () {
      return {
        agentData: [
          {agence: 'IPCSA (octobre 2014 - juillet 2016)', missions: ['- Négocation, vente, location, rédaction de compromis, suivi de dossier (syndic et notaires)', '- Mise en vente, communication', '- Prospection, signature de mandat']},
          {agence: 'Foncia (juin 2012 - septembre 2014)', missions: ['- Négocation, vente et location', '- Mise en vente, communication', '- Prospection, signature de mandat']}
        ]
      }
    }
  }
</script>

<style scoped>
  article {
    position: absolute;
    width: 550px;
    height: 450px;
    top: 20%;
    left: 5%;
    padding: 15px 5px;
    overflow: hidden;
  }

  .cv-container {
    overflow: hidden;
    transition: all .3s ease-out;
  }

  li {
    list-style-type:none;
    margin-bottom: 35px;
  }

  li span {
    width: 50%;
    display: block;
    margin: 5px auto;
    text-align: center;
    font-weight: 600;
    font-size: 0.9em;
  }

  ul div {
    font-size: 14px;
    margin-bottom: 5px;
  }

  .experiences-transition-enter, .experiences-transition-leave {
    opacity: 0;
  }

  .experiences-transition-enter-active {
    animation: showExperiences .6s ease-out forwards;
  }

  @keyframes showExperiences {
    0% { transform: translate3d(0, -110%, 0); opacity: 0;},
    5% {opacity: 1;},
    95% { transform: translate3d(0, -20%, 0);},
    100% { transform: translate3d(0, 0, 0);}
  }

  .experiences-transition-leave-active {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
</style>
