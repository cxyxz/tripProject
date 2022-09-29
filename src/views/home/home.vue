<template>
  <div class="home">
    <home-nav-bar></home-nav-bar>
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        
        
          <van-swipe-item>
            <img src="../../assets/img/swiper/aaa.jpg" />
          </van-swipe-item>
          <van-swipe-item>
            <img src="../../assets/img/swiper/bbb.jpg" />
          </van-swipe-item>
          <van-swipe-item>
            <img src="../../assets/img/swiper/ccc.jpg" />
          </van-swipe-item>
          <van-swipe-item>
            <img src="../../assets/img/swiper/ddd.png" />
          </van-swipe-item>
        
    </van-swipe>
    </div>
    <home-search-box/>
  </div> 
</template>


<script setup>
import homeNavBar from './cpns/home-nav-bar.vue';
import homeSearchBoxVue from './cpns/home-search-box.vue';
import HomeSearchBox from './cpns/home-search-box.vue';


</script>


<style lang="less" scoped>
.banner {
  img {
    width: 100%;
    height: 160px;
    border-radius: 10px;
  }
}
</style>