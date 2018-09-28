import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const channelThumbnailStyle = {
    margin: "20px auto",
    display: "grid",
    gridTemplateColumns: "286px auto",
    gridTemplateRows: "152px"
}

const imageStyle = {
    width: "136px",
    borderRadius: "50%",
    marginTop: "16px",
    marginRight: "15px"
}

const imageContainerStyle = {
    width: "100%",
    textAlign: "center"
}

const infoStyle = {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column"
}

const channelTitleStyle = {
    fontSize: "1.1rem",
    fontWeight: "400",
    lineHeight: "2.4rem"
}

const channelInfoStyle = {
    fontSize: "0.8rem",
    margin: "0"
}

const channelDescriptionStyle = {
    color: "hsla(0, 0%, 7%, 0.6)",
    fontSize: "0.8rem"
}

const ChannelThumbnail = (props) => {
    return (
        <div style={channelThumbnailStyle}>
            <span style={imageContainerStyle}>
                <img style={imageStyle} src={props.image} />
            </span>
            <div style={infoStyle}>
                <span style={channelTitleStyle}>{props.channelTitle}</span>
                <p style={channelInfoStyle}>123,123 subscribers · 49 videos</p> 
                <p style={channelDescriptionStyle}>{props.channelDescription}</p>
            </div>
        </div>
    );
}

ChannelThumbnail.propTypes = {
    channelTitle: PropTypes.string,
    channelDescription: PropTypes.string,
    channelId: PropTypes.string,
    image: PropTypes.string
};

export default connect()(ChannelThumbnail);
