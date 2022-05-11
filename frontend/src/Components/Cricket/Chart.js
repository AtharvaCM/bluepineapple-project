import { Bar, Pie, Doughnut } from "react-chartjs-2";

export const BarChart = ({ chartData, title }) => {
  return (
    <div>
      <Bar
        height={400}
        width={500}
        data={chartData}
        options={{
          color: "white",
          plugins: {
            title: {
              display: true,
              text: title,
              color: "white",
            },
            legend: {
              display: true,
              position: "bottom",
            },
          },
          scales: {
            x: {
              ticks: {
                color: "white",
              },
            },
            y: {
              ticks: {
                color: "white",
              },
            },
          },
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export const PieChart = ({ chartData, title }) => {
  return (
    <div>
      <Pie
        height={400}
        width={500}
        data={chartData}
        options={{
          color: "white",
          plugins: {
            title: {
              display: true,
              text: title,
              color: "white",
            },
            legend: {
              display: true,
              position: "bottom",
            },
          },
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export const DoughnutChart = ({ chartData, title }) => {
  return (
    <div>
      <Doughnut
        height={400}
        width={500}
        data={chartData}
        options={{
          color: "white",
          plugins: {
            title: {
              display: true,
              text: title,
              color: "white",
            },
            legend: {
              display: true,
              position: "bottom",
            },
          },
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};
