import { Market, MarketInformation } from '../src/types';

describe('tests', () => {
  it('basic test', async () => {
    const btcInformation: MarketInformation = {
      market: Market.BTC_USD,
      creationDate: ' 2021-12-17T23:00:00.000Z',
      exchangePrices: {
        coinbase: {
          lastPrice: 49000,
          marketId: '1',
        },
        ftx: {
          lastPrice: 49800,
          marketId: '2',
        },
      },
    };

    expect(btcInformation.market).toEqual(Market.BTC_USD);
    expect(btcInformation.exchangePrices.coinbase.lastPrice).toEqual(49000);

    // iterating over the keys of the exchangePrices
    Object.keys(btcInformation.exchangePrices).forEach((exchange: string) => {
      expect([
        'coinbase',
        'ftx',
      ].includes(exchange));
    });
  });
});
