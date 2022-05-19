/* eslint-disable no-unused-vars */
import { React, useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { MatchStatsAPI } from "../../Api/footballApi/MatchStatsAPI";
import { BarChart, PieChart, DoughnutChart, LineChart } from "../Chart";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { COLORS, THEME } from "../../Constants/colors";

const doughnutChartBGColors = [
  COLORS.chartGreen,
  COLORS.chartRed,
  COLORS.chartOrange,
];

const lineChartBGColors = [THEME.colorButton];

const lineChartPointRadius = 7;
const lineChartPointHoverRadius = 8;

function MatchStats({ match }) {
  const [subsData, setSubsData] = useState(null);
  const [attacksData, setAttacksData] = useState(null);
  const [dangerousAttacksData, setDangerousAttacksData] = useState(null);
  const [goalscorers, setGoalscorers] = useState(null);

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

          // for goals
          if (response.match.goalscorers !== undefined) {
            const data = response.match.goalscorers.map((goal) => {
              const goalTime = Object.values(goal).slice(0, 1)[0];
              return typeof parseInt(goalTime) === Number
                ? parseInt(goalTime)
                : eval(goalTime);
              // console.log(data);
            });
            const labels = response.match.goalscorers.map((goal) => {
              const scorers =
                Object.values(goal).slice(1, 2)[0] === ""
                  ? Object.values(goal).slice(6, 7)[0]
                  : Object.values(goal).slice(1, 2)[0];
              return scorers;
            });
            console.log("goals", data);
            setGoalscorers({
              labels: labels,
              datasets: [
                {
                  label: `Time`,
                  data: data,
                  backgroundColor: lineChartBGColors,
                  pointRadius: lineChartPointRadius,
                  pointHoverRadius: lineChartPointHoverRadius,
                  borderColor: COLORS.lineChartBorder,
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

  const timelineChart = () => {
    return (
      <>
        <LineChart chartData={goalscorers} title={`Timeline`}></LineChart>
      </>
    );
  };

  const scoreTimelineCard = () => {
    return (
      <>
        <Card style={{ backgroundColor: "white" }}>
          <Card.Header style={{ color: "black" }}>Timeline</Card.Header>
          <Card.Body>{goalscorers === null ? null : timelineChart()}</Card.Body>
        </Card>
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
      <Container>
        {scoreTimelineCard()}
        <div className="mt-4"></div>
        {statsCard()}
      </Container>
    </>
  );
}

export default MatchStats;
