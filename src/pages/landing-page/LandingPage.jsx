import React from "react";

import "./landing-page.css";

import { UseJobFilter } from "../../components";

function LandingPage() {
  const { filter, renderFilter } = UseJobFilter();

  return <div>{renderFilter()}</div>;
}

export default LandingPage;
