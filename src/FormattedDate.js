import React from "react";

export default function FormattedDate(props) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = days[props.date.getDay()];
  return <div>{day}</div>;
}
