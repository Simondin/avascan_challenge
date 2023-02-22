import { Axios } from "axios"
import apiProvider, { AppAPIs } from "./apiProvider"
import IOCContainer from "./iocContainer"
import restProvider from "./restProvider"

export interface IOCServices extends IOCContainer {
    rest: Axios
    api: AppAPIs
}

const ioc = new IOCContainer() as IOCServices
ioc.put("rest", restProvider)
ioc.put("api", apiProvider)


export default ioc
