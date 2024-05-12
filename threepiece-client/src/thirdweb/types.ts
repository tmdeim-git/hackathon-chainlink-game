export interface Land {
    id: number
    owner: Owner
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

export function isResource(value: string): value is Resource {
    return Object.values(Resource).includes(value as Resource);
}