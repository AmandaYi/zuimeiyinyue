// 导入配置文件和jsonp
import jsonp from "common/js/jsonp.js";
import { commonParams,options,ERR_OK } from "api/config.js";


import axios from "axios";
// 获取轮播图的参数,五张图片

export function getRecommend () {
    // 获取URL

     const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
     const data = Object.assign({}, commonParams, {
        platform: 'h5',
        uin: 0,
        needNewCode: 1
        })
     // 调用jsonp函数
      var sliderData = jsonp(url, data, options);
      return sliderData;

}




export function getDiscList() {
  const url = '/api/getDiscList'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}




























// // 导入封装好的自己的jsonp
// import jsonp from 'common/js/jsonp'
// // 导入 公共的一些参数
// import {commonParams,options} from 'api/config.js'
// // 导入代理
// import axios from 'axios';
// // 获取轮播图
// export function getRecommend() {
// 	const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
	
// 	const data = Object.assign({}, commonParams, {
//     platform: 'h5',
//     uin: 0,
//     needNewCode: 1
//   })
// 	return jsonp(url, data, options)
// }
// // 获取歌曲推荐列表API


// export function getDiscList(){
// 	const url = '/api/getDiscList';

// 	const data = Object.assign({},commonParams, {
//     platform: 'yqq',
//     hostUin: 0,
//     sin: 0,
//     ein: 29,
//     sortId: 5,
//     needNewCode: 0,
//     categoryId: 10000000,
//     rnd: Math.random(),
//     format: 'json'
// 	})

// 	return axios.get(url,{
// 		parmas: data
// 	}).then((res) => {
// 		return Promise.resolve(res.data);
// 	})

// }  