import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import { useEffect, useState } from 'react'
import { Doughnut as DoughnutComponent } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const isAllEmptyOrNull = (arr) => {
  return arr?.every((item) => item === null || item === 0 || item === undefined)
}

export const Doughnut = ({ data, labels = [], width = 230, height = 300 }) => {
  const [initialRender, setInitialRender] = useState(true)
  useEffect(() => {
    if (initialRender && isAllEmptyOrNull(data)) {
      setInitialRender(true)
    } else {
      setInitialRender(false)
    }
  }, [data, initialRender])

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: '',
        data: data,
        backgroundColor: [
          'rgba(118, 120, 237, 0.5)',
          'rgba(214, 40, 40, 0.5)',
          // 'rgba(255, 206, 86, 0.5)',
          'rgba(247, 127, 0, 0.5)',
          // 'rgb(122, 155, 226, 0.5)',
          // 'rgb(133, 209, 125, 0.5)',
        ],
        borderColor: [
          'rgba(118, 120, 237, 1)',
          'rgba(214, 40, 40, 1)',
          // 'rgba(255, 206, 86, 1)',
          'rgba(247, 127, 0, 1)',
          // 'rgb(122, 155, 226 ,1)',
          // 'rgb(133, 209, 125, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }


  return (
    <>
      <div className='mt-4 flex items-center justify-center'>
        <DoughnutComponent
          data={chartData}
          width={width}
          height={height}
          options={{
            maintainAspectRatio: false,
            responsive: false,
            plugins: {
              legend: {
                display: true,
                position: 'bottom',
              },
            },
          }}
        />
      </div>
    </>
  )
}
