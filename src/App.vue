<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- 在Home、Search显示Footer，在登录、注册异常Footer -->
    <!-- <Footer v-show="$route.path=='/home'|$route.path=='/search'"></Footer> -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {
    // 通知Vuex发请求，获取数据，存储于仓库当中
    // 派发一个action||获取商品分类的三级列表数据
    this.$store.dispatch("categoryList");
  },
}
</script>

<style scoped>

</style>