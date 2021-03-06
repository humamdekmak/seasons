import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: "lets hit the beach",
    iconName: "sun",
  },
  winter: {
    text: "burrr its cold",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  //   const text = season === "winter" ? "brr its chilly" : "lets hit the beach";
  //   const icon = season === "winter" ? "snowflake" : "sun";
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`}></i>
      <div>{text}</div>
      <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
