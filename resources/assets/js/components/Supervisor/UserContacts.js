import React, {Component} from 'react';
import RespondentRank from './RespondentRank.js';
import RespondentAchievement from './RespondentAchievement';

class UserContacts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            permission:[],
            supervisor:false,
            friend:false,
            family:false,
            renderRespondent:false,
            rankData:[],
        };

        this.getRespondents = this.getRespondents.bind(this);
    }


getRespondents() {
      console.log('getContacts');
         var url_prefix ="/contactPermission/";
        var url = url_prefix.concat(this.props.respondentID);
         $.ajax({
             method: "GET",
             url: url,
         })
           .done(function( result ) {
             console.log(result);
                this.setState({
                   permission:result,

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
      console.log('willmoount in usersContacts');
      this.getRespondents();
    }

    render() {
                var display = {
                  display: 'none',
                };
                var vertical = {
                      verticalAlign: 'inherit',
                };

                var width = {
                  width: '40%',
                }

                var color={
                  backgroundColor:'#5583fc',
                  color:'white',
                }
      console.log('renderRespondent if value');
        if(this.state.permission.permission == 1){
          console.log('supervisor');
          var user = <tbody className="mt-3">
              <tr className="text-center">
                 <th scope="row"  style={vertical}><i className="fa fa-trophy" aria-hidden="true"></i></th>
                 <td  style={vertical}>recent user rank
                 <button style={color} className="btn btn-sm">Read more >></button>
                 </td>
                 <td>
                     <RespondentRank
                       rankUsers = {this.state.rankData.rankUsers}
                       currentUser = {this.props.respondentID}
                     />
                 </td>
               </tr>
               <tr className="text-center">
                    <th scope="row" style={vertical}><i className="fa fa-certificate" aria-hidden="true"></i></th>
                    <td style={vertical}>recent receved badge
                    <button style={color} className="btn btn-sm">Read more >> </button>
                    </td>
                    <td>
                     <RespondentAchievement respondentID={this.props.respondentID}/>
                    </td>
                  </tr>

            </tbody>
        }else if (this.state.permission.permission == 2) {
          console.log('family');

          var user =  <tbody className="mt-3">
              <tr className="text-center">
                 <th scope="row"  style={vertical}><i className="fa fa-trophy" aria-hidden="true"></i></th>
                 <td  style={vertical}>recent user rank
                 <button style={color} className="btn btn-sm">Read more >></button>
                 </td>
                 <td>
                     <RespondentRank
                       rankUsers = {this.state.rankData.rankUsers}
                       currentUser = {this.props.respondentID}
                     />
                 </td>
               </tr>
             </tbody>
        }else if (this.state.permission.permission == 3){
          console.log('friend');
          var user = <tbody className="mt-3">
                  <tr className="text-center">
                    <th scope="row" style={vertical}><i className="fa fa-certificate" aria-hidden="true"></i></th>
                    <td style={vertical}>recent receved badge
                    <button style={color} className="btn btn-sm">Read more >></button>
                    </td>
                    <td>
                     <RespondentAchievement respondentID={this.props.respondentID}/>
                    </td>
                  </tr>
                </tbody>
        }
      console.log('permission');
      console.log(this.state.permission);
      console.log(this.state.supervisor);
      console.log(this.state.friend);

      console.log('permission');

        return (

            <div>
              {user}
            </div>
        );
    }
}

export default UserContacts;



                    //   {this.state.permission.permission == 1 ? (
                    //     <tbody className="mt-3">
                    //     <h5>supervisor</h5>
                    //
                    //     <tr className="text-center">
                    //        <th scope="row"  style={vertical}><i className="fa fa-trophy" aria-hidden="true"></i></th>
                    //        <td  style={vertical}>recent user rank
                    //        <button className="btn btn-sm btn-primary btn-success">Read More</button>
                    //        </td>
                    //        <td>
                    //            <RespondentRank
                    //              rankUsers = {this.state.rankData.rankUsers}
                    //              currentUser = {this.props.respondentID}
                    //            />
                    //        </td>
                    //      </tr>
                    //      <tr className="text-center">
                    //           <th scope="row" style={vertical}><i className="fa fa-certificate" aria-hidden="true"></i></th>
                    //           <td style={vertical}>recent receved badge
                    //           <button className="btn btn-sm btn-primary btn-success">Read More</button>
                    //           </td>
                    //           <td>
                    //            <RespondentAchievement respondentID={this.props.respondentID}/>
                    //           </td>
                    //         </tr>
                    //
                    //   </tbody>
                    // ):(
                    //     <div>
                    //   {this.state.permission.permission == 2  ? (
                    //
                    //   <tbody className="mt-3">
                    //   <h5>friend</h5>
                    //
                    //     <tr className="text-center">
                    //        <th scope="row"  style={vertical}><i className="fa fa-trophy" aria-hidden="true"></i></th>
                    //        <td  style={vertical}>recent user rank
                    //        <button className="btn btn-sm btn-primary btn-success">Read More</button>
                    //        </td>
                    //        <td>
                    //            <RespondentRank
                    //              rankUsers = {this.state.rankData.rankUsers}
                    //              currentUser = {this.props.respondentID}
                    //            />
                    //        </td>
                    //      </tr>
                    //    </tbody>):(
                    //
                    //       <tbody className="mt-3">
                    //       <h5>family</h5>
                    //
                    //         <tr className="text-center">
                    //           <th scope="row" style={vertical}><i className="fa fa-certificate" aria-hidden="true"></i></th>
                    //           <td style={vertical}>recent receved badge
                    //           <button className="btn btn-sm btn-primary btn-success">Read More</button>
                    //           </td>
                    //           <td>
                    //            <RespondentAchievement respondentID={this.props.respondentID}/>
                    //           </td>
                    //         </tr>
                    //       </tbody>)}
                    //
                    //   </div>
                    // )}
