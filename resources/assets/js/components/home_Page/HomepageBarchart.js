import React, {Component} from 'react';
import {BarChart, Bar,Brush, ResponsiveContainer,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class HomepageBarchart extends Component {
    constructor(props) {
        super(props);
        this.state = {showLineChart: false, category:"", data:[]};
        this.handleOnclick=this.handleOnclick.bind(this);
        this.dateFormat=this.handleOnclick.bind(this);
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
  dateFormat(value){
        console.log( new Date(value).getTime())
      }
    componentDidMount(){
        this.setState({data: this.props.chartData.resultLatestAndOverall});
    }
    render() {
        // const data = this.props.chartData.resultLatestAndOverall;

                var category = this.props.category;

               var barChart_data = this.props.chartData.resultEachCategoryByHour.find(function (element, index){
                      return element.name === category;
                    },category);
        return (
            <div>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={barChart_data.dataset} margin={{top:40, right: 48}}>
                        <XAxis dataKey="hour" />
                        <YAxis label="Score" type="number" domain={[0, 5]} ticks={[0,1,2,3,4,5]}  />
                        <CartesianGrid strokeDasharray="5 5"/>
                        <Tooltip/>
                        <Legend />
                        <Brush dataKey='hour' height={30} stroke="#8884d8"/>
                        <Bar name={this.props.category}  dataKey="score" unit="" label fill="#FF9800" onClick={this.handleOnclick} maxBarSize={16}/>
                    </BarChart>
                </ResponsiveContainer>
            </div>

        );
    }
}

export default HomepageBarchart;
