// This is an example of renaming a type. In this case we are clarifying that this string
// will be an ISO like 2021-12-17T23:00:00.000Z.
export type IsoString = string;

// This is an example of an enum in Typescript.
export enum Market {
  BTC_USD = 'BTC-USD',
  ETH_USD = 'ETH-USD',
  SOL_USD = 'SOL-USD',
}

// This is an example of a hashMap as dYdX uses them.
export type PriceMap = { [exchange: string]: { lastPrice: number, marketId: string } };

// This is an example of an interface, a Typescript concept we often use for
// objects that are common throughout repos.
// NOTE: interfaces can extend other interfaces.
export interface MarketInformation {
  market: Market;
  creationDate: IsoString;
  exchangePrices: PriceMap;
}
