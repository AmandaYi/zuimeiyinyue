import { commonParams,options } from "./config.js"
import  jsonp  from "common/js/jsonp.js"
// 获取歌手列表
export function getSingerList (){
	let url = " https://c.y.qq.com/v8/fcg-bin/v8.fcg";
 	const data = Object.assign({},commonParams,{
		channel : 'singer',
		page : 'list',
		key : 'all_all_all',
		pagesize : '100',
		pagenum : '1',
		g_tk : '5381',
		// jsonpCallback : 'GetSingerListCallback',
		loginUin : '0',
		hostUin : '0',
		format : 'jsonp',
		inCharset : 'utf8',
		outCharset : 'utf-8',
		notice : '0',
		platform : 'yqq',
		needNewCode : '0'
 	});

 	let res = jsonp(url, data, options);
 	return res;

}


// 获取歌手详情页的的歌单的数据结构

export function getSingerMsg(singerId){

	let url = "https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg";

	// 参数
	const data = Object.assign({},commonParams,{
		    hostUin: 0,
		    needNewCode: 0,
		    platform: 'yqq',
		    order: 'listen',
		    begin: 0,
		    num: 80,
		    songstatus: 1,
		    singermid: singerId
	})

	return jsonp(url ,data,options);


}

