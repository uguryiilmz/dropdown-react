import React from "react";
import Dropdown from "../src/components/Dropdown";
import "./App.css";

class App extends React.Component {
  state = {
    lead_times: []
  };

  componentDidMount() {
    fetch("http://localhost:3001/lead_times")
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          lead_times: data
        })
      );
  }

  toggleItem = id => {
    let data = [...this.state.lead_times];
    let index = data.findIndex(obj => obj.id === id);
    data[index].selected = !data[index].selected;
    this.setState({
      lead_times: data
    });
  };

  selectAll = () => {
    let data = [...this.state.lead_times];
    data.map(d => (d.selected = true));
    this.setState({
      lead_times: data
    });
  };

  clearAll = () => {
    let data = [...this.state.lead_times];
    data.map(d => (d.selected = false));
    this.setState({
      lead_times: data
    });
  };

  // countSelected = () => {
  //   const len = this.state.lead_times.filter(time => time.selected === "true");
  //   this.setState({
  //     count: len.length
  //   });
  //   console.log("len is", len);
  // };

  render() {
    return (
      <React.Fragment>
        <Dropdown
          items={this.state.lead_times}
          title="Lead Times"
          itemToggle={this.toggleItem}
          selectAll={this.selectAll}
          clearAll={this.clearAll}
        />
      </React.Fragment>
    );
  }
}

export default App;
