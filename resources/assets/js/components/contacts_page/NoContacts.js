import React, {Component} from 'react';
import ReactModal from 'react-modal';
import DisplayContacts from './DisplayContacts';
import PropTypes from 'prop-types';

class NoContacts extends Component {
  constructor(props){
    super(props);
    this.state ={
      renderContacts:true,
      newcontactID:"",
      role:"",
      getAvalableUsers:[],
      display:false,

    };


    this.getAvalableUsers=this.getAvalableUsers.bind(this);
    this.newContact = this.newContact.bind(this);

  }

  getAvalableUsers() {
    console.log('getContacts');
       var url ="/contacts/{1}";
       $.ajax({
           method: "GET",
           url: url,
       })
         .done(function( result ) {
           console.log(result);
              this.setState({
                 getAvalableUsers:result,
                 status:true
               });

          }.bind(this))

  }


componentWillMount(){
  console.log('willmoount');
  this.getAvalableUsers();
}

newContact(user){

  this.setState({
    renderContacts:false,
    newcontactID:user.id,

   });
}


    render() {
      var color={
        color:'white',
      };
      var titleColor={
        color:'black',
      };
        return (
            <div>

            {this.state.renderContacts ? (
            <div>
                <div className="card-header">
                  <h4 id="step1"className="card-title">Contacts</h4>
                  <h6 className="card-subtitle">You can add contacts by pressing add new contact button</h6>
                </div>

                <div className="card p-2">
                  <div className="text-center">
                  <img className="grayscale" src="./img/contacts.png" width="200" height="200"/>
                  <p className="grayscale"> You have no contacts. SinorLife is more interesting with family and friends</p>
                  <button className="btn bg-color-orange" data-toggle="modal" data-target="#add_project"> + Add New Contact Now</button>
                  </div>

                  <div id="add_project" className="modal fade" role="dialog">
                        <div className="modal-dialog">

                            <div className="modal-content">
                                <div className="modal-header login-header">
                                      <span className="title" style={color}>  Add new contact </span>
                                </div>
                                <div className="modal-body">
                                  <ul className="list-group" id="contact-list">

                                    {this.props.users.map(
                                      (user,id)=>

                                           <li onClick={this.newContact.bind(this, user)} className="list-group-item mb-1" data-dismiss="modal" style={color}>
                                               <div className="col-xs-12 col-sm-3">
                                               <img className="rounded-circle"
                                                             src={user.avatar}
                                                             width="40"
                                                             height="40"
                                                             />
                                               </div>
                                               <div className="col-xs-12 col-sm-9">
                                                   <span className="name">{user.name}</span><br/>
                                                   <span className="visible-xs"> <span className="text-muted">{user.email}</span><br/></span>
                                               </div>

                                           </li>

                                    )}
                                  </ul>

                              </div>}


                            </div>

                        </div>
                    </div>
              </div>
            </div> ) :(
                <div>
                <DisplayContacts contactID={this.state.newcontactID}/>
                </div>
              )}
                    </div>
                );
    }
}

export default NoContacts;
