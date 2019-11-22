<template>
  <div>
   <p>this.$store.state 来触发的</p>
   <button @click="addV">+</button>
   <button @click="redV">-</button>
   <br>
   state数据:{{this.$store.state.count}}；
   <br />
   getters:{{this.$store.getters.getterstate}}
   <br />

   <h5>mapActions,mapGetters,mapState写法</h5>
   <p>mutations:按钮调用事件</p>
   <button @click="add">+</button>
   <button @click="red">-</button>
   <p>action:按钮调用事件</p>
   <button @click="addF">+</button>
   <button @click="redF">-</button>
   <br>
   state数据:{{count}}
   getters数据:{{getterstate}}
  </div>
</template>

<script>
import {mapActions,mapGetters,mapState,mapMutations} from 'vuex';
  export default {
    methods:{
      addV() {
        // this.$store.commit('add') 调用mutations 的
        this.$store.dispatch("addF");
      },
      redV() {
        // this.$store.commit('red') 调用mutations 的
        this.$store.dispatch("redF");
      },
      ...mapMutations([
        'add',
        'red'
      ]), // 调用vuex mutations 里面方法名 ❤️view层直接通过 this.add 就可以调用方法
      ...mapActions([
        'addF',
        'redF'
      ])// 调用vuex actions 里面方法名 ❤️view层直接通过 this.addF 就可以调用方法
    },
    computed: {
      ...mapState([
        'count'
      ]),
      ...mapGetters([
        'getterstate'
      ])
    },
  }
</script>