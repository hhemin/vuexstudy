<template>
  <div class="warp" v-show="show">
    <div
      v-for="(item,index) in btn" 
      :class="[`btnwap`,{active:index === activeindex}]" 
      :key="index" 
      @click="change(item.routername,item.router,item.name)">
      {{item.name}}
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      activeindex:null, 
      show:true,
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
    this._Activetitle(this.$route.meta.title);
  },
  methods:{
    /**
     * @NAME 路由名称
     * @router 路由
     * */ 
    change(routername,router,name) {
      // this.$store.dispatch("tabactiveF",123)
      this.getActive(routername);
      this._Activetitle(name)
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
       * 2、NAME != this.$route.name 禁止再次跳转本页面，因为会导致vuerouter报错
       * */ 
      if(router && routername != this.$route.name) {
        this.$router.push({path:router})
      }
    },
    /***
     * @name vuex传参数
     * 1、将 `this._Activetitle()` 映射为 `this.$store.dispatch('tabactiveF')`
     * 2、在组件中进行这样调用this._Activetitle(1) 将被映射为如 this.$store.dispatch('tabactiveF', 1)
     * */ 
    ...mapActions({
      _Activetitle:'tabactiveF' 
    }),
    getActive(routername) {
      const _Active = {
        'Home':() => {
          this.activeindex = 0;
        },
        'Order':() => {
          this.activeindex = 1;
        },
        'default':() => {
          this.show = false;
        }
      }
      // 如果页面跳转到没有上面的指定 this.btn 跳转的路由就进行隐藏
      if(routername) {
        _Active[routername]();
      }else{
        _Active['default']();
      }
    }
  }
  
};
</script>

<style scoped>
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
</style>