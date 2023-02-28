import { ICoinChartCandle, ICoinChartLine } from "models/interfaces/ICoinChart";

export interface ChartProps{
    data: ( ICoinChartCandle| ICoinChartLine )[]
}