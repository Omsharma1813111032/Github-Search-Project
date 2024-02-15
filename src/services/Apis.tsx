import commonFucntionAPI from "./ApiCall";
import { AxiosResponse, AxiosError } from "axios"

const BACKEND_URL:string = "https://api.github.com/users" 

export const getUserInfo = async(data:string):Promise<AxiosResponse | AxiosError> => {

    return await commonFucntionAPI("get",`${BACKEND_URL}/${data}`,"")

}

export const getUserRepos = async(data:string):Promise<AxiosResponse | AxiosError> => {

    return await commonFucntionAPI("get",`${BACKEND_URL}/${data}/repos`,"")

}