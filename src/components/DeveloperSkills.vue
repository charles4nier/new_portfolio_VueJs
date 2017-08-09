<template>
  <div class="devSkills">
    <transition-group
      tag="ul"
      :css="false"
      @before-enter="beforeEnterList"
      @enter="enterList"
      @leave="leaveList"
    >
      <li
        v-if="showChartDev"
        v-for="(skill, index) in devSkills"
        :style="{width: skill.width}"
        :key="index"
        :data-index="index"
      >
        <img :src="skill.logo" :alt="'le logo de ' + skill.name" height="45">
          <span
            v-show="showChartDev"
            class="chart"
            :class="'chart' + index"
          >
            {{skill.value}}
          </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'

export default {
  props: ['showDeveloper', 'showChartDev'],
  data () {
    return {
      devSkills: [
        {logo: '../../static/assets/js.png', name: 'Js', width: '320px', value: 'Javascript : 80%'},
        {logo: '../../static/assets/vuesjs.png', name: 'Vue js', width: '260px', value: 'Vue Js 2.0 : 65%'},
        {logo: '../../static/assets/react.svg', name: 'React', width: '200px', value: 'React : 50%'},
        {logo: '../../static/assets/angular.svg', name: 'AngularJs', width: '200px', value: 'Angular Js : 50%'},
        {logo: '../../static/assets/php7.png', name: 'Php 7', width: '280px', value: 'Php 7 : 70%'},
        {logo: '../../static/assets/laravel.png', name: 'Laravel', width: '160px', value: 'Laravel : 40%'},
        {logo: '../../static/assets/html5-css.svg', name: 'Html et css', width: '360px', value: 'Html/Css : 90%'}
      ]
    }
  },
  methods: {
    beforeEnterList: function (el) {
      el.style.opacity = 0
      el.style.transform = 'translate3d(0,0,0)'
    },
    enterList: function (el, done) {
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
    leaveList: function (el, done) {
      Velocity(
        el,
        { opacity: 0, translateY: '100%' },
        { complete: done }
      )
    }
  }
}
</script>
<style scoped>
  ul {
    margin-top: 6%;
    margin-left: 10%;
  }

  li {
    position: relative;
    height: 30px;
    margin-left: 70px;
    margin-bottom: 35px;
    list-style-type: none;
    transform-origin: left;
  }

  img {
    position: absolute;
    top: -7px;
    left: -80px;
  }

  li:nth-child(3) img{
    left: -82px;
  }

  li:nth-child(4) img{
    left: -78px;
  }

  li:nth-child(5) img{
    left: -70px;
  }

  li:nth-child(6) img{
    left: -85px;
  }

  li:last-child img{
    left: -90px;
  }

  .background-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
  }

  .chart {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    background: -webkit-linear-gradient(to right, #ff5e62, #f79d00);
    background: linear-gradient(to right, #ff5e62, #f79d00);
  }

  .chart-enter, .chart-leave-active, .chart-leave {
    animation-name: enterChart;
    animation-duration: .1s;
    animation-fill-mode: forwards;
  }

  @keyframes enterChart {
    0% {transform: translate3d(-100%, 0, 0);},
    100% {transform: translate3d(-100%, 0, 0);}
  }

  .chart-enter-active {
    animation-name: showChart;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  @keyframes showChart {
    0% {transform: translate3d(-100%, 0, 0);},
    100% {transform: translate3d(0, 0, 0);}
  }

  @media only screen and (max-width: 650px) and (orientation: portrait)  {
    div.devSkills {
      transform: scale(0.65);
    }

    ul {
      margin-left: -18%;
    }
  }
</style>
