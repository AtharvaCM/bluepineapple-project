import { React, useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { COLORS } from "../../Constants/colors";
import { PlayerStatsRunsInPastFiveYearsAPI } from "../../Api/PlayerStatsAPI";
import { LineChart } from "./Chart";

const lineChartBGColors = [
  COLORS.chartPink,
  COLORS.chartRed,
  COLORS.chartOrange,
  COLORS.chartYellow,
  COLORS.chartGreen,
];

const lineChartPointRadius = 7;
const lineChartPointHoverRadius = 8;

function PlayerStats({ player }) {
  const [runsData, setRunsData] = useState(null);

  useEffect(() => {
    const getRunsInPastFiveYears = (player) => {
      PlayerStatsRunsInPastFiveYearsAPI(player.id)
        .then((response) => {
          // parse the response
          const labels = Object.keys(response.data.runs_in_past_5_years.test);
          const dataODI = Object.values(response.data.runs_in_past_5_years.odi);
          const dataTest = Object.values(
            response.data.runs_in_past_5_years.test
          );
          const dataT20 = Object.values(response.data.runs_in_past_5_years.t20);
          setRunsData({
            odi: {
              labels: labels,
              datasets: [
                {
                  label: `${player.name} ODI Runs In Past 5 Years`,
                  data: dataODI,
                  backgroundColor: lineChartBGColors,
                  pointRadius: lineChartPointRadius,
                  pointHoverRadius: lineChartPointHoverRadius,
                  borderColor: COLORS.lineChartBorder,
                },
              ],
            },
            test: {
              labels: labels,
              datasets: [
                {
                  label: `${player.name} Test Runs In Past 5 Years`,
                  data: dataTest,
                  backgroundColor: lineChartBGColors,
                  pointRadius: lineChartPointRadius,
                  pointHoverRadius: lineChartPointHoverRadius,
                  borderColor: COLORS.lineChartBorder,
                },
              ],
            },
            t20: {
              labels: labels,
              datasets: [
                {
                  label: `${player.name} T20 Runs In Past 5 Years`,
                  data: dataT20,
                  backgroundColor: lineChartBGColors,
                  pointRadius: lineChartPointRadius,
                  pointHoverRadius: lineChartPointHoverRadius,
                  borderColor: COLORS.lineChartBorder,
                },
              ],
            },
          });
        })
        .catch((err) => console.log(err));
    };

    getRunsInPastFiveYears();
  }, []);

  const odiCard = () => {
    return (
      <>
        <Card style={{ backgroundColor: "#51546E" }}>
          <Card.Header>{player.name} ODI Stats</Card.Header>
          <Card.Body>
            <LineChart
              chartData={runsData.odi}
              title={`${player.name} ODI Win Percentage`}
            ></LineChart>
          </Card.Body>
        </Card>
      </>
    );
  };

  const testCard = () => {
    return (
      <>
        <Card style={{ backgroundColor: "#51546E" }}>
          <Card.Header>{player.name} Test Stats</Card.Header>
          <Card.Body>
            <LineChart
              chartData={runsData.test}
              title={`${player.name} Test Win Percentage`}
            ></LineChart>
          </Card.Body>
        </Card>
      </>
    );
  };

  const t20Card = () => {
    return (
      <>
        <Card style={{ backgroundColor: "#51546E" }}>
          <Card.Header>{player.name} T20 Stats</Card.Header>
          <Card.Body>
            <LineChart
              chartData={runsData.t20}
              title={`${player.name} T20 Win Percentage`}
            ></LineChart>
          </Card.Body>
        </Card>
      </>
    );
  };

  return (
    <>
      <Container>
        {runsData === null ? null : odiCard()}
        {runsData === null ? null : testCard()}
        {runsData === null ? null : t20Card()}
      </Container>
    </>
  );
}

export default PlayerStats;
