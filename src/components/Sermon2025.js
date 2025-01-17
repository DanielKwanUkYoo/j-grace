import React, { Component } from "react";
import "../styles/sermon.css";
import SermonVideo from "./SermonVideo";

export default class Sermon extends Component {
  state = {
    clickedDate: "",
  };

  setDate = (date) => {
    this.setState({
      clickedDate: date,
    });
  };

  confirmVideoClicked = () => {
    this.setState({
      sermonClicked: false,
      confirmVideoClicked: !this.state.confirmVideoClicked,
    });
  };

  sermonPopupClose = () => {
    this.setState({
      confirmVideoClicked: false,
      confirmAudioClicked: false,
      videoAttachmentExist: false,
      videoAttachmentUrl: "",
    });
  };

  render() {
    const imagePath = (date) =>
      `https://j-grace.s3-us-west-2.amazonaws.com/sermonImages/${date}.png`;

    return (
      <>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20250105");
          }}
          style={{
            backgroundImage: `url(${imagePath("20250105")})`,
          }}
        ></th>

        {this.state.confirmVideoClicked && (
          <SermonVideo
            sermonPopupClose={this.sermonPopupClose}
            clickedDate={this.state.clickedDate}
          />
        )}
      </>
    );
  }
}
