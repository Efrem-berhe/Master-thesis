import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'rc-progress/assets/index.css';
import { Line } from 'rc-progress';

class ProgressBar extends  Component {

    constructor(props) {
        super(props);
        this.state = {
            percent: '0',
            color: '#f39c12',
        };
    }

    render() {
        const lineStyle = {
            width: 250,
            height:15
        };

        return (
            <div>

                <Line percent={this.props.percent}  style={lineStyle} strokeWidth="5" strokeColor={this.state.color} />

            </div>

        );
    }
}

export default ProgressBar;