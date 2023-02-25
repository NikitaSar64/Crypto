import { IApiCoin, ICoin } from "models/interfaces/ICoin";

export const normalizeCoin = (coin: IApiCoin) : ICoin => ({
    id: coin.id,
    name: coin.name,
    symbol: coin.symbol,
    price: {
        usd: coin.market_data.current_price.usd
    },
    imgSmall: coin.image.small,
    imgLarge: coin.image.large,
    imgThumb: coin.image.thumb,
    priceChange24h: coin.market_data.price_change_24h,
    priceChangePercentage24hInCurrency: {
        usd: coin.market_data.price_change_percentage_24h_in_currency.usd
    }
});