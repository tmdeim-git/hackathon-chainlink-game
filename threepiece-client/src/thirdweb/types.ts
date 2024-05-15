import { NFT } from "thirdweb";

export type LandNFT = NFT & {
    metadata: {
        attributes?: LandNFTAttributes
    }
}

export type LandNFTAttributes = [
    {
        readonly trait_type: 'id',
        value: number
    },
    {
        readonly trait_type: 'resources',
        value: Resource[]
    },
]

export interface Land {
    id: number
    nft?: LandNFT
    ownerAddress?: string
    resources: Resource[]
}

export interface Owner {
    address: string
    inventory?: Item[]
}

export abstract class Item {
    name: string
}

export enum Resource {
    Sand = 'sand',
    Seawater = 'seawater',
    Water = 'water',
    Wood = 'wood',
    Soil = 'soil',
    Ore = 'ore',
}