type CurrentPriceApi = {
  usd: number;
};

type MarketDataApi = {
  current_price: CurrentPriceApi;
  price_change_percentage_24h: number;
};

type ImageSizeApi = {
  small: string;
};

export type CoinApi = {
  id: string;
  name: string;
  symbol: string;
  image: ImageSizeApi;
  market_data: MarketDataApi;
  price_change_24h: MarketDataApi;
};

export type CoinModel = {
  id?: string;
  name?: string;
  symbol?: string;
  image?: string;
  price?: number;
  priceChange?: number;
};

export const normalizeCoin = (from: CoinApi): CoinModel => ({
  id: from.id,
  name: from.name,
  image: from.image.small,
  symbol: from.symbol,
  price: from.market_data.current_price.usd,
  priceChange: from.market_data.price_change_percentage_24h,
});
