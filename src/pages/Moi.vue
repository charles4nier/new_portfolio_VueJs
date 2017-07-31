<template>
  <section>
    <nav>
      <ul class="experiences-ul">
        <li @click="showContent" id="developer" class="cv-nav" :class="{active: showDeveloper}">Développeur Web</li>
        <li @click="showContent" id="immo" class="cv-nav" :class="{active: showImmo}">Agent Immobilier</li>
        <li @click="showContent" id="studio" class="cv-nav" :class="{active: showStudioTroll}">Fondateur Studio Troll</li>
      </ul>
    </nav>
    <div class="experiences-container">
      <Developer :showDeveloper="showDeveloper"></Developer>
      <Immo :showImmo="showImmo"></Immo>
      <StudioTroll :showStudioTroll="showStudioTroll"></StudioTroll>
    </div>
    <div class="skills">
    </div>
  </section>
</template>

<script>
  import Developer from '../components/Developer'
  import Immo from '../components/Immo'
  import StudioTroll from '../components/StudioTroll'

  export default {
    components: { Developer, Immo, StudioTroll },
    data () {
      return {
        showDeveloper: true,
        showImmo: false,
        showStudioTroll: false
      }
    },
    methods: {
      showContent: function (event) {
        switch (event.target.id) {
          case 'developer':
            this.showImmo = false
            this.showStudioTroll = false
            this.showDeveloper = true
            break
          case 'immo':
            this.showImmo = true
            this.showStudioTroll = false
            this.showDeveloper = false
            break
          case 'studio':
            this.showImmo = false
            this.showStudioTroll = true
            this.showDeveloper = false
            break
        }
      }
    }
  }
</script>

<style scoped>
  section {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  li {
    cursor: pointer;
  }

  section nav {
    position: absolute;
    top: 14%;
    left: 5%;
    z-index: 10;
  }

  .experiences-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .experiences-ul {
    display: flex;
    width: 550px;
    justify-content: space-around;
  }

  .experiences-ul li {
    list-style-type: none;
    font-weight: 600;
    transform: skewX(-3deg);
  }

  #developer.active {
    background-color:  blue;  
  }
</style>
