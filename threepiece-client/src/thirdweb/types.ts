import { NFT } from "thirdweb";
import { LazyMintParams } from "thirdweb/extensions/erc721";

export type LandNFTMetaData = NFT['metadata'] & {
    attributes?: LandNFTAttributes
    properties?: LandNFTAttributes
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
    nftMetadata?: LandNFTMetaData
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