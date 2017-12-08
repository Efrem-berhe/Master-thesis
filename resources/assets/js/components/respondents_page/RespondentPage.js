import React, {Component} from 'react';

class RespondentPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            respondent:[],
            renderRespondent:false,
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
                   renderRespondent:true,

                 });

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
        return (

            <div>
            {this.state.renderRespondent ?
                (<div className="row m-auto">
                <div className="col-md-3"></div>
                  <div className="col-xs-12 col-sm-offset-3 col-sm-6">
                        <div className="panel panel-default">

                            <div className="panel-heading c-list">
                                <span className="title">Respondents</span>
                            </div>

                            <div className="input-group c-search">
                                <input type="text" className="form-control" id="contact-list-search"/>
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="button"><i className="fa fa-search" aria-hidden="true"></i></button>
                                </span>
                            </div>

                            {this.state.respondent.respondents.map(
                              (respondent)=>
                              <ul className="list-group m-1" id="contact-list">
                                  <li className="list-group-item">
                                      <div className="col-xs-12 col-sm-3">
                                          <img src={respondent.avatar} width={130} className="img-responsive img-circle" />
                                      </div>
                                      <div className="text-center col-xs-12 col-sm-9">
                                          <span className="name">{respondent.name}</span><br/>
                                          <span className="glyphicon glyphicon-map-marker text-muted c-info" data-toggle="tooltip" title="5842 Hillcrest Rd"></span>
                                          <span className="visible-xs"> <span className="text-muted">5842 Hillcrest Rd</span><br/></span>
                                          <span className="glyphicon glyphicon-earphone text-muted c-info" data-toggle="tooltip" title="(870) 288-4149"></span>
                                          <span className="visible-xs"> <span className="text-muted">(870) 288-4149</span><br/></span>
                                          <span className="fa fa-comments text-muted c-info" data-toggle="tooltip" title="scott.stevens@example.com"></span>
                                          <span className="visible-xs"> <span className="text-muted">{respondent.email}</span><br/></span>
                                      </div>
                                      <div className="clearfix"></div>
                                  </li>
                              </ul>
                            )}
                        </div>
                  </div>
                </div>) :("")}
            </div>
        );
    }
}

export default RespondentPage;
