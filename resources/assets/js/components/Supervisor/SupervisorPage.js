import React, {Component} from 'react';
import RespondentRank from './RespondentRank.js';
import RespondentAchievement from './RespondentAchievement';
import RespondentRadarChart from './RespondentRadarChart';

class SupervisorPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            respondent:[],
            renderRespondent:false,
            rankData:[],
        };

        this.getRespondents = this.getRespondents.bind(this);
    }


getRespondents() {
      console.log('getContacts');
         var url ="/contacts/{1}";
         $.ajax({
             method: "GET",
             url: url,
         })
           .done(function( result ) {
             console.log(result);
                this.setState({
                   respondent:result,

                 });

            }.bind(this))

          var url ="/getRankData";
          $.ajax({
              method: "GET",
              url: url,
          })
              .done(function( result ) {

                  console.log(result)
                  this.setState({rankData:result,
                   renderRespondent:true,});

              }.bind(this))

    }


      componentWillMount(){
        console.log('willmoount');
        this.getRespondents();
      }

    render() {
          var display = {
            display: 'none',
          };
          console.log('respondent');
          console.log(this.state.respondent);
          console.log('respondent');
          var width = {
            width: '40%',
          }
        return (

            <div>
            {this.state.renderRespondent ?
                ( <div>

                    {this.state.respondent.respondents.map(
                      (respondent)=>
                      <div className="Rail-way-font">
                        <div className="row mt-2 Rail-way-font">
                          <div className="col-md-12 col-xs-12">
                            <div className="card mb-5">

                                  <div className="card-header sales ">
                                    <h2>{respondent.name} Activities</h2>
                                     <div className="btn-group">
                                     <img src={respondent.avatar} width={80} height={80} className="img-responsive rounded-circle" />
                                     </div>
                                  </div>

                              <div className="row">
                                <div className="card col-md-5 ml-3 mt-3 mb-3">
                                  <div className="card-block text-center">
                                  <RespondentRadarChart respondentSurveyResult={respondent.id}/>
                                  <a  className="btn btn-success " href="/achievement">More badges</a>

                                  </div>

                                </div>

                                <div className="card col-md-2 mt-3 mb-3 ml-2 mr-2">
                                      <div className="card-block text-center">
                                      <RespondentAchievement respondentID={respondent.id}/>
                                      <a  className="btn btn-success btn-sm mt-2" href="/achievement">More badges</a>

                                      </div>
                                </div>

                                <div className="card col-md-4 mt-3 mb-3">
                                      <div className="card-block text-center">
                                              <RespondentRank
                                                  rankUsers = {this.state.rankData.rankUsers}
                                                  currentUser = {respondent.id}
                                                  />
                                              <a  className="btn btn-success mt-2" href="/achievement">More badges</a>

                                      </div>
                                </div>

                              </div>
                            </div>
                  
                          </div>
                        </div>
                      </div>
                    )}

                    </div>
                ) :("")}
            </div>
        );
    }
}

export default SupervisorPage;


// <div className="row card">
//       <div className="card-header sales ">
//         <h2>{respondent.name} Activities</h2>
//          <div className="btn-group">
//          <img src={respondent.avatar} width={80} height={80} className="img-responsive rounded-circle" />
//          </div>
//       </div>
//       <div className="col-md-4 col-lg-2  col-sm-4 col-6 m-3">
//         <button className="btn-lg card text-center">
//           <div className="card-block p-1">
//         <RespondentAchievement respondentID={respondent.id}/>
//         </div>
//         </button>
//         </div>
//         <RespondentRank
//             rankUsers = {this.state.rankData.rankUsers}
//             currentUser = {respondent.id}
//             />
//
//             <div className="card text-center">
//               <div className="card-block">
//                   <RespondentRadarChart respondentSurveyResult={respondent.id}/>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//               </div>
//             </div>
//       <div className="card-footer text-muted">
//         2 days ago
//       </div>
//     </div>
