import { ICoinChartLine, ICoinChartCandle } from "models/interfaces/ICoinChart";

export const normalizeChartData = (chartApiData : number[]) : ICoinChartCandle => ({
    time: chartApiData[0] / 1000,
    open: chartApiData[1],
    high: chartApiData[2],
    low: chartApiData[3],
    close: chartApiData[4]
});

export const normalizeChartLineData = (chartApiData : number[]) : ICoinChartLine => ({
    time: chartApiData[0] / 1000,
    value: chartApiData[4]
});