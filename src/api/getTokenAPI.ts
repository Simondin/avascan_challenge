import { TokenModel } from "@/models/TokenModel"
import { IOCServices } from "@/services"

const getTokenAPI = async (params : {tokenID: string}, container?: IOCServices): Promise<TokenModel> => {
    if (! container) {
        return Promise.reject('Container is null. API must be called from api service.')
    }

    const rest = container.rest

    try {
        const { data } = await rest.get(`${process.env.NEXT_PUBLIC_AVASCAN_TOKEN_API_URL}/${params.tokenID}`)

        return data
    } catch (e) {
        return Promise.reject(e)
    }
}

export default getTokenAPI