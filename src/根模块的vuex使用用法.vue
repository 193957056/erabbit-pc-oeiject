<template lang="">
  <div>
    App
  </div>
  <!-- 1.使用根模块state的数据 -->
  <p>{{$store.state.username}}</p>
  <!-- 2.使用根模块getters的数据 -->
  <p>{{$store.getters['newName']}}</p>

</template>
<script>
import { useStore } from 'vuex'
export default {
  name:'App',
  setup(){
    // 使用vuex仓库
    const store = useStore()
    // 1.使用根模块state的数据
    console.log(store.state.username);
    // 2.使用根模块getters的数据 
    console.log(store.state.newName);
  }
}
</script>
<style lang="" scoped>
</style>
