import { React } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../Resources/Styles/TeamSubNavBar.css";

function Teams() {
  return (
    <>
      <div className="container mt-2">
        <Card style={{ backgroundColor: "white" }}>
          <Card.Header>
            <Card.Text style={{ fontSize: "30px", fontWeight: "bold" }}>
              ICC Teams
            </Card.Text>
            <span className="me-5 teamSpan">
              <Link
                to="/Cricket/Team/Men"
                style={{ textDecoration: "none", color: "black" }}
              >
                Mens
              </Link>
            </span>
            <span className="me-5 teamSpan">
              <Link
                to="/Cricket/Team/Women"
                style={{ textDecoration: "none", color: "black" }}
              >
                Women
              </Link>
            </span>
            {/* <span className="me-5 teamSpan">
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                IPL
              </Link>
            </span> */}
          </Card.Header>
        </Card>
      </div>
    </>
  );
}
export default Teams;
