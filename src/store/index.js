import Vue from "Vue";
import Vuex from "Vuex";

import * as actions from "./actions"
import * as getters from "./getters"
import mutations from "./mutations"
import state from "./state"
// 调试工具,状态
import createLogger from "vuex/dist/logger" 

Vue.use(Vuex);

// 调试工具,
const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
	actions,
	getters,
	mutations,
	state,
	strict:debug,
	plugins:debug ? [createLogger()] : []
})