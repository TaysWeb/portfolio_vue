<template>
  <navbarComp/>
  <router-view/>
</template>
<script>
import navbarComp from './components/Navbar-comp';
export default {
   components:{navbarComp}
}

</script>
<style>
#app {
  font-family: 'Work Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
