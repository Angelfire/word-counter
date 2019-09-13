import React from "react";
import "./DataRecolector.css";

class DataRecolector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  handleChange = e => {
    this.setState({ data: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { data } = this.state;
    const { handleData } = this.props;

    handleData(data);
  };

  render() {
    const { data } = this.state;

    return (
      <div className="DataRecolector" onSubmit={this.handleSubmit}>
        <form className="DataRecolector-form">
          <textarea
            className="DataRecolector-textarea"
            name="data"
            placeholder="Write the Paragraph"
            onChange={this.handleChange}
            value={data}
          ></textarea>
          <button className="DataRecolector-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default DataRecolector;
