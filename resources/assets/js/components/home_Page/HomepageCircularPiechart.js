import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';


class HomepageCircularPiechart extends Component {
    render() {
        return (
            <div>
                <CircularProgressbar percentage={this.props.percentage}/>
            </div>
        );
    }
}

export default HomepageCircularPiechart;
