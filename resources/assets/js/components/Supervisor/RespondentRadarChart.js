import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer} from 'recharts';

class RespondentRadarChart extends Component {

    constructor(props) {
    super(props);

    this.state = {
        respondentSurveyData:[],
        rendersurvey:false,
    };

    this.getrespondentSurveyResult = this.getrespondentSurveyResult.bind(this);

  }

  getrespondentSurveyResult() {

         var url_prefix = "/home/";
         var url = url_prefix.concat(this.props.respondentSurveyResult);

         var url =url;
         $.ajax({
             method: "GET",
             url: url,
         })
           .done(function( result ) {
             console.log(result);
             this.setState({
               respondentSurveyData:result,
               rendersurvey:true,
             });
            }.bind(this))

      }


  componentWillMount(){
    console.log('willmoount');
    this.getrespondentSurveyResult();
  }

    render() {
        var mytick = <p>one</p>
        console.log('respondentSurveyData');
        console.log(this.state.respondentSurveyData.respondentSurvey);
        return (
            <div>
            {this.state.rendersurvey ?
              (<ResponsiveContainer width="100%" height={300} innerRaduis={20}>
                <RadarChart data={this.state.respondentSurveyData.respondentSurvey.resultLatestAndOverall} innerRaduis={20}  margin={{top: 0, right: 48, bottom: 0}}   >
                  <Radar name="Latest survey result" dataKey="score_a" stroke="#FF9800" strokeWidth={3} fill="#FF9800" fillOpacity={0.6}/>
                  <Radar name="Average result" dataKey="score_b" stroke="#82ca9d" strokeWidth={3} fill="#82ca9d" fillOpacity={0.3} />
                  <PolarGrid />
                  <Legend  />
                  <PolarAngleAxis dataKey={'name'} tick={<CustomizedTick />}/>
                  <PolarRadiusAxis angle={54}  domain={[0, 5]} />
                </RadarChart>
              </ResponsiveContainer>) : ("")}
            </div>

        );
    }
}

export default RespondentRadarChart;


class CustomizedTick extends Component {

    render() {
        const {x, y, payload, textAnchor, textLength} = this.props;
        return (

            <g transform={`translate(${x},${y})`}>

              <defs>
                <filter x="0" y="0" width="1" height="1" id="solid">
                  <feFlood floodColor="#FF9800"/>
                  <feComposite in="SourceGraphic"/>
                </filter>
              </defs>

              <text filter="url(#solid)" fontFamily={"'Raleway', sans-serif "}
                    textAnchor={textAnchor}
                    fill="#212121">{payload.value}</text>
            </g>
        );
    }
}
