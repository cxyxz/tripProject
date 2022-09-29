import { defineStore } from "pinia";
import { getCityAll } from "../../services";

const useCityStore = defineStore("city", {
  state: () => ({
    allCities: {},
    currentCity: {
      cityName: "东京"
    }
  }),
  actions: {
    async fetchAllCitiesData(){
      const res = await getCityAll()
      this.allCities = res.data
      console.log(this.currentCity);
    }
  }
})

export default useCityStore