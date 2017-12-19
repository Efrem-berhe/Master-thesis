import React, {Component} from 'react';
import UserContacts from '../Supervisor/UserContacts';
import RespondentRadarChart from '../Supervisor/RespondentRadarChart';
import DetailsPage from '../details_page/DetailsPage';

class RespondentPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            respondent:[],
            renderRespondent:false,
            respondentID:"",
            user:[],
            renderdetails:true,
        };

        this.getRespondents = this.getRespondents.bind(this);
        this.handleRespondent = this.handleRespondent.bind(this);
        this.renderDetails = this.renderDetails.bind(this);
    }
renderDetails(){
  this.setState({
    renderdetails:false,
  });

}
handleRespondent(respondent){
  console.log('respondent form respondent page to render details');
  console.log(respondent.id);
  this.setState({
    respondentID:respondent.id,
    user:respondent,
    renderRespondent:false,
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
                   renderRespondent:true,

                 });

            }.bind(this))

    }


      componentWillMount(){
        console.log('willmoount');
        this.getRespondents();
      }

    render() {
      var color={

        color:'white',
      }
          var display = {
            display: 'none',
          };
          var margin = {
            margin: '20px',
          };
          console.log('respondent checking details');
          console.log(this.state.user);
          console.log('respondent checking details ');
        return (

            <div>
            {this.state.renderRespondent ?
                (
                  <div className="card">
                         <div className="card-header">
                               <div id="custom-search-input">
                                    <div className="input-group col-md-12">
                                        <input type="text" className="form-control input-lg" placeholder="Search respondent name" id="contact-list-search"/>
                                        <span className="input-group-btn">
                                            <button className="btn btn-info btn-lg" type="button">
                                                <i className="fa fa-search" aria-hidden="true"></i>
                                            </button>
                                        </span>
                                    </div>
                                </div>
                         </div>

                         <div className="">
                         <div className="col-md-12">
                         <div className="card-block pt-0">
                         <div className="row justify-content-wrap" id="contact-list">

                         {this.state.respondent.respondents.map(
                            (respondent)=>

                            <div className="col-md-3 mt-3">
                               <a onClick={this.handleRespondent.bind(this,respondent)} className="card text-center">
                                    <div className="card-block p-2" id="inside">
                                        <img className="rounded-circle"
                                            src={respondent.avatar}
                                            width="100"
                                            height="100"
                                            />
                                        <ul className="text-center mt-1 pl-0">
                                            <h6>{respondent.name}</h6>
                                            <h6>{respondent.email}</h6>
                                        </ul>
                                    </div>
                                    </a>
                                 </div>
                             )}

                             </div>
                             </div>
                             </div>
                             </div>

                   </div>

                ) :(

                  <div className="Rail-way-font">
                    <div className="row mt-2 Rail-way-font">
                      <div className="col-md-12 col-xs-12">

                          {this.state.renderdetails ? (
                          <div className="card mb-5">
                            <div className="card-header sales ">
                                  <h2>{this.state.user.name} Status</h2>
                                 <div className="btn-group">
                                  <img src={this.state.user.avatar} width={60} height={60} className="img-responsive rounded-circle" />
                                 </div>
                            </div>
                            <div className="row">
                              <div className="col-md-5 ml-3 mt-3 mb-3">
                                  <table className="table table-bordered">
                                   <tbody className="mt-3">
                                         <UserContacts respondentID={this.state.respondentID} />
                                      </tbody>
                                  </table>
                              </div>
                              <div className="card col-md-6 ml-3 mt-3 mb-3">
                                <div className="card-block text-center">
                                <RespondentRadarChart respondentSurveyResult={this.state.respondentID}/>
                                  <button onClick={this.renderDetails} className="btn btn-success">Read More >></button>
                                </div>
                              </div>
                            </div>
                              </div>
                          ):(<DetailsPage respondentDetails = {this.state.user} />)}

                      </div>
                    </div>
                  </div>

                )}
            </div>
        );
    }
}

export default RespondentPage;

// <div className="row m-auto">
// <div className="col-md-3"></div>
//   <div className="col-xs-12 col-sm-offset-3 col-sm-6">
//         <div className="panel panel-default">
//
//                 <div className="panel-heading c-list">
//                    <ul className="pull-right c-controls">
//                    </ul>
//                 </div>
//
//                 <div className="input-group c-search" style={margin}>
//                     <input type="text" className="form-control" id="contact-list-search"/>
//                     <span className="input-group-btn">
//                         <button className="btn btn-default" type="button"><i className="fa fa-search" aria-hidden="true"></i></button>
//                     </span>
//                 </div>
//
//                 <ul className="list-group m-1" id="contact-list">
//                 {this.state.respondent.respondents.map(
//               (respondent)=>
//
//                   <li onClick={this.handleRespondent.bind(this,respondent)} className="list-group-item">
//                       <div className="col-xs-12 col-sm-3">
//                           <img src={respondent.avatar} width={130} className="img-responsive img-circle" />
//                       </div>
//                       <div className="text-center col-xs-12 col-sm-9">
//                           <span className="name">{respondent.name}</span><br/>
//                           <span className="glyphicon glyphicon-map-marker text-muted c-info" data-toggle="tooltip" title="5842 Hillcrest Rd"></span>
//                           <span className="visible-xs"> <span className="text-muted">(870) 288-4149</span><br/></span>
//                           <span className="fa fa-comments text-muted c-info" data-toggle="tooltip" title="scott.stevens@example.com"></span>
//                           <span clasrenderDetailssName="visible-xs"> <span className="text-muted">{respondent.email}</span><br/></span>
//                       </div>
//                       <div className="clearfix"></div>
//                   </li>
//
//             )}
// </ul>
// </div>
// </div>
// </div>
