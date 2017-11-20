import React, {Component} from 'react';
import {BarChart, Bar,Brush, ResponsiveContainer,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class HomepageLineChart extends Component {
     constructor(props) {
               super(props);
                this.state = {showLineChart: false, category:"", data:[]};
                this.handleOnclick=this.handleOnclick.bind(this);
              }
      handleOnclick(event){
               console.log(event);

                    this.setState({

                         category:event.name,

                        }, function(){
                      if(this.state.category != "") {
                            var category = this.state.category;
                            var lineChart_data = this.props.chartData.resultEachCategoryByHour.find(function (element, index){
                                  return element.name === category;
                                },category);
                           this.setState({showLineChart: true,data:lineChart_data.dataset});
                          }
                   });

                  }
      componentDidMount(){
                this.setState({data: this.props.chartData.resultLatestAndOverall});
              }
        render() {
                    // const data = this.props.chartData.resultLatestAndOverall;

                            var category = this.props.category;

                        var lineChart_data = this.props.chartData.resultEachCategoryByHour.find(function (element, index){
                          return element.name === category;
                        },category);

                        return (
                      <div>

                            <ResponsiveContainer width="100%" height={300}>

                              <LineChart data={lineChart_data.dataset} margin={{top:40, right: 48}} onClick={this.handleOnclick}>
                                <XAxis dataKey="hour"/>
                                <YAxis type="number" domain={[0, 5]} ticks={[0,1,2,3,4,5]}/>
                                <CartesianGrid strokeDasharray="3 3"/>
                               <Tooltip/>
                                <Legend />
                               <Brush dataKey='hour' height={30} stroke="#8884d8"/>
                                <Line name={this.props.category} type="monotone" dataKey="score" stroke="#82ca9d" />
                              </LineChart>
                            </ResponsiveContainer>

                          </div>

                    );
                }
    }

export default HomepageLineChart;