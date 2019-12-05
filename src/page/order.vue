<template>
  <div>
   <button @click="add">+</button>
   <button @click="red">-</button>
   state数据:{{this.$store.state.count}}；
   <br />
   getters:{{this.$store.getters.getterstate}}
   <br />
  </div>
</template>

<script>
  export default {
    methods:{
      add() {
        // this.$store.commit('add') 调用mutations 的
        this.$store.dispatch("addF");
      },
      red() {
        // this.$store.commit('red') 调用mutations 的
        this.$store.dispatch("redF");
      }
    }
  }
</script>