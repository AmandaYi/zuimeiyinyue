// 导入jsonp包
import gitJsonp from "jsonp";
// 封装一个promise方法
export default function myJsonp(url, data, option){
// 组装url
// url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
url += ( (url.indexOf("?") < 0 ?  "?" : "&" ) + param(data) );

	return new Promise ((resolve,reject) => {
		// jsonp(url, opts, fn)
		gitJsonp(url,option,(error,data) => {
			if(!error) {
				resolve(data);
			}else {
				reject(error);
			}
		})
	} )

}
// 处理参数data,目的得到一个干净的url和data字符串
export function param(data) {
	let url = '';
	for (let k in data ) {
		let value = data[k] !== undefined ? data[k] : ''
		url += `&${k}=${encodeURIComponent(value)}`
	} 
	//去掉出第一个&符号,从第二个开始为返回 的url
	return url ?  url.substring(1) : '';
}































// // 导入jsonp包
// import getJsonP from 'jsonp'

// module.exports = function (url, data, option) {
// // 处理url
// url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
// 	return new Promise((resolve, reject) => {
// 		getJsonP(url, option, (err, data) => {
// 			if(!err) {
// 				resolve(data)
// 			}else{
// 				reject(err)
// 			}
// 		})
// 	})
// }

// function param(data) {
// 	// 处理参数
//   let url = ''
//   for (var k in data) {
//     let value = data[k] !== undefined ? data[k] : ''
//     url += `&${k}=${encodeURIComponent(value)}`
//   }
//   return url ? url.substring(1) : ''
// }

