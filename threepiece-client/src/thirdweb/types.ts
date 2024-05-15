import { NFT } from "thirdweb";

export type LandNFT = NFT & {
    metadata: {
        attributes?: LandNFTAttributes
    }
}

export enum LandEvent {
    None,
    Raining
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
    {
        readonly trait_type: 'event',
        value: LandEvent
    },
]

export interface Land {
    id: number
    resources: Resource[]
    currentEvent?: LandEvent
    nft?: LandNFT
    ownerAddress?: string
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

export interface MetadataAttributes {
    trait_type: string
    value: any
}