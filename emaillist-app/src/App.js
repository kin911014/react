import React from "react";
import data from "./data.json";
import EmaillistApp from "./EmaillistApp";

export default class App extends React.Component {
  render() {
    return <EmaillistApp emails={data} />;
  }
}
