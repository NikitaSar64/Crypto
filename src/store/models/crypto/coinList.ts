export type CoinsListApi = {
    id: string;
    name: string;
    symbol: string;
    image: string;
    current_price: number;
    price_change_percentage_24h: number;
}


export type CoinsListModel = {
    id: string;
    name: string;
    symbol: string;
    image: string;
    price: number;
    priceChange: number;
}

export const normalizeCoinsList = ( from : CoinsListApi) : CoinsListModel => ({
    id : from.id,
    name : from.name,
    image : from.image,
    symbol : from.symbol,
    price : from.current_price,
    priceChange : from.current_price,
  })
