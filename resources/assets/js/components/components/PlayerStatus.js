import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'rc-progress/assets/index.css';
import { Line, Circle } from 'rc-progress';

class PlayerStatus extends  Component {

    constructor(props) {
        super(props);
        this.state = {
            percent: '0',
            color: '#f39c12',
        };
    }
    componentDidMount(){
      this.setState({percent: this.props.playerStatus.level_progress['processed_score']})
    }
    render() {
        console.log(this.props.playerStatus);
        return (
            <div>
              <div className="d-flex">
                <p className="m-0">Level {this.props.playerStatus.level}</p><small className="ml-auto">{this.props.playerStatus.level_progress['processed_score']}/{this.props.playerStatus.level_progress['max_score']}</small>

              </div>
                <Line percent={this.state.percent/this.props.playerStatus.level_progress['max_score'] * 100} strokeWidth="5" trailWidth="5" strokeColor={this.state.color} />
            </div>

        );
    }
}

export default PlayerStatus;


{/*<Progress completed={this.props.progress_points} className={"progressbar"}/>*/}
