import hyRequest from '../request'

export const getCityAll = () => hyRequest.get({ url: "/city/all"})