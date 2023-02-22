
export type TokenModel = {
    blockNumber: number
    body: string
    bodyType: string
    chainId: string
    collection: CollectionModel
    createdAt: Date
    currentOwner: OwnerModel
    firstOwner: OwnerModel
    id: string
    imageMd5: string
    tokenAddress: string
    tokenId: string
    txHash: string
    uri256: string
    uri1024: string
    uriExternal: string
}

export type CollectionModel = {
    address: string
    detail: DetailModel
    name: string
    symbol: string
}

export type DetailModel = {
    alias: string
    checkmark: number
    icon: any
    owner: string
    supertype: string
    type: string
}

export type OwnerModel = {
    id: string
}
