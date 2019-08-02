import jsonp from 'jsonp'
// 百度地图API key
const key = 'SU9IHxYutuvZ54INCVHh68SC0vlHRXBp'
// 利用百度服务将系统坐标转换为百度坐标并解析出地址信息
const getLoctionDetailFromBaidu = position => {
  let p = position.lat + ',' + position.lng
  let url = 'ak=' + key + '&location=' + p + '&output=json&coordtype=wgs84ll'
  return new Promise((resolve, reject) => {
    jsonp(
      'https://api.map.baidu.com/geocoder/v2/?' + url,
      null,
      (error, data) => {
        if (error) {
          reject(error)
        } else {
          resolve(data)
        }
      }
    )
  })
}
const location = {
  getLocation: () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        // 测试使用
        getLoctionDetailFromBaidu({
          lat: 30.313665257834128,
          lng: 120.31988253995297
        })
          .then(res => {
            resolve(res)
          })
          .catch(error => {
            reject(error)
          })
        // 浏览器H5定位功能
        // navigator.geolocation.getCurrentPosition((position) => {
        //   let lat = position.coords.latitude
        //   let lng = position.coords.longitude
        //   getLoctionDetailFromBaidu({ lat: lat, lng: lng }).then(res => {
        //     resolve(res)
        //   }).catch(error => {
        //     alert(error)
        //   })
        // }, (error) => {
        //   reject(error)
        // }, { timeout: 3000, enableHighAcuracy: true })
      } else {
        let error = { massage: '定位失败' }
        reject(error)
      }
    })
  }
}

export default location
