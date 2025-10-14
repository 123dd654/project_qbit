import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const DashboardMain = () => {
  const [activeButton, setActiveButton] = useState('today');
  const [chartData, setChartData] = useState({
    labels: ['11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'],
    datasets: [
      {
        label: 'Sales',
        data: [68000, 26000, 37000, 75000, 30000, 30000, 30000, 25000, 70000, 80000, 30000, 30000],
        backgroundColor: '#F76F5A',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderRadius: 8,
        borderWidth: 1,
        barThickness: 39,
      },
    ],
  });

  const [salesData, setSalesData] = useState({
    actualSales: '123,456,789',
    orderCount: '123',
    cancellationAmount: '123,456',
  });

  const handleButtonClick = (period) => {
    setActiveButton(period);
    let newData;
    let newSalesData;

    switch (period) {
      case 'yesterday':
        newData = [18000, 55000, 60000, 30000, 20000, 28000, 19000, 37000, 65000, 75000, 47000, 28000];
        newSalesData = {
          actualSales: '100,456,789',
          orderCount: '110',
          cancellationAmount: '100,456',
        };
        break;
      case 'today':
        newData = [68000, 26000, 37000, 75000, 30000, 30000, 30000, 25000, 70000, 80000, 30000, 30000];
        newSalesData = {
          actualSales: '123,456,789',
          orderCount: '123',
          cancellationAmount: '123,456',
        };
        break;
      case 'thisWeek':
        newData = [39000, 31000, 67000, 41000, 23000, 29000, 67000, 39000, 69000, 78000, 60000, 31000];
        newSalesData = {
          actualSales: '300,456,789',
          orderCount: '150',
          cancellationAmount: '300,456',
        };
        break;
      case 'thisMonth':
        newData = [71000, 42000, 26500, 47000, 27000, 33000, 22000, 25000, 74000, 82000, 52000, 35000];
        newSalesData = {
          actualSales: '500,456,789',
          orderCount: '200',
          cancellationAmount: '500,456',
        };
        break;
      default:
        newData = [22000, 62000, 68000, 43000, 25000, 38000, 20000, 40000, 78200, 36300, 50000, 90000];
        newSalesData = {
          actualSales: '123,456,789',
          orderCount: '123',
          cancellationAmount: '123,456',
        };
    }

    setChartData({
      ...chartData,
      datasets: [
        {
          ...chartData.datasets[0],
          data: newData,
        },
      ],
    });

    setSalesData(newSalesData);
  };

  const options = {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 40,
        right: 44,
        top: 40,
        bottom: 40,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 90000,
        ticks: {
          font: {
            size: 16,
            weight: 500,
            lineHeight: 1.7142857143,
          },
          color: '#414247',
          stepSize: 10000,
          padding: 24,
          callback: function(value) {
            if (value === 0) return '-';
            if (value === 90000) return '90,000';
            return value.toLocaleString();
          },
        },
        grid: {
          color: '#D8DEF1',
          drawBorder: false,
        },
        border: {
          display: false,
        },
      },
      x: {
        ticks: {
          font: {
            size: 16,
            weight: 500,
            lineHeight: 1.7142857143,
          },
          color: '#414247',
          padding: 10,
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className='dashboard'>
      <div className="dash_title">
        <p>안녕하세요 <span>큐빗 라멘</span> 님!</p>
        <p>오늘의 주문완료 금액은 <span className='dash_num'>123,456원</span>입니다.</p>
      </div>
      <div className="dash_btn">
        <p>매출현황</p>
        <ul>
          <li
            onClick={() => handleButtonClick('yesterday')}
            className={activeButton === 'yesterday' ? 'active' : ''}
          >
            어제
          </li>
          <li
            onClick={() => handleButtonClick('today')}
            className={activeButton === 'today' ? 'active' : ''}
          >
            오늘
          </li>
          <li
            onClick={() => handleButtonClick('thisWeek')}
            className={activeButton === 'thisWeek' ? 'active' : ''}
          >
            이번주
          </li>
          <li
            onClick={() => handleButtonClick('thisMonth')}
            className={activeButton === 'thisMonth' ? 'active' : ''}
          >
            이번달
          </li>
        </ul>
      </div>
      <div className="dash_box">
        <div className="actual_sales">
          <p className='actual_sales_title'>실매출</p>
          <p>{salesData.actualSales}원</p>
        </div>
        <div className="order">
          <p className='actual_sales_title'>주문건</p>
          <p>{salesData.orderCount}건</p>
        </div>
        <div className="cancellation">
          <p className='actual_sales_title'>취소</p>
          <p>{salesData.cancellationAmount}원</p>
        </div>
      </div>
      <div className="dash_chart">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default DashboardMain;
