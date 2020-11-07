// import axios from "axios"
// import qs from "querystring"

// // import {BASEURL} from "../config"
// // axios.defaults.baseURL = BASEURL
// axios.interceptors.request.use((config)=>{
// 	const {method,data} = config
// 	if(method.toLowerCase() === "post" && data instanceof Object){
// 		config.data = qs.stringify(data)
// 	}
// 	return config
// })

// axios.interceptors.response.use(
// 	(response)=>{
// 		return response.data
// 	},
// 	(error)=>{
//         this.$message.error(error.messages)
// 		return new .Promise(()=>{})
// 	}
// )
// export default axios