<template>
  <div class="home" ref="homeRef">
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
    <home-categories />
    <div class="search-bar" v-if="isShowSearchBar">
      <search-bar :start-date="'09.19'" :end-date="'09.20'"/>
    </div>
    <home-content></home-content>
  </div> 
</template>


<script setup>
import { computed, onActivated, ref, watch } from 'vue'
import homeNavBar from './cpns/home-nav-bar.vue';
import HomeSearchBox from './cpns/home-search-box.vue';
import HomeCategories from './cpns/home-categories.vue'
import useHomeStore from '@/stores/modules/home';
import HomeContent from './cpns/home-content.vue';
import SearchBar from '@/components/search-bar/search-bar.vue'
import  useScroll from '../../hooks/useScroll';



const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoriesData()
homeStore.fetchHouselistData()


const homeRef = ref()
const { isReachBottom, scrollTop } = useScroll(homeRef)
  
watch(isReachBottom , (newValue) => {
  if(newValue){
    homeStore.fetchHouselistData().then(() => {
      isReachBottom.value = false
    })
  }
})

const isShowSearchBar = computed(() => {
  return scrollTop.value >= 360
})

// 跳转回home时, 保留原来的位置
onActivated(() => {
  homeRef.value?.scrollTo({
    top: scrollTop.value
  })
})
</script>


<style lang="less" scoped>
.home {
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  padding-bottom: 60px;
}
.banner {
  img {
    width: 100%;
    height: 160px;
    border-radius: 10px;
  }
}
.search-bar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  width: 98%;
  height: 45px;
  padding: 16px 2px 10px;

  background-color: #fff;
}
</style>