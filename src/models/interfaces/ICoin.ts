export interface ICoin {
    id?: string,
    name: string,
    symbol?: string,
    imgSmall: string,
    imgLarge: string,
    imgThumb: string,
    price: {
        usd : number
    }
    priceChange24h: number
    priceChangePercentage24hInCurrency: {
        usd: number
    }
}

export interface IApiCoin{
    id?: string,
    name: string,
    symbol?: string,
    image: {
        large: string,
        small: string,
        thumb: string
    }
    market_data:{
        current_price: {
                usd : number
            },
        price_change_24h: number,
        price_change_percentage_24h_in_currency: {
            usd: number
        }  
            
    }
}
