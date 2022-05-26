import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import { THEME } from "../Constants/colors";

function Spinner(loading) {
  return <PacmanLoader loading={loading} color={THEME.colorSecondary} />;
}

export default Spinner;
