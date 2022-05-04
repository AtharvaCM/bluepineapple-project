import React from "react";
import Card from "react-bootstrap/Card";
import { Table } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";

function FootballMainContent() {
  return (
    <>
      <Card className="mt-2 ms-5 me-5">
        <Card.Header>
          <Table className="table table-borderless">
            <tr>
              <td style={{ fontSize: "35px", fontWeight: "bold" }} colSpan={3}>
                Team Abc Vs Team Xyz
              </td>
            </tr>

            <tr style={{ fontSize: "15px", fontWeight: "bold" }}>
              <td>Venue : Balewadi Stadium Pune</td>
              <td>Date & Time : 28th April,2pm</td>
              <td>Series : Bundesliga 2021-2022</td>
            </tr>
          </Table>
        </Card.Header>

        <Card.Body>
          <CardGroup>
            <Card border="light">
              <Card.Body
                style={{ height: "250px", width: "250px", alignSelf: "center" }}
              >
                <Card.Img
                  variant="top"
                  src="https://pbs.twimg.com/profile_images/1409740849995522049/u85BO_GZ_400x400.jpg"
                />
              </Card.Body>
            </Card>

            <Card border="light">
              <Card.Body
                style={{ height: "250px", width: "250px", alignSelf: "center" }}
              >
                <Card.Title style={{ textAlign: "center", fontWeight: "bold" }}>
                  90 : 00
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: "50px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  0 : 2
                </Card.Text>
                <Card.Text style={{ textAlign: "center", fontWeight: "bold" }}>
                  {" "}
                  Yellow Card - 2{" "}
                </Card.Text>
                <Card.Text style={{ textAlign: "center", fontWeight: "bold" }}>
                  {" "}
                  Red Card - 2{" "}
                </Card.Text>
              </Card.Body>
              <Button style={{ alignSelf: "center" }}>Refresh</Button>
            </Card>

            <Card border="light">
              <Card.Body
                style={{ height: "250px", width: "250px", alignSelf: "center" }}
              >
                <Card.Img
                  variant="top"
                  src="https://pbs.twimg.com/profile_images/1409740849995522049/u85BO_GZ_400x400.jpg"
                />
              </Card.Body>
            </Card>
          </CardGroup>
        </Card.Body>
      </Card>

      <Card className="mt-2 ms-5 me-5">
        <Card.Header>
          <Table className="table table-borderless">
            <tr>
              <td style={{ fontSize: "35px", fontWeight: "bold" }} colSpan={3}>
                Team Abc Vs Team Xyz
              </td>
            </tr>

            <tr style={{ fontSize: "15px", fontWeight: "bold" }}>
              <td>Venue : Balewadi Stadium Pune</td>
              <td>Date & Time : 28th April,2pm</td>
              <td>Series : Bundesliga 2021-2022</td>
            </tr>
          </Table>
        </Card.Header>

        <Card.Body>
          <CardGroup>
            <Card border="light">
              <Card.Body
                style={{ height: "250px", width: "250px", alignSelf: "center" }}
              >
                <Card.Img
                  variant="top"
                  src="https://pbs.twimg.com/profile_images/1409740849995522049/u85BO_GZ_400x400.jpg"
                />
              </Card.Body>
            </Card>

            <Card border="light">
              <Card.Body
                style={{ height: "250px", width: "250px", alignSelf: "center" }}
              >
                <Card.Title style={{ textAlign: "center", fontWeight: "bold" }}>
                  90 : 00
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: "50px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  0 : 2
                </Card.Text>
                <Card.Text style={{ textAlign: "center", fontWeight: "bold" }}>
                  {" "}
                  Yellow Card - 2{" "}
                </Card.Text>
                <Card.Text style={{ textAlign: "center", fontWeight: "bold" }}>
                  {" "}
                  Red Card - 2{" "}
                </Card.Text>
              </Card.Body>
              <Button style={{ alignSelf: "center" }}>Refresh</Button>
            </Card>

            <Card border="light">
              <Card.Body
                style={{ height: "250px", width: "250px", alignSelf: "center" }}
              >
                <Card.Img
                  variant="top"
                  src="https://pbs.twimg.com/profile_images/1409740849995522049/u85BO_GZ_400x400.jpg"
                />
              </Card.Body>
            </Card>
          </CardGroup>
        </Card.Body>
      </Card>

      <Card className="mt-2 ms-5 me-5">
        <Card.Header>
          <Table className="table table-borderless">
            <tr>
              <td style={{ fontSize: "35px", fontWeight: "bold" }} colSpan={3}>
                Team Abc Vs Team Xyz
              </td>
            </tr>

            <tr style={{ fontSize: "15px", fontWeight: "bold" }}>
              <td>Venue : Balewadi Stadium Pune</td>
              <td>Date & Time : 28th April,2pm</td>
              <td>Series : Bundesliga 2021-2022</td>
            </tr>
          </Table>
        </Card.Header>

        <Card.Body>
          <CardGroup>
            <Card border="light">
              <Card.Body
                style={{ height: "250px", width: "250px", alignSelf: "center" }}
              >
                <Card.Img
                  variant="top"
                  src="https://pbs.twimg.com/profile_images/1409740849995522049/u85BO_GZ_400x400.jpg"
                />
              </Card.Body>
            </Card>

            <Card border="light">
              <Card.Body
                style={{ height: "250px", width: "250px", alignSelf: "center" }}
              >
                <Card.Title style={{ textAlign: "center", fontWeight: "bold" }}>
                  90 : 00
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: "50px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  0 : 2
                </Card.Text>
                <Card.Text style={{ textAlign: "center", fontWeight: "bold" }}>
                  {" "}
                  Yellow Card - 2{" "}
                </Card.Text>
                <Card.Text style={{ textAlign: "center", fontWeight: "bold" }}>
                  {" "}
                  Red Card - 2{" "}
                </Card.Text>
              </Card.Body>
              <Button style={{ alignSelf: "center" }}>Refresh</Button>
            </Card>

            <Card border="light">
              <Card.Body
                style={{ height: "250px", width: "250px", alignSelf: "center" }}
              >
                <Card.Img
                  variant="top"
                  src="https://pbs.twimg.com/profile_images/1409740849995522049/u85BO_GZ_400x400.jpg"
                />
              </Card.Body>
            </Card>
          </CardGroup>
        </Card.Body>
      </Card>

      <Card className="mt-2 ms-5 me-5">
        <Card.Header>
          <Table className="table table-borderless">
            <tr>
              <td style={{ fontSize: "35px", fontWeight: "bold" }} colSpan={3}>
                Team Abc Vs Team Xyz
              </td>
            </tr>

            <tr style={{ fontSize: "15px", fontWeight: "bold" }}>
              <td>Venue : Balewadi Stadium Pune</td>
              <td>Date & Time : 28th April,2pm</td>
              <td>Series : Bundesliga 2021-2022</td>
            </tr>
          </Table>
        </Card.Header>

        <Card.Body>
          <CardGroup>
            <Card border="light">
              <Card.Body
                style={{ height: "250px", width: "250px", alignSelf: "center" }}
              >
                <Card.Img
                  variant="top"
                  src="https://pbs.twimg.com/profile_images/1409740849995522049/u85BO_GZ_400x400.jpg"
                />
              </Card.Body>
            </Card>

            <Card border="light">
              <Card.Body
                style={{ height: "250px", width: "250px", alignSelf: "center" }}
              >
                <Card.Title style={{ textAlign: "center", fontWeight: "bold" }}>
                  90 : 00
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: "50px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  0 : 2
                </Card.Text>
                <Card.Text style={{ textAlign: "center", fontWeight: "bold" }}>
                  {" "}
                  Yellow Card - 2{" "}
                </Card.Text>
                <Card.Text style={{ textAlign: "center", fontWeight: "bold" }}>
                  {" "}
                  Red Card - 2{" "}
                </Card.Text>
              </Card.Body>
              <Button style={{ alignSelf: "center" }}>Refresh</Button>
            </Card>

            <Card border="light">
              <Card.Body
                style={{ height: "250px", width: "250px", alignSelf: "center" }}
              >
                <Card.Img
                  variant="top"
                  src="https://pbs.twimg.com/profile_images/1409740849995522049/u85BO_GZ_400x400.jpg"
                />
              </Card.Body>
            </Card>
          </CardGroup>
        </Card.Body>
      </Card>
    </>
  );
}

export default FootballMainContent;
