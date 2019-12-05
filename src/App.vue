<template>
  <div id="app">
    <header>
      {{this.$store.state.pagetitle}}
    </header>
    <!-- <img src="./assets/logo.png"> -->
    <router-view style="padding-top:50px"/>
    <Tab></Tab>
  </div>
</template>

<script>
import Tab from '@/components/tab'
export default {
  name: 'App',
  created() {
    this.hhh()
  },
  components:{
    Tab
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
header {
  position:fixed;
  top: 0;
  left: 0;
  height: 50px;
  line-height: 50px;
  width: 100%;
  background-color: #01a9f4;
  color: #fff;
  box-shadow: 0px 4px 6px 1px #0000007d;
}
</style>
