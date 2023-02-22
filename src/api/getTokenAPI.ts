import { TokenModel } from "@/models/TokenModel"
import { IOCServices } from "@/services"

const getTokenAPI = async (container?: IOCServices): Promise<TokenModel> => {
    if (! container) {
        return Promise.reject('Container is null. API must be called from api service.')
    }

    const rest = container.rest

    try {
        const { data } = await rest.get('https://api.avascan.info/private/v2/network/mainnet/evm/43114/erc721/0x0540E4EE0C5CdBA347C2f0E011ACF8651bB70Eb9/tokens/8005')

        return data
    } catch (e) {
        return Promise.reject(e)
    }
}

export default getTokenAPI