import axios from "axios";
import { BASE_URL, TIMEOUT } from './config'

class HYRequest {
  constructor(baseURL,timeout=8000){
    this.instance = axios.create({
      baseURL,
      timeout
    })
  }

  request(config){
    return new Promise((reslove, reject) => {
      this.instance.request(config).then(res => {
        reslove(res.data)
      }).catch(reject)
  })
  }

  get(config){
    return this.request({ ...config, method: "get"})
  }
  post(config) {
    return this.request({ ...config, method: "post" })
  }
}

export default new HYRequest(BASE_URL,TIMEOUT)