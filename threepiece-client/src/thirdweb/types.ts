import { NFT } from "thirdweb";

export type LandNFT = NFT & {
  metadata: {
    attributes?: LandNFTAttributes;
  };
};

export namespace GameEvent {
  export enum Land {
    None = "none",
    Raining = "raining"
  }

  export enum Game {
    Lootbox = "lootbox"
  }
}

export type LandNFTAttributes = [
  {
    readonly trait_type: "id";
    value: number;
  },
  {
    readonly trait_type: "resources";
    value: Resource[];
  },
  {
    readonly trait_type: "event";
    value: GameEvent.Land;
  }
];

export interface Land {
  id: number;
  resources: Resource[];
  event?: GameEvent.Land;
  nft?: LandNFT;
  ownerAddress?: string;
}

export interface Owner {
  address: string;
  inventory?: Item[];
}

export abstract class Item {
  name: string;
}

export interface Resource {
  resourceType: ResourceType;
  productionRate: number;
  maximumAmmount: number;
  currentAmmount: number;
}

export enum ResourceType {
  Sand = "sand",
  Seawater = "seawater",
  Water = "water",
  Wood = "wood",
  Soil = "soil",
  Ore = "ore"
}

export interface MetadataAttributes {
  trait_type: string;
  value: any;
}

export function isValidLand(land: Land): land is Land {
  const resources = land.resources;
  const landEvent = land.event;
  let resourceInEnum = true;
  resources.forEach((r) => {
    if (!isInEnum(r.resourceType, ResourceType)) resourceInEnum = false;
  });
  return resourceInEnum && isInEnum(landEvent, GameEvent.Land);
}

// Generic type predicate function for array of enums
export function arrayIsInEnum<T extends string>(
  arr: string[],
  enumType: Record<string, T>
): arr is T[] {
  return arr.every((value) => isInEnum(value, enumType));
}

// Generic type predicate function for single enum value
export function isInEnum<T extends string>(
  value: string,
  enumValues: Record<string, T>
): value is T {
  return Object.values(enumValues).includes(value as T);
}
