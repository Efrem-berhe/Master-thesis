import React, {Component} from 'react';
import {BarChart, Bar,Brush, ResponsiveContainer,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
class DetailsPage extends Component {

      constructor(props) {
          super(props);
          this.state = {
          users:[],
          respondentSurveyData:[],
          categoryQuestions:[],
          status:true,
          render:false,
          assessment:[],
          categoryQuestionID:"",
          rowdata:false,
        };

    this.getDetails=this.getDetails.bind(this);
    this.handleOnclick = this.handleOnclick.bind(this);

 // console.log('constructor');
  }

getDetails() {


              var url_prefix = "/home/";
              var url = url_prefix.concat(this.props.respondentDetails.id);
             //
             var url =url;
             $.ajax({
                 method: "GET",
                 url: url,
             })
               .done(function( result ) {
                 //console.log(result);

                  this.setState({
                    respondentSurveyData:result,
                   rendersurvey:true,
                  });
                }.bind(this))

        console.log('getDetail');
         var url ="/supervisor/{1}";
         $.ajax({
             method: "GET",
             url: url,
         })
           .done(function( result ) {
             console.log(result);
                //this.setState({
                   //users:result
                 //});

            }.bind(this))

    }


  componentWillMount(){
    console.log('willmoount');
    this.getDetails();
  }

  handleOnclick(event){
    console.log('event.value');
    console.log(event.value);

    var url_prefix = "/feachQuestions/";
    var url = url_prefix.concat(event.value);

    var url =url;
    $.ajax({
        method: "GET",
        url: url,
    })
      .done(function( result ) {
        console.log('feachQuestions');
        console.log(result);
         this.setState({
           categoryQuestions:result,
           rowdata:true,
         });
       }.bind(this))

  }

  // componentDidMount(){
  //   console.log('Didmoount');
  // }

    render() {

      console.log('respondent survey data from details >>>');
      console.log(this.state.categoryQuestions);
      //console.log(this.state.render);
      var category = "Fitness";
      if(this.state.rendersurvey){
        var barChart_data =this.state.respondentSurveyData.respondentSurvey.resultLatestAndOverall;

             }
             var display = {
               display: 'none',
             };
             var vertical = {
                   verticalAlign: 'inherit',
             };

             var width = {
               width: '40%',
             }
            var fontsize={
              fontSize:'smaller',
            };
             var color={
               backgroundColor:'#5583fc',
               color:'white',
             }

             var counter=1;
        return (
          <div>
            {this.state.rendersurvey ? (
              <div className="Rail-way-font">
                <div className="row mt-2 Rail-way-font">
                  <div className="col-md-12">

                        <div className="card-header sales ">
                              <h2>{this.props.respondentDetails.name} Status</h2>
                             <div className="btn-group">
                              <img src={this.props.respondentDetails.avatar} width={60} height={60} className="img-responsive rounded-circle" />
                             </div>
                        </div>
                        <div className="row col-md-10 m-auto ml-3 mt-3 mb-3">
                          <div className="card-block text-center">
                          <ResponsiveContainer width="100%" height={300}>

                              <BarChart data={barChart_data} margin={{top:40, right: 48}}>
                                  <XAxis dataKey="name" />
                                  <YAxis label="Score" type="number" domain={[0, 5]} ticks={[0,1,2,3,4,5]}  />
                                  <CartesianGrid strokeDasharray="5 5"/>
                                  <Tooltip/>
                                  <Legend />
                                <Bar dataKey="score_a" fill="#8884d8" onClick={this.handleOnclick}/>
                              </BarChart>

                          </ResponsiveContainer>
                          </div>

                        </div>
                        <div className="row card col-md-10 m-auto ml-3 mt-3 mb-3">
                              <div className="card-block ">
                                  {this.state.rowdata ? (

                                      <table class="table">
                                      <thead class="thead-inverse">
                                          <tr>
                                            <th>#</th>
                                            <th>Questions</th>

                                          </tr>
                                        </thead>
                                        <tbody>
                                      {this.state.categoryQuestions.map(
                                        (question)=>
                                            <tr>
                                              <th scope="row">{counter++}</th>
                                               <td style={fontsize}>{question.question}</td>
                                            </tr>
                                          )}
                                       </tbody>
                                       </table>):(<h4>Select a category to see the questions asked </h4>)}
                              </div>
                        </div>

                  </div>
                </div>
              </div>

            ):("")}


          </div>
        );
    }
}

export default DetailsPage;

// <ResponsiveContainer width="100%" height={300}>
// {this.state.respondentSurveyData.respondentSurvey.resultEachCategoryByHour.map(
//   (barChart_data)=>
//   <BarChart data={barChart_data.dataset} margin={{top:40, right: 48}}>
//       <XAxis dataKey="hour" />
//       <YAxis label="Score" type="number" domain={[0, 5]} ticks={[0,1,2,3,4,5]}  />
//       <CartesianGrid strokeDasharray="5 5"/>
//       <Tooltip/>
//       <Legend />
//       <Brush dataKey='hour' height={30} stroke="#8884d8"/>
//       <Bar name={this.props.category}  dataKey="score" unit="" label fill="#FF9800" maxBarSize={16}/>
//   </BarChart>
// )}
// </ResponsiveContainer>

//

                        // <ResponsiveContainer width="100%" height={300}>
                        //     <BarChart data={this.state.respondentSurveyData.respondentSurvey.resultLatestAndOverall} margin={{top:40, right: 48}}>
                        //         <XAxis dataKey="hour" />
                        //         <YAxis label="Score" type="number" domain={[0, 5]} ticks={[0,1,2,3,4,5]}  />
                        //         <CartesianGrid strokeDasharray="5 5"/>
                        //         <Tooltip/>
                        //         <Legend />
                        //         <Brush dataKey='hour' height={30} stroke="#8884d8"/>
                        //     </BarChart>
                        // </ResponsiveContainer>


                // {this.state.status ?(<NoUsers />):(<div>
                // {this.state.render ? <NoContacts users={this.state.users.users}/> : <Contacts />}
                // </div>)}
