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
            this.setDate("20241229");
          }}
          style={{
            backgroundImage: `url(${imagePath("20241229")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20241222");
          }}
          style={{
            backgroundImage: `url(${imagePath("20241222")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20241215");
          }}
          style={{
            backgroundImage: `url(${imagePath("20241215")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20241208");
          }}
          style={{
            backgroundImage: `url(${imagePath("20241208")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20241201");
          }}
          style={{
            backgroundImage: `url(${imagePath("20241201")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20241124");
          }}
          style={{
            backgroundImage: `url(${imagePath("20241124")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20241117");
          }}
          style={{
            backgroundImage: `url(${imagePath("20241117")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20241110");
          }}
          style={{
            backgroundImage: `url(${imagePath("20241110")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20241103");
          }}
          style={{
            backgroundImage: `url(${imagePath("20241103")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20241027");
          }}
          style={{
            backgroundImage: `url(${imagePath("20241027")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20241020");
          }}
          style={{
            backgroundImage: `url(${imagePath("20241020")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20241013");
          }}
          style={{
            backgroundImage: `url(${imagePath("20241013")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20241002");
          }}
          style={{
            backgroundImage: `url(${imagePath("20241002")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20240929");
          }}
          style={{
            backgroundImage: `url(${imagePath("20240929")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20240922");
          }}
          style={{
            backgroundImage: `url(${imagePath("20240922")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20240915");
          }}
          style={{
            backgroundImage: `url(${imagePath("20240915")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20240908");
          }}
          style={{
            backgroundImage: `url(${imagePath("20240908")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20240825");
          }}
          style={{
            backgroundImage: `url(${imagePath("20240825")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20240818");
          }}
          style={{
            backgroundImage: `url(${imagePath("20240818")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20240811");
          }}
          style={{
            backgroundImage: `url(${imagePath("20240811")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20240804");
          }}
          style={{
            backgroundImage: `url(${imagePath("20240804")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20240721");
          }}
          style={{
            backgroundImage: `url(${imagePath("20240721")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20240714");
          }}
          style={{
            backgroundImage: `url(${imagePath("20240714")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20240707");
          }}
          style={{
            backgroundImage: `url(${imagePath("20240707")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20240630");
          }}
          style={{
            backgroundImage: `url(${imagePath("20240630")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20240623");
          }}
          style={{
            backgroundImage: `url(${imagePath("20240623")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20240616");
          }}
          style={{
            backgroundImage: `url(${imagePath("20240616")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20240609");
          }}
          style={{
            backgroundImage: `url(${imagePath("20240609")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20240602");
          }}
          style={{
            backgroundImage: `url(${imagePath("20240602")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20240526");
          }}
          style={{
            backgroundImage: `url(${imagePath("20240526")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20240512");
          }}
          style={{
            backgroundImage: `url(${imagePath("20240512")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20240505");
          }}
          style={{
            backgroundImage: `url(${imagePath("20240505")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20240428");
          }}
          style={{
            backgroundImage: `url(${imagePath("20240428")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20240421");
          }}
          style={{
            backgroundImage: `url(${imagePath("20240421")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20240414");
          }}
          style={{
            backgroundImage: `url(${imagePath("20240414")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20240407");
          }}
          style={{
            backgroundImage: `url(${imagePath("20240407")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20240331");
          }}
          style={{
            backgroundImage: `url(${imagePath("20240331")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20240324");
          }}
          style={{
            backgroundImage: `url(${imagePath("20240324")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20240317");
          }}
          style={{
            backgroundImage: `url(${imagePath("20240317")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20240310");
          }}
          style={{
            backgroundImage: `url(${imagePath("20240310")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20240303");
          }}
          style={{
            backgroundImage: `url(${imagePath("20240303")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20240225");
          }}
          style={{
            backgroundImage: `url(${imagePath("20240225")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20240218");
          }}
          style={{
            backgroundImage: `url(${imagePath("20240218")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20240211");
          }}
          style={{
            backgroundImage: `url(${imagePath("20240211")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20240204");
          }}
          style={{
            backgroundImage: `url(${imagePath("20240204")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20240128");
          }}
          style={{
            backgroundImage: `url(${imagePath("20240128")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20240121");
          }}
          style={{
            backgroundImage: `url(${imagePath("20240121")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20240114");
          }}
          style={{
            backgroundImage: `url(${imagePath("20240114")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20240107");
          }}
          style={{
            backgroundImage: `url(${imagePath("20240107")})`,
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
