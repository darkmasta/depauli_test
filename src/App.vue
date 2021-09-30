<template>
<NavBar />
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
   NavBar,
  },
  methods: {
    loginHappened() {
      console.log("LOGIN TRIED");
    }
  }
}
</script>

<style>
body {
  margin: 0;
  margin: 0 auto 0 auto;  
  width:100%; 
  text-align:center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
