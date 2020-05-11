import React from "react";
import SearchBar from "./SearchBar";
import Emaillist from "./Emaillist";

export default class EmaillistApp extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      keyword: "d",
    };
  }

  render() {
    return (
      <div className="EmaillistApp">
        <SearchBar />
        <Emaillist keyword={this.state.keyword} emails={this.props.emails} />
      </div>
    );
  }
}
