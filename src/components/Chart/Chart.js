import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) => {

    // this returns an array of numbers
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);

    // using the spread operator pulls out the values in the arr. so that we meet the argument requirements of .max()
    const totalMax = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint =>
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMax}
                    label={dataPoint.label}
                />)}
        </div>
    )
};

export default Chart;