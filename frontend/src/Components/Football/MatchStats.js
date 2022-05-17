/* eslint-disable no-unused-vars */
import { React, useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { MatchStatsAPI } from "../../Api/MatchStatsAPI";
import { BarChart, PieChart, DoughnutChart, LineChart } from "../Chart";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { COLORS } from "../../Constants/colors";

const doughnutChartBGColors = [
  COLORS.chartGreen,
  COLORS.chartRed,
  COLORS.chartOrange,
];

const lineChartBGColors = [
  COLORS.chartPink,
  COLORS.chartRed,
  COLORS.chartOrange,
  COLORS.chartYellow,
  COLORS.chartGreen,
];

const lineChartPointRadius = 7;
const lineChartPointHoverRadius = 8;

function MatchStats({ match }) {
  const [subsData, setSubsData] = useState(null);
  const [attacksData, setAttacksData] = useState(null);
  const [dangerousAttacksData, setDangerousAttacksData] = useState(null);

  useEffect(() => {
    const getMatchStats = () => {
      MatchStatsAPI(match.event_key)
        .then((response) => {
          // parse the repsonse

          // for subs data
          if (response.statistics[0] !== undefined) {
            const labels = Object.keys(response.statistics[0]).slice(1);
            const data = Object.values(response.statistics[0]).slice(1);
            setSubsData({
              labels: labels,
              datasets: [
                {
                  label: `Substitutions`,
                  data: data,
                  backgroundColor: doughnutChartBGColors,
                },
              ],
            });
          }

          // for attacks data
          if (response.statistics[1] !== undefined) {
            const labels = Object.keys(response.statistics[1]).slice(1);
            const data = Object.values(response.statistics[1]).slice(1);
            setAttacksData({
              labels: labels,
              datasets: [
                {
                  label: `Attacks`,
                  data: data,
                  backgroundColor: doughnutChartBGColors,
                },
              ],
            });
          }

          // for dangerous attacks data
          if (response.statistics[2] !== undefined) {
            const labels = Object.keys(response.statistics[2]).slice(1);
            const data = Object.values(response.statistics[2]).slice(1);
            setDangerousAttacksData({
              labels: labels,
              datasets: [
                {
                  label: `Dangerous Attacks`,
                  data: data,
                  backgroundColor: doughnutChartBGColors,
                },
              ],
            });
          }
        })
        .catch((err) => console.log(err));
    };

    getMatchStats();
  }, [match.event_key]);

  const odiCard = () => {
    return (
      <>
        <Card style={{ backgroundColor: "white" }}>
          <Card.Header style={{ color: "black" }}>
            {team.name} ODI Stats
          </Card.Header>
          <Card.Body>
            <DoughnutChart
              chartData={chartData.odi}
              title={`${team.name} ODI Stats`}
            ></DoughnutChart>
            <hr></hr>
            <LineChart
              chartData={winPercentage.odi}
              title={`${team.name} ODI Win Percentage`}
            ></LineChart>
          </Card.Body>
        </Card>
      </>
    );
  };

  const testCard = () => {
    return (
      <>
        <Card style={{ backgroundColor: "white" }} className="mt-4">
          <Card.Header style={{ color: "black" }}>
            {team.name} Test Stats
          </Card.Header>
          <Card.Body>
            <DoughnutChart
              chartData={chartData.test}
              title={`${team.name} Test Stats`}
            ></DoughnutChart>
            <hr></hr>
            <LineChart
              chartData={winPercentage.test}
              title={`${team.name} Test Win Percentage`}
            ></LineChart>
          </Card.Body>
        </Card>
      </>
    );
  };

  const t20Card = () => {
    return (
      <>
        <Card style={{ backgroundColor: "white" }} className="mt-4 mb-5">
          <Card.Header>{team.name} T20 Stats</Card.Header>
          <Card.Body>
            <DoughnutChart
              chartData={chartData.t20}
              title={`${team.name} T20 Stats`}
            ></DoughnutChart>
            <hr></hr>
            <LineChart
              chartData={winPercentage.t20}
              title={`${team.name} T20 Win Percentage`}
            ></LineChart>
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

export default TeamStats;
