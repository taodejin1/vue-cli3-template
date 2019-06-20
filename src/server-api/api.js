import fetch from './fetch'

console.log(process.env.NODE_ENV);  // 读取当前环境
console.log(process.env.VUE_APP_URL); // 读取当前环境baseUrl

let APIS = {
    testApi:`${process.env.VUE_APP_URL}/test`
}

/**
 * 
 * @param {*} requestType  请求type类型
 * @param {*} urlLinkName  请求的接口地址url
 * @param {*} obj          请求体所需要的参数，可能为空 
 */
export function createRequest(requestType,urlLinkName,obj){
    if( requestType === 'get'){
        return fetch.axiosGet(APIS[urlLinkName],obj);
    }
    if( requestType === 'post'){
        return fetch.axiosPost(APIS[urlLinkName],obj);
    }
    if( requestType === 'formData'){
        return fetch.axiosFormData(APIS[urlLinkName],obj);
    }    
}
