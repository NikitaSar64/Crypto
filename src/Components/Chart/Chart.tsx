import { createChart, ColorType, AreaData } from 'lightweight-charts';
import { useEffect, useRef } from 'react';
import chartStyles from './Chart.module.scss';
import { ChartProps } from './Chart.props';

export const Chart = ({ data } ) : JSX.Element => {
	const colors = {
			backgroundColor: 'white',
			lineColor: '#2962FF',
			textColor: 'black',
			areaTopColor: '#2962FF',
			areaBottomColor: 'rgba(41, 98, 255, 0.28)',
		};

    const {backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor} = colors;
	const chartContainerRef = useRef<HTMLElement | string>('');

	useEffect(
		(): void => {            
            const chart = createChart(chartContainerRef.current, {
				layout: {
                    background: { type: ColorType.Solid, color: backgroundColor },
					colors: textColor,
				},
				width: chartContainerRef.current.clientWidth,
				height: chartContainerRef.current.parentElement.clientHeight,
                timeScale: {
                    timeVisible: true,
                }
			});
			chart.timeScale().fitContent();
            
            chart.applyOptions(
                { 
                    width: chartContainerRef.current.clientWidth, 
                }
            );


            const newSeries = chart.addAreaSeries({ lineColor, topColor: areaTopColor, bottomColor: areaBottomColor });
			newSeries.setData(data);

			return () => {
				chart.remove();
			};
		},
		[data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]
	);

	return (
		<div
            className={chartStyles.chart}
			ref={chartContainerRef}
		/>
	);
};