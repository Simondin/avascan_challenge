import { IOCServices } from '.'
import appApis from '../api'

export type AppAPIs = typeof appApis

const apiProvider = (container: IOCServices) => {
    const handler = {
        apply: async (object: any, _: any, args: any) => {
            return object(...args, container)
        },
    }

    const apis: any = {}
    for (const api of Object.entries(appApis)) {
        const key = api[0]
        apis[key] = new Proxy(api[1], handler)
    }

    return apis
}

export default apiProvider
