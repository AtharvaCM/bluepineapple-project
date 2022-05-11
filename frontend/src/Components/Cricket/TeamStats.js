/* eslint-disable no-unused-vars */
import { React, useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import {
  TeamStatsTotalMatchesAPI,
  TeamStatsWinPercentageByYearAPI,
} from "../../Api/TeamStatsAPI";
import { BarChart, PieChart, DoughnutChart } from "./Chart";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

function TeamStatsComponent({ team }) {
  const [chartData, setChartData] = useState(null);
  const [winPercentage, setWinPercentage] = useState(null);

  useEffect(() => {
    const getTotalMatchesData = () => {
      TeamStatsTotalMatchesAPI(team.id)
        .then((response) => {
          const labels = Object.keys(response.stats.stats.odi).slice(1);
          const dataODI = Object.values(response.stats.stats.odi).slice(1);
          const dataTest = Object.values(response.stats.stats.test).slice(1);
          const dataT20 = Object.values(response.stats.stats.t20).slice(1);
          setChartData({
            odi: {
              labels: labels,
              datasets: [
                {
                  label: `${team.name} ODI Stats`,
                  data: dataODI,
                  backgroundColor: ["green", "red", "yellow"],
                },
              ],
            },
            test: {
              labels: labels,
              datasets: [
                {
                  label: `${team.name} Test Stats`,
                  data: dataTest,
                  backgroundColor: ["green", "red", "yellow"],
                },
              ],
            },
            t20: {
              labels: labels,
              datasets: [
                {
                  label: `${team.name} T20 Stats`,
                  data: dataT20,
                  backgroundColor: ["green", "red", "yellow"],
                },
              ],
            },
          });
        })
        .catch((err) => console.log(err));
    };

    const getWinPercentageByYearData = () => {
      TeamStatsWinPercentageByYearAPI(team.id)
        .then((response) => {
          const labels = Object.keys(
            response.stats.stats.odi.win_percentage
          ).slice(0, -1);
          const dataODI = Object.values(
            response.stats.stats.odi.win_percentage
          ).slice(0, -1);
          const dataTest = Object.values(
            response.stats.stats.test.win_percentage
          ).slice(0, -1);
          const dataT20 = Object.values(
            response.stats.stats.t20.win_percentage
          ).slice(0, -1);
          setWinPercentage({
            odi: {
              labels: labels,
              datasets: [
                {
                  label: `${team.name} ODI Win Percentage By Year`,
                  data: dataODI,
                  backgroundColor: [
                    "rgba(255, 99, 132)",
                    "rgba(54, 162, 235)",
                    "rgba(255, 206, 86)",
                    "rgba(75, 192, 192)",
                    "rgba(153, 102, 255)",
                  ],
                },
              ],
            },
            test: {
              labels: labels,
              datasets: [
                {
                  label: `${team.name} Test Win Percentage By Year`,
                  data: dataTest,
                  backgroundColor: [
                    "rgba(255, 99, 132)",
                    "rgba(54, 162, 235)",
                    "rgba(255, 206, 86)",
                    "rgba(75, 192, 192)",
                    "rgba(153, 102, 255)",
                  ],
                },
              ],
            },
            t20: {
              labels: labels,
              datasets: [
                {
                  label: `${team.name} T20 Win Percentage By Year`,
                  data: dataT20,
                  backgroundColor: [
                    "rgba(255, 99, 132)",
                    "rgba(54, 162, 235)",
                    "rgba(255, 206, 86)",
                    "rgba(75, 192, 192)",
                    "rgba(153, 102, 255)",
                  ],
                },
              ],
            },
          });
        })
        .catch((err) => console.log(err));
    };

    getTotalMatchesData();
    getWinPercentageByYearData();
  }, [team.id, team.name]);

  const odiCard = () => {
    return (
      <>
        <Card style={{ backgroundColor: "#51546E" }}>
          <Card.Header>{team.name} ODI Stats</Card.Header>
          <Card.Body>
            <DoughnutChart
              chartData={chartData.odi}
              title={`${team.name} ODI Stats`}
            ></DoughnutChart>
            <hr></hr>
            <BarChart
              chartData={winPercentage.odi}
              title={`${team.name} Win Percentage`}
            ></BarChart>
          </Card.Body>
        </Card>
      </>
    );
  };

  const testCard = () => {
    return (
      <>
        <Card style={{ backgroundColor: "#51546E" }} className="mt-4">
          <Card.Header>{team.name} Test Stats</Card.Header>
          <Card.Body>
            <DoughnutChart
              chartData={chartData.test}
              title={`${team.name} Test Stats`}
            ></DoughnutChart>
            <hr></hr>
            <BarChart
              chartData={winPercentage.test}
              title={`${team.name} Win Percentage`}
            ></BarChart>
          </Card.Body>
        </Card>
      </>
    );
  };

  const t20Card = () => {
    return (
      <>
        <Card style={{ backgroundColor: "#51546E" }} className="mt-4 mb-5">
          <Card.Header>{team.name} T20 Stats</Card.Header>
          <Card.Body>
            <DoughnutChart
              chartData={chartData.t20}
              title={`${team.name} T20 Stats`}
            ></DoughnutChart>
            <hr></hr>
            <BarChart
              chartData={winPercentage.t20}
              title={`${team.name} Win Percentage`}
            ></BarChart>
          </Card.Body>
        </Card>
      </>
    );
  };

  return (
    <>
      <Container>
        {chartData === null || winPercentage === null ? null : odiCard()}
        {chartData === null || winPercentage === null ? null : testCard()}
        {chartData === null || winPercentage === null ? null : t20Card()}
      </Container>
    </>
  );
}

export default TeamStatsComponent;
