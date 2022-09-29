<template>
  <div class="city-group">
    <van-index-bar :sticky="false" :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="(city, index) in groupData.hotCities" :key="index">
        <div class="city" @click="cityClick(city)">{{city.cityName}}</div>
        </template>
      </div>

      <template v-for="(group, index) in groupData.cities" :key="index">
        <van-index-anchor :index="group.group" />
        <template v-for="(city2, index2) in group.cities" :key="index2">
          <van-cell :title="city2.cityName" @click="cityClick(city)"/>
        </template>
      </template>
    </van-index-bar>
  </div>
</template>


<script setup>
import { computed } from "@vue/runtime-core"
import useCityStore from "../../../stores/modules/city";
import { useRouter } from 'vue-router';


const props = defineProps({
  groupData:{
    type:Object,
    default:() => ({})
  }
})
const indexList = computed(() => {
  const list = props.groupData.cities.map(item => item.group)
  list.unshift('#')
  return list
})
const cityStore = useCityStore()
const router = useRouter()
const cityClick = (city) => {
  cityStore.currentCity = city
  router.back()
}

</script>


<style lang="less" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  padding-right: 25px;
  

  .city {
    width: 70px;
    height: 28px;
    border-radius: 14px;
    font-size: 12px;
    color: #000;
    text-align: center;
    line-height: 28px;
    background-color: #eea2a5;
    margin: 6px 0;
  }
}
</style>