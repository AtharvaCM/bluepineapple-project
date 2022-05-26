/* eslint-disable no-eval */
/* eslint-disable no-unused-vars */
import { React, useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { MatchStatsAPI } from "../../Api/footballApi/MatchStatsAPI";
import {
  BarChart,
  PieChart,
  DoughnutChart,
  LineChart,
  StackedBarChart,
} from "../Chart";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { COLORS, THEME } from "../../Constants/colors";
import { Timeline } from "../Timeline";

const doughnutChartBGColors = [
  COLORS.chartGreen,
  COLORS.chartRed,
  COLORS.chartOrange,
];

function MatchStats({ match }) {
  const [subsData, setSubsData] = useState(null);
  const [attacksData, setAttacksData] = useState(null);
  const [dangerousAttacksData, setDangerousAttacksData] = useState(null);
  const [goalscorers, setGoalscorers] = useState(null);
  const [totalAttacksData, setTotalAttacksData] = useState(null);

  useEffect(() => {
    const getMatchStats = () => {
      console.log("match_key", match.event_key);
      MatchStatsAPI(match.event_key)
        .then((response) => {
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

          // for total attacks
          if (
            response.match.statistics[3] !== undefined &&
            response.match.statistics[4] !== undefined
          ) {
            const labels = [
              response.match.event_home_team,
              response.match.event_away_team,
            ];
            const onTargetData = [
              Object.values(response.match.statistics[3]).slice(1, 2)[0],
              Object.values(response.match.statistics[3]).slice(2, 3)[0],
            ];
            const offTargetData = [
              Object.values(response.match.statistics[4]).slice(1, 2)[0],
              Object.values(response.match.statistics[4]).slice(2, 3)[0],
            ];

            setTotalAttacksData({
              labels: labels,
              datasets: [
                {
                  label: `On Target`,
                  data: onTargetData,
                  backgroundColor: [COLORS.chartGreen],
                  barThickness: 50,
                  stack: "Stack 0",
                },
                {
                  label: `Off Target`,
                  data: offTargetData,
                  backgroundColor: [COLORS.chartRed],
                  barThickness: 50,
                  stack: "Stack 1",
                },
              ],
            });
          }

          // for goals
          if (response.match.goalscorers !== undefined) {
            const data = response.match.goalscorers.map((goal) => {
              const goalTime = Object.values(goal).slice(0, 1)[0];
              const scorer =
                Object.values(goal).slice(1, 2)[0] === ""
                  ? Object.values(goal).slice(6, 7)[0]
                  : Object.values(goal).slice(1, 2)[0];
              const team =
                Object.values(goal).slice(1, 2)[0] === ""
                  ? response.match.event_away_team
                  : response.match.event_home_team;

              return {
                date: goalTime,
                event: scorer,
                team: team,
              };
              // console.log(data);
            });
            console.log("goals", data);
            setGoalscorers(data);
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
    return <Timeline events={goalscorers}></Timeline>;
  };

  const statsCard = () => {
    return (
      <>
        <Card style={{ backgroundColor: "white" }}>
          <Card.Header
            style={{ color: "black" }}
            className="text-center fw-bold fs-3"
          >
            Match Stats
          </Card.Header>
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

  const totalAttacksChart = () => {
    return (
      <>
        <StackedBarChart
          chartData={totalAttacksData}
          title={`${match.event_home_team} vs ${match.event_away_team}`}
        ></StackedBarChart>
      </>
    );
  };

  const totalAttacksCard = () => {
    return (
      <>
        <Card style={{ backgroundColor: "white" }}>
          <Card.Header
            style={{ color: "black" }}
            className="text-center fw-bold fs-3"
          >
            Total Attacks
          </Card.Header>
          <Card.Body>
            {totalAttacksData === null ? null : totalAttacksChart()}
          </Card.Body>
        </Card>
      </>
    );
  };

  return (
    <>
      {scoreTimelineCard()}
      <div className="mt-4"></div>
      {statsCard()}
      <div className="mt-4"></div>
      {totalAttacksCard()}
    </>
  );
}

export default MatchStats;
