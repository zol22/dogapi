import React, { Component } from "react";
import "./dog-image.css";
import PlainText from "../plaintext/plaintext";

class Dog extends Component {
  state = {
    imageUrl: null,
    selectedDog: null,
    description: ""
  };

  componentDidUpdate() {
    if (this.props.breed !== this.state.selectedDog) {
      this.setState({
        selectedDog: this.props.breed
      });
      this.fetchImage();
      this.fetchDescription();
    }
  }
  fetchImage = async () => {
    const response = await fetch(
      `https://dog.ceo/api/breed/${this.props.breed}/images/random`
    );
    const data = await response.json();
    const imageUrl = data.message;
    this.setState({
      imageUrl: imageUrl
    });
  };

  fetchDescription = async () => {
    const response = await fetch(
      `https://en.wikipedia.org/w/api.php?origin=*&format=json&explaintext&prop=extracts&explaintext&exintro&action=query&list=search&srsearch=${this.props.breed}%20dog`
    );
    const data = await response.json();
    this.setState({
      description: data.query.search[0].snippet
    });
  };

  render() {
    return (
      <div>
        <div className="image-container">
          {this.state.selectedDog ? (
            <img
              className="image-card"
              src={this.state.imageUrl}
              alt="dogImage"
            ></img>
          ) : null}
          <PlainText text={this.state.description} />
        </div>
      </div>
    );
  }
}

export default Dog;
