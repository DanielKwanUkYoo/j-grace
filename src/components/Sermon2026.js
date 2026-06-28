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
                        this.setDate("20260201");
                    }}
                    style={{
                        backgroundImage: `url(${imagePath("20260201")})`,
                    }}
                ></th>
                <th
                    onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20260125");
                    }}
                    style={{
                        backgroundImage: `url(${imagePath("20260125")})`,
                    }}
                ></th>
                <th
                    onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20260118");
                    }}
                    style={{
                        backgroundImage: `url(${imagePath("20260118")})`,
                    }}
                ></th>
                <th
                    onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20260111");
                    }}
                    style={{
                        backgroundImage: `url(${imagePath("20260111")})`,
                    }}
                ></th>
                <th
                    onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20260104");
                    }}
                    style={{
                        backgroundImage: `url(${imagePath("20260104")})`,
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
