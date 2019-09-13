import React from "react";
import DataRecolector from "../DataRecolector/DataRecolector";
import DataVisualization from "../DataVisualization/DataVisualization";
import { countWords, orderSlice } from "../../utils/libs";

import "./App.css";

class App extends React.Component {
  state = {
    data: ""
  };

  handleData = data => {
    const parsedData = countWords(data);
    const formatedData = orderSlice(parsedData);
    this.setState({ data: formatedData });
  };

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <h1 className="App-title">Word Counter</h1>
        <div className="container">
          <DataRecolector handleData={this.handleData} />
          <DataVisualization data={data} />
        </div>
      </div>
    );
  }
}

export default App;
