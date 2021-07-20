<template>
  <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <home-swiper :banners="banners"/> <!-- 轮播图组件 -->
      <home-recommend-view :recommends="recommends" />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommendView from './childComps/HomeRecommendView.vue'

import { getHomeMultidata } from "../../network/home"; //用default导出才可以不加大括号



export default {
  name:"Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView
    
  },
  data() {
    return {
      banners:[], // 定义一个数组储存banner的图片地址
      recommends:[],
    }
  },
  created() { // 生命周期创建的时候调用请求
    // 1.请求多个数据
    getHomeMultidata().then(res =>{
      console.log(res); // 打印.then返回的数据
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  }
};
</script>

<style scoped>
  .home-nav{   /* 在这里给导航单独设置颜色 不然会统一 */
    background: var(--color-tint); /* 用变量来设置颜色 变量在assets下的css下的base里面设置了对应的颜色 */
    color: #fff;
  }
</style>