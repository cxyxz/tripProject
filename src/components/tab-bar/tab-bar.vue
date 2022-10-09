<template>
  <div class="tab-bar">
    <template v-for="(item,index) in tabbarData" :key="index">
       <div class="tab-bar-item" :class="{ active: currentIndex === index}"
       @click="itemClick(index,item)"
       >
        <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="">
        <img v-else :src="getAssetURL(item.imageActive)" alt="">
       
        <span class="text">{{ item.text}}</span>
        
       </div>
    </template>
  </div>
</template>


<script setup>

import { getAssetURL } from "../../utils/load_assets.js"
import tabbarData from "../../assets/data/tabbar.js"

import { computed, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

const currentIndex = ref(0)
const router = useRouter()
const route = useRoute()
const itemClick = (index,item) => {
  currentIndex.value = index
  router.push(item.path)
  
}
watch(route, (newRoute) => {
  const index = tabbarData.findIndex(item => item.path === newRoute.path)
  if(index === -1) return
  currentIndex.value = index
})

</script>


<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  background-color: #fffcfc;
  border-top: 1px solid #f3f3f3;

  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    &.active {
      color: var(--primary-color);
    }

    img {
      width: 36px;
    }

    .text {
      font-size: 12px;
      margin-top: 2px;
    }
  }
}
</style>