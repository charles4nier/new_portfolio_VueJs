<template>
  <section class="test">
    <nav>
      <ul class="experiences-ul">
        <li class="cv-nav" id="developer-list" :class="{active: showDeveloper}"><span @click="showContent" id="developer" :class="{active: showDeveloper}">Développeur Web</span></li>
        <li class="cv-nav" id="immo-list" :class="{active: showImmo}"><span @click="showContent" id="immo" :class="{active: showImmo}">Agent Immobilier</span></li>
        <li class="cv-nav" id="studio-list" :class="{active: showStudioTroll}"><span @click="showContent" id="studio" :class="{active: showStudioTroll}">Fondateur Studio Troll</span></li>
      </ul>
    </nav>
    <div class="content-container">
      <div class="experiences-container">
        <Developer :showDeveloper="showDeveloper"></Developer>
        <Immo :showImmo="showImmo"></Immo>
        <StudioTroll :showStudioTroll="showStudioTroll"></StudioTroll>
      </div>
      <div class="skills">
        <DeveloperSkills :showDeveloper="showDeveloper" :showChartDev="showChartDev"></DeveloperSkills>
        <ImmoSkills :showImmo="showImmo" :showChartDev="showChartImmo"></ImmoSkills>
      </div>
    </div>
  </section>
</template>

<script>
  import Developer from '../components/Developer'
  import Immo from '../components/Immo'
  import StudioTroll from '../components/StudioTroll'
  import DeveloperSkills from '../components/DeveloperSkills'
  import ImmoSkills from '../components/ImmoSkills'

  export default {
    components: { Developer, Immo, StudioTroll, DeveloperSkills, ImmoSkills },
    data () {
      return {
        showDeveloper: false,
        showChartDev: false,
        showImmo: false,
        showChartImmo: false,
        showStudioTroll: false
      }
    },
    methods: {
      showContent: function (event) {
        switch (event.target.id) {
          case 'developer':
            this.showImmo = false
            this.showChartImmo = false
            this.showStudioTroll = false
            this.showDeveloper = true
            this.showChartDev = true
            break
          case 'immo':
            this.showImmo = true
            this.showChartImmo = true
            this.showStudioTroll = false
            this.showDeveloper = false
            this.showChartDev = false
            break
          case 'studio':
            this.showImmo = false
            this.showChartImmo = false
            this.showStudioTroll = true
            this.showDeveloper = false
            this.showChartDev = false
            break
        }
      }
    },
    mounted: function () {
      setTimeout(() => {
        this.showDeveloper = true
      }, 440)
      setTimeout(() => {
        this.showChartDev = true
      }, 700)
    }
  }
</script>

<style scoped>
  section {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100vh;
    flex-wrap: wrap;
    top: 0;
    left: 0;
  }

  li {
    cursor: pointer;
  }

  section nav {
    position: relative;
    display: flex;
    width: 100%;
    height: 20%;
    justify-content: flex-start;
    align-items: center;
    z-index: 10;
    margin: 5% 0 0 5%;
  }

  .content-container {
    position: relative;
    display: flex;
    width: 90%;
    height: auto;
    margin-left: 5%;
  }

  .experiences-container {
    width: 50%;
    height: 100%;
  }

  .experiences-ul {
    display: flex;
    width: 550px;
    justify-content: space-around;
  }

  .experiences-ul li {
    position: relative;
    width: 180px;
    height: 35px;
    list-style-type: none;
    transform: skewX(-3deg);
    overflow: hidden;
  }

  .experiences-ul li span {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    color: black;
    z-index: 5;
    transform: skewX(3deg);
    transition: color .2s ease-out;
  }

  #developer-list:before,  #immo-list:before, #studio-list:before{
    position: absolute;
    width: 100%;
    height: 100%;
    content: '';
    top: 0;
    left: 0;
    transform: translate3d(0, -100%, 0);
    transition: transform .2s ease-out;
  }

  #developer-list:before, #immo-list:before, #studio-list:before {
    background: #ff9966;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #ff5e62, #ff9966);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #ff5e62, #ff9966); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  #developer.active, #immo.active, #studio.active {
    color: white;
  }

  #developer-list.active:before, #immo-list.active:before, #studio-list.active:before {
    transform: translate3d(0, 0, 0);
  }

  .skills {
    width: 50%;
    /*width: 40%;
    height: 90%;
    top: 0;
    right: 5%;*/
  }


  @media only screen and (max-width: 1024px) {
    .test {
      width: 100vw;
      overflow-y: scroll;
      transform: scale(0.8);
    }

    .experiences-ul {
      width: 100vw;
    }

    .experiences-ul li {
      position: relative;
      height: 45px;
      padding-left: 5px;
      list-style-type: none;
      overflow: hidden;
      font-style: 12px;
      margin: 0 1px;
    }

    .content-container {
      margin-top: 22%;
    }

    .experiences-container {
      position: relative;
      width: 50%;
      height: 100%;
      margin-left: 0;
    }

    .skills {
      right: 80%;
      top: 95%;
    }
  }
</style>
