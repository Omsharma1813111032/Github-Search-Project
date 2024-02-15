import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios"


const commonFucntionAPI = async(methods: string, url: string, body: string, header?: any):Promise<AxiosResponse | AxiosError>=>{

    const config:AxiosRequestConfig = {
        method:methods,
        url,
        data:body,
        headers:header?header:[{"Content-type":"Application:json"}]
    }
    
    return await axios(config).then((res)=>{return res}).catch((err)=>{return err})

}


export default commonFucntionAPI;