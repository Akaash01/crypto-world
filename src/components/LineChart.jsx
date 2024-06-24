import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);
const { Title } = Typography;
const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];
  for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
    var n = coinHistory?.data?.history?.length;
    coinPrice.push(coinHistory.data.history[n - 1 - i].price);
    var date = new Date(coinHistory.data.history[n - 1 - i].timestamp * 1000);
    coinTimestamp.push(
      date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
    );
  }
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price in USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd'
      }
    ]
  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };
  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="cahrt-title">
          {coinName} Price Chart
        </Title>

        <Col className="price-container">
          <Title className="price-change" level={5}>
            {coinHistory?.data?.change}%
          </Title>
          <Title className="current-price" level={5}>
            Current {coinName} Price: ${currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
