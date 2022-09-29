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
    <div class="location">
      <div class="city">广州</div>
      <div class="position">
           <span class="text">我的位置</span>
           <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div> 
</template>


<script setup>
import homeNavBar from './cpns/home-nav-bar.vue';



</script>


<style lang="less" scoped>
.banner {
  img {
    width: 100%;
    height: 160px;
    border-radius: 10px;
  }
}

.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {
    flex: 1;
  }

  .position {
    width: 74px;
    display: flex;
    align-items: center;
    .text {
      position: relative;
      top: 2px;
      font-size: 12px;
    }
    img {
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
  }
}
</style>