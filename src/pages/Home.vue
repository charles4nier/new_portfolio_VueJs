<template>
  <div class="home-container">
    <h1>Charles Fournier<strong>Développeur Web Front-End junior</strong></h1>
    <p><router-link to="/projets/learn-eat"><span>Projets</span></router-link></p>
  </div>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style scoped>
  .home-container {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 999999999;
    background-color: white;
  }

  h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 3em;
  }

  h1 strong {
    font-size: 16px;
  }

  p {
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
    margin-top: 30px;
  }

  p a {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: black;
    text-decoration: none;
  }

  p:hover {
    box-shadow: 0 0 4px rgba(255,255,255, 0.4);
  }

  p a::before, p a::after {
    position: absolute;
    width: 50%;
    height: 110%;
    background-color: black;
    transition: all .1s ease-out;
    content: '';
  }

  p a::before {
    top: 0;
    left: 0;
    transform: translate3d(0, -110%, 0);
  }

  p a:hover::before {
    transform: translate3d(0, 0, 0);
  }

  p a::after {
    top: 0;
    right: 0;
    transform: translate3d(0, 200%, 0);
  }

  p a:hover::after {
    transform: translate3d(0, 0, 0);
  }

  p a:hover span {
    transition: all .1s ease-out;
    color: white;
    z-index: 2;
  }

  @media only screen and (max-width: 750px) {
    h1 {
      font-size: 2em;
    }
  }
</style>
