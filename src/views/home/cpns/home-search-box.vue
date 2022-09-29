<template>
  <div class="search-box">
    
    <div class="location">
      <div class="city"
      @click="cityClick">{{currentCity.cityName}}</div>
      <div class="position"
      @click="positionClick">
           <span class="text">我的位置</span>
           <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>


  </div>
</template>


<script setup>
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import useCityStore from '../../../stores/modules/city';

const router = useRouter()

const cityClick = () => {
  router.push("/city")
}

const positionClick = () => {
  navigator.geolocation.getCurrentPosition(res => {
    console.log("success");
  }, err => {
    console.log("88")
  }, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  })
}
const cityStore = useCityStore()
const { currentCity }= storeToRefs(cityStore)
console.log(currentCity.cityName)

</script>


<style lang="less" scoped>
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