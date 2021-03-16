<!--  Jeff Bohn    3/16/2021    Lab #17   Number Display  -->

<template>
  <div id="app">

    <HelloWorld msg="Number Display"/>
    <NumberSubmit/>
    <NumberDisplay/>

    


  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NumberSubmit from './components/NumberSubmit.vue'
import NumberDisplay from './components/NumberDisplay.vue'

export default {
  name: 'app',
  components: {
    NumberDisplay,
    NumberSubmit,
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
