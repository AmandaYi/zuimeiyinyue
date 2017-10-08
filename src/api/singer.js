import { commonParams,options } from "./config.js"
import  jsonp  from "common/js/jsonp.js"
// 获取歌手列表
export function getSingerList (){
	// https://c.y.qq.com/v8/fcg-bin/v8.fcg
	// ?channel=singer
	// &page=list
	// &key=all_all_all
	// &pagesize=100
	// &pagenum=1&g_tk=5381
	// &jsonpCallback=GetSingerListCallback
	// &loginUin=0
	// &hostUin=0
	// &format=jsonp
	// &inCharset=utf8
	// &outCharset=utf-8
	// &notice=0
	// &platform=yqq
	// &needNewCode=0
	// https://shc.y.qq.com/v8/fcg-bin/v8.fcg
	// ?channel=singer
	// &page=list
	// &key=all_all_all
	// &pagesize=100
	// &pagenum=1
	// &g_tk=5381
	// &jsonpCallback=GetSingerListCallback
	// &loginUin=0&hostUin=0
	// &format=jsonp
	// &inCharset=utf8
	// &outCharset=utf-8
	// &notice=0
	// &platform=yqq
	// &needNewCode=0
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


// 问题签名:
//   问题事件名称:	APPCRASH
//   应用程序名:	mintty.exe
//   应用程序版本:	2.7.9.0
//   应用程序时间戳:	00000000
//   故障模块名称:	msys-2.0.dll
//   故障模块版本:	2009.0.0.0
//   故障模块时间戳:	00000000
//   异常代码:	c0000005
//   异常偏移:	00000000000acc50
//   OS 版本:	6.3.9600.2.0.0.256.48
//   区域设置 ID:	2052
//   其他信息 1:	4dc2
//   其他信息 2:	4dc20fc2f27a1e56aea859ce8a3cacf3
//   其他信息 3:	2aeb
//   其他信息 4:	2aeb449a53e2cb11ecfc3d06d17c2af9

// 联机阅读隐私声明:
//   http://go.microsoft.com/fwlink/?linkid=280262

// 如果无法获取联机隐私声明，请脱机阅读我们的隐私声明:
//   C:\Windows\system32\zh-CN\erofflps.txt
