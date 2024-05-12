export interface Land {
    id: number
    ownerAddress: string
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
    Water = 'water',
    Wood = 'wood',
    Soil = 'soil',
}