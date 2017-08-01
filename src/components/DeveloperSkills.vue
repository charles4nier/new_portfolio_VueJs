<template>
  <div>
    <transition name="skillBar" mode="out-in">
      <ul v-if="showDeveloper">
        <li v-for="skill in devSkills" :style="{ background: skill.backgroundWebkit, background: skill.background, width: skill.width}">{{ skill.width }}%<img :src="skill.logo" alt="le logo de skill.name" height="45"></li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  props: ['showDeveloper'],
  data () {
    return {
      devSkills: [
        {logo: '../../static/assets/js.png', name: 'Js', backgroundWebkit: '-webkit-linear-gradient(to right, #ff5e62, #f79d00)', background: 'linear-gradient(to right, #ff5e62, #f79d00)', width: '320px'},
        {logo: '../../static/assets/vuesjs.png', name: 'Vue js', backgroundWebkit: '-webkit-linear-gradient(to right, #ff5e62, #f79d00)', background: 'linear-gradient(to right, #ff5e62, #f79d00)', width: '280px'},
        {logo: '../../static/assets/react.svg', name: 'React', backgroundWebkit: '-webkit-linear-gradient(to right, #ff5e62, #f79d00)', background: 'linear-gradient(to right, #ff5e62, #f79d00)', width: '200px'},
        {logo: '../../static/assets/angular.png', name: 'AngularJs', backgroundWebkit: '-webkit-linear-gradient(to right, #ff5e62, #f79d00)', background: 'linear-gradient(to right, #ff5e62, #f79d00)', width: '200px'},
        {logo: '../../static/assets/php7.png', name: 'Php 7', backgroundWebkit: '-webkit-linear-gradient(to right, #ff5e62, #f79d00)', background: 'linear-gradient(to right, #ff5e62, #f79d00)', width: '280px'},
        {logo: '../../static/assets/laravel.jpg', name: 'Laravel', backgroundWebkit: '-webkit-linear-gradient(to right, #ff5e62, #f79d00)', background: 'linear-gradient(to right, #ff5e62, #f79d00)', width: '160px'},
        {logo: '../../static/assets/html5-css.svg', name: 'Html et css', backgroundWebkit: '-webkit-linear-gradient(to right, #ff5e62, #f79d00)', background: 'linear-gradient(to right, #ff5e62, #f79d00)', width: '360px'}
      ]
    }
  }
}
</script>
<style scoped>
  ul {
    margin-top: 25%;
    margin-left: 10%;
    transform-origin: 0% 50%;
  }

  li {
    position: relative;
    display: flex;
    height: 30px;
    justify-content: center;
    align-items: center;
    margin-left: 70px;
    margin-bottom: 35px;
    list-style-type: none;
    transform: scaleX(1);
  }

  img {
    position: absolute;
    top: -7px;
    left: -80px;
  }

  li:nth-child(5) img{
    left: -73px;
  }

  li:last-child img{
    left: -90px;
  }

  .skillBar-enter, .skillBar-leave {
    opacity: 0;
  }

  .skillBar-enter-active {
    animation: showSkillBar .6s ease-out forwards;
  }

  @keyframes showSkillBar {
    0% { transform: scaleX(0); opacity: 0;},
    5% {opacity: 1;},
    100% { transform: scaleX(1);}
  }
</style>
