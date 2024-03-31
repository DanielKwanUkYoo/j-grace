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
        const imagePath = (date) => `https://j-grace.s3-us-west-2.amazonaws.com/sermonImages/${date}.png`;

        return (
            <>
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
