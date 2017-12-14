import React, {Component} from 'react';
import RespondentRadarChart from './RespondentRadarChart';
import UserContacts from './UserContacts';
import DetailsPage from '../details_page/DetailsPage';

class SupervisorPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            respondent:[],
            renderRespondent:false,
            rankData:[],
            respondetDetails:[],
        };

        this.getRespondents = this.getRespondents.bind(this);
        this.renderDetails = this.renderDetails.bind(this);
    }

renderDetails(respondent){
  console.log('contact details page');
  console.log(respondent);
  this.setState({
      renderRespondent:false,
      respondetDetails:respondent,
  });

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
          var vertical = {
                verticalAlign: 'inherit',
          };
          console.log('respondent');
          console.log(this.state.respondent);
          console.log('respondent');
          var width = {
            width: '40%',
          };

          var color={
            backgroundColor:'#5583fc',
            color:'white',
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
                                      <h2>{respondent.name} Status</h2>
                                     <div className="btn-group">
                                      <img src={respondent.avatar} width={60} height={60} className="img-responsive rounded-circle" />
                                     </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-5 ml-3 mt-3 mb-3">
                                      <table className="table table-bordered">
                                       <tbody className="mt-3">
                                          <UserContacts respondentID={respondent.id} />
                                          </tbody>
                                      </table>
                                  </div>

                                  <div className="card col-md-6 ml-3 mt-3 mb-3">
                                    <div className="card-block text-center">
                                    <RespondentRadarChart respondentSurveyResult={respondent.id}/>
                                    <a style={color} onClick={this.renderDetails.bind(this,respondent)} className="btn">Read More >></a>

                                    </div>
                                  </div>

                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                </div>
              ) :(<DetailsPage respondentDetails = {this.state.respondetDetails} />)}
            </div>
        );
    }
}

export default SupervisorPage;
