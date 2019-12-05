<template>
  <div class="warp" >
    <div
      v-for="(item,index) in btn" 
      :class="[`btnwap`,{active:index === activeindex}]" 
      :key="index" 
      @click="change(item.routername,item.router)">
      {{item.name}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeindex:null, 
      btn:[
        {
          name:'首页',
          routername:"Home",
          router:'/',
        },
        {
          name:'其他',
          routername:"Order",
          router:'/Order',
        },
      ]
    }
  },
  watch: {
    '$route': function(to, from){
      console.log(this.$route.name)
    }
  },
  mounted() {
    this.change(this.$route.name);
  },
  methods:{
    /**
     * @NAME 路由名称
     * @router 路由
     * */ 
    change(NAME,router) {
      this.$store.dispatch("tabactiveF",123)
      this.getActive(NAME);
      /***
       * 
       * 1、声明式： 
       *  1) 根据路由路径（/home/sort/detail）跳转 <router-link :to="{path: '/home/sort/detail', query:{id: 'abc'}}">点击查看子页面</router-link>
       *  2) 根据路由名称（detail）跳转 <router-link :to="{name: 'detail', params:{id: 'abc'}}">点击查看子页面</router-link>
       * :to=""  可以实现绑定动态的 路由 和 参数
       * 2、编程式：
       * 1） this.$router.push({path: '/home/sort/detail',query:{id: 'abc'}})
       * 2） this.$router.push({name: 'detail',params:{id: 'abc'}})
       * 备注： params 和 query 传参的区别：
       * 1、params传参时  参数不会出现在url的路径上面， 但是刷新页面时param里面的数据会消失
       * 2、query传参时   参数出现在url的路径上面， 刷新页面时query里面的数据不变
       * 
       * */
      /**
       * 1、router 
       * 2、NAME != this.$route.name 禁止再次跳转本页面
       * */ 
      if(router && NAME != this.$route.name) {
        console.log('可以跳转')
        this.$router.push({path:router})
      }
    },
    getActive(NAME) {
      const _Active = {
        'Home':() => {
          this.activeindex = 0;
        },
        'Order':() => {
          this.activeindex = 1;
        }
      }
      _Active[NAME]();
    }
  }
  
};
</script>

<style scope>
.warp {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 45px;
  line-height: 45px;
  box-shadow: 1px -2px 9px 2px #9c9a9a;
  display: flex;
}
.btnwap {
  flex: 1;
  background-color: #03A9F4;
  color: #ffffff !important;
}
.btnwap:active{
  background-color: #0d7eb1;
}
.btnwap.active {
  background-color: #0d7eb1;
}
.btnwap:first-child{
  /* border-right: 1px solid red; */
}
</style>