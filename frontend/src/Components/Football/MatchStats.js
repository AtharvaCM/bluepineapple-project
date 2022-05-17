/* eslint-disable no-unused-vars */
import { React, useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { MatchStatsAPI } from "../../Api/footballApi/MatchStatsAPI";
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
          console.log("response", response);
          // for subs data
          if (response.match.statistics[0] !== undefined) {
            const labels = Object.keys(response.match.statistics[0]).slice(1);
            const data = Object.values(response.match.statistics[0]).slice(1);
            setSubsData({
              labels: labels,
              datasets: [
                {
                  label: `Substitutions`,
                  data: data,
                  backgroundColor: doughnutChartBGColors,
                  barThickness: 50,
                },
              ],
            });
          }

          // for attacks data
          if (response.match.statistics[1] !== undefined) {
            const labels = Object.keys(response.match.statistics[1]).slice(1);
            const data = Object.values(response.match.statistics[1]).slice(1);
            setAttacksData({
              labels: labels,
              datasets: [
                {
                  label: `Attacks`,
                  data: data,
                  backgroundColor: doughnutChartBGColors,
                  barThickness: 50,
                },
              ],
            });
          }

          // for dangerous attacks data
          if (response.match.statistics[2] !== undefined) {
            const labels = Object.keys(response.match.statistics[2]).slice(1);
            const data = Object.values(response.match.statistics[2]).slice(1);
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

  const subsChart = () => {
    return (
      <>
        <BarChart chartData={subsData} title={`Substitutions`}></BarChart>
      </>
    );
  };

  const attacksChart = () => {
    return (
      <>
        <BarChart chartData={attacksData} title={`Attacks`}></BarChart>
      </>
    );
  };

  const dangerousAttacksChart = () => {
    return (
      <>
        <PieChart
          chartData={dangerousAttacksData}
          title={`Dangerous Attacks`}
        ></PieChart>
      </>
    );
  };

  const statsCard = () => {
    return (
      <>
        <Card style={{ backgroundColor: "white" }}>
          <Card.Header style={{ color: "black" }}>Match Stats</Card.Header>
          <Card.Body>
            <Row>
              <Col sm="12" md="6">
                {subsData === null ? null : subsChart()}
              </Col>
              <Col sm="12" md="6">
                {attacksData === null ? null : attacksChart()}
              </Col>
            </Row>
            <Row>
              <Col>
                {dangerousAttacksData === null ? null : dangerousAttacksChart()}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </>
    );
  };

  return (
    <>
      <Container>{statsCard()}</Container>
    </>
  );
}

export default MatchStats;
