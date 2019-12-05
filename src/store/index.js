
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    count:1,
    tabindex:0,// tab 导航栏默认第一个
  },
  // 检测state的变化，如果stare变化这个就触发
  getters:{
    getterstate(state) {
       return state.count+1;
    }
  },
  // 事件触发修改stare，由commit调用 🌟
  mutations:{
    add(state) {
       state.count +=1;
    },
    red(state) {
      state.count -=1;
    },
    tabactive(state,index) {
      state.tabindex = index;
      console.log(state.tabindex)
    } 
  },
  // 类似methods
  actions:{ 
    addF(count) {// stare里面的count
      count.commit('add');// 事件触发修改stare，由commit调用 🌟
    },
    redF(count) {
      count.commit('red');
    },
    tabactiveF(tabindex,index) {
      tabindex.commit('tabactive',index);
    }
  }
})

export default store