<template>
  <div>
    <transition-group
      name="staggered-fade"
      tag="ul"
      v-bind:css="false"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
    >
      <li
        v-if="showDeveloper"
        v-for="(skill, index) in devSkills"
        :style="{width: skill.width}"
        :key="index"
        :data-index="index"
      >
        {{ skill.width }}% <img :src="skill.logo" :alt="'le logo de ' + skill.name" height="45"></li>
    </transition-group>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'

export default {
  props: ['showDeveloper'],
  data () {
    return {
      devSkills: [
        {logo: '../../static/assets/js.png', name: 'Js', width: '320px'},
        {logo: '../../static/assets/vuesjs.png', name: 'Vue js', width: '280px'},
        {logo: '../../static/assets/react.svg', name: 'React', width: '200px'},
        {logo: '../../static/assets/angular.png', name: 'AngularJs', width: '200px'},
        {logo: '../../static/assets/php7.png', name: 'Php 7', width: '280px'},
        {logo: '../../static/assets/laravel.jpg', name: 'Laravel', width: '160px'},
        {logo: '../../static/assets/html5-css.svg', name: 'Html et css', width: '360px'}
      ]
    }
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.transform = 'translate3d(0,0,0)'
    },
    enter: function (el, done) {
      var delay = el.dataset.index * 100
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 1 },
          { duration: 450 },
          { complete: done }
        )
      }, delay)
    },
    leave: function (el, done) {
      Velocity(
        el,
        { opacity: 0, transform: 'translate3d(0, 100%, 0)' },
        { complete: done }
      )
    }
  }
}
</script>
<style scoped>
  ul {
    margin-top: 25%;
    margin-left: 10%;
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
    transform-origin: left;
    background: -webkit-linear-gradient(to right, #ff5e62, #f79d00);
    background: linear-gradient(to right, #ff5e62, #f79d00);
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

  /*#li1.skillBar-enter-active {
    animation: showSkillBar .6s ease-out forwards .05s;
  }

  #li2.skillBar-enter-active {
    animation: showSkillBar .6s ease-out forwards .2s;
  }

  #li3.skillBar-enter-active {
    animation: showSkillBar .6s ease-out forwards .3s;
  }

  #li4.skillBar-enter-active {
    animation: showSkillBar .6s ease-out forwards .4s;
  }

  #li5.skillBar-enter-active {
    animation: showSkillBar .6s ease-out forwards .5s;
  }
  #li6.skillBar-enter-active {
    animation: showSkillBar .6s ease-out forwards .6s;
  }*/

  @keyframes showSkillBar {
    0% { transform: scaleX(0); opacity: 0;},
    5% {opacity: 1;},
    100% { transform: scaleX(1);}
  }
</style>
