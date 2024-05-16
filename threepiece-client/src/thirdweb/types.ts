import { NFT } from "thirdweb";

export type LandNFT = NFT & {
    metadata: {
        attributes?: LandNFTAttributes
    }
}

export enum LandEvent {
    None = "none",
    Raining = "raining"
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
    event?: LandEvent
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

export function isValidLand(land: any): land is Land {
    const resources = land.resources;
    const landEvent = land.event;

    return isValidEnumArray(resources, Resource) && isValidEnumValue(landEvent, LandEvent)
}

// Generic type predicate function for array of enums
export function isValidEnumArray<T extends string>(
    arr: string[],
    enumValues: Record<string, T>
): arr is T[] {
    return arr.every(value => Object.values(enumValues).includes(value as T));
}

// Generic type predicate function for single enum value
export function isValidEnumValue<T extends string>(
    value: string,
    enumValues: Record<string, T>
): value is T {
    return Object.values(enumValues).includes(value as T);
}

