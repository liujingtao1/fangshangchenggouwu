<template>
  <div>
    <!-- 三级联动全局组件：三级联动已经注册为全局组件，因此不需要再引入 -->
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <!-- Floor这个组件：自己在组件内部是没有发请求的，数据是父组件给的 -->
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"/>
    <Brand />
    
  </div>
</template>

<script>
// 引入其余的组件
import ListContainer from "./ListContainer/index.vue";
import Recommend from "./Recommend/index.vue";
import Like from "./Like/index.vue";
import Rank from "./Rank/index.vue";
import Floor from "./Floor/index.vue";
import Brand from "./Brand/index.vue";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    ListContainer,
    Recommend,
    Like,
    Rank,
    Floor,
    Brand,
  },
  mounted() {
    // 派发action，获取floor组件的数据
    this.$store.dispatch("getFloorList");
    
    
    // this.$store.dispatch('categoryList');
    
  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList,
    }),
  },
};
</script>

<style scoped>
</style>