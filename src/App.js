import React, { Component } from "react";
import "./App.css";
import Dog from "./components/dog-image/dog-image";
import Select from "./components/select/select";

class App extends Component {
  state = {
    dogList: null,
    selectedDog: null,
    error: false
  };

  componentDidMount = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      if (response.ok) {
        const data = await response.json();
        this.setState({
          dogList: Object.keys(data.message)
        });
      } else {
        this.setState({ error: true });
        alert("Sorry, cannot display the data");
      }
    } catch (e) {
      this.setState({ error: true });
      alert("Sorry, cannot display the data");
    }
  };

  selectHandler = breed => {
    this.setState({
      selectedDog: breed
    });
  };

  render() {
    return (
      <div className="App">
        <Select
          dogList={this.state.dogList}
          onSelect={this.selectHandler}
          error={this.state.error}
        />
        <Dog breed={this.state.selectedDog} />
      </div>
    );
  }
}

export default App;
