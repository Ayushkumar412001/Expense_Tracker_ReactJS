import './Chart.css'
import ChartBar from './ChartBar';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint) => (
                <ChartBar 
                    key = {Math.random().toString()}
                    value = {dataPoint.value}
                    maxValue = {totalMaximum}
                    lable = {dataPoint.lable}
                />
            ))}
        </div>
    );
};

export default Chart;