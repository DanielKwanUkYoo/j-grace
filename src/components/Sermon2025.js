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
            this.setDate("20251214");
          }}
          style={{
            backgroundImage: `url(${imagePath("20251214")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20251207");
          }}
          style={{
            backgroundImage: `url(${imagePath("20251207")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20251116");
          }}
          style={{
            backgroundImage: `url(${imagePath("20251116")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20251102");
          }}
          style={{
            backgroundImage: `url(${imagePath("20251102")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20251019");
          }}
          style={{
            backgroundImage: `url(${imagePath("20251019")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20251012");
          }}
          style={{
            backgroundImage: `url(${imagePath("20251012")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20251005");
          }}
          style={{
            backgroundImage: `url(${imagePath("20251005")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20250921");
          }}
          style={{
            backgroundImage: `url(${imagePath("20250921")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20250914");
          }}
          style={{
            backgroundImage: `url(${imagePath("20250914")})`,
          }}
        ></th>

        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20250817");
          }}
          style={{
            backgroundImage: `url(${imagePath("20250817")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20250810");
          }}
          style={{
            backgroundImage: `url(${imagePath("20250810")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20250803");
          }}
          style={{
            backgroundImage: `url(${imagePath("20250803")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20250720");
          }}
          style={{
            backgroundImage: `url(${imagePath("20250720")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20250713");
          }}
          style={{
            backgroundImage: `url(${imagePath("20250713")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20250706");
          }}
          style={{
            backgroundImage: `url(${imagePath("20250706")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20250622");
          }}
          style={{
            backgroundImage: `url(${imagePath("20250622")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20250615");
          }}
          style={{
            backgroundImage: `url(${imagePath("20250615")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20250608");
          }}
          style={{
            backgroundImage: `url(${imagePath("20250608")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20250525");
          }}
          style={{
            backgroundImage: `url(${imagePath("20250525")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20250518");
          }}
          style={{
            backgroundImage: `url(${imagePath("20250518")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20250511");
          }}
          style={{
            backgroundImage: `url(${imagePath("20250511")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20250504");
          }}
          style={{
            backgroundImage: `url(${imagePath("20250504")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20250427");
          }}
          style={{
            backgroundImage: `url(${imagePath("20250427")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20250420");
          }}
          style={{
            backgroundImage: `url(${imagePath("20250420")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20250413");
          }}
          style={{
            backgroundImage: `url(${imagePath("20250413")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20250330");
          }}
          style={{
            backgroundImage: `url(${imagePath("20250330")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20250323");
          }}
          style={{
            backgroundImage: `url(${imagePath("20250323")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20250316");
          }}
          style={{
            backgroundImage: `url(${imagePath("20250316")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20250309");
          }}
          style={{
            backgroundImage: `url(${imagePath("20250309")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20250302");
          }}
          style={{
            backgroundImage: `url(${imagePath("20250302")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20250223");
          }}
          style={{
            backgroundImage: `url(${imagePath("20250223")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20250216");
          }}
          style={{
            backgroundImage: `url(${imagePath("20250216")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20250209");
          }}
          style={{
            backgroundImage: `url(${imagePath("20250209")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20250202");
          }}
          style={{
            backgroundImage: `url(${imagePath("20250202")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20250126");
          }}
          style={{
            backgroundImage: `url(${imagePath("20250126")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20250119");
          }}
          style={{
            backgroundImage: `url(${imagePath("20250119")})`,
          }}
        ></th>
        <th
          onClick={() => {
            this.confirmVideoClicked();
            this.setDate("20250112");
          }}
          style={{
            backgroundImage: `url(${imagePath("20250112")})`,
          }}
        ></th>
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
