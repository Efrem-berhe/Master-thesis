import React, {Component} from 'react';
import ReactModal from 'react-modal';

import PropTypes from 'prop-types';

class DisplayContacts extends Component {

  constructor(props){
    super(props);
    this.state ={
      renderContact:true,
      showModale:false,
      currentUser:"",
      newContactadd:[],
      userid:"",
      role:"",
      sendPost:false

    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

    this.addSupervisor = this.addSupervisor.bind(this);
    this.addFamily = this.addFamily.bind(this);
    this.addFriend = this.addFriend.bind(this);
    this.send = this.send.bind(this);
    this.getContact = this.getContact.bind(this);

  }

  addSupervisor(userId){
    this.setState({
      role:"supervisor",
      userid:userId,
      sendPost:true
    });
  }

  addFamily(userId){
    this.setState({
      role:"family",
      userid:userId,
      sendPost:true
    });

  //this.send();


  }

  addFriend(userId){
  this.setState({
    role:"friend",
    userid:userId,
    sendPost:true
  });

  }



    handleOpenModal (user) {

     this.setState({
       showModal: true,
       currentUser:user.name,
       userid:user.id
      });

   }

   handleCloseModal () {
     this.setState({
       showModal: false,
      });
   }

getContact(){

   var url_prefix = "/getnewContact/";
   var url = url_prefix.concat(this.props.contactID);

   var url =url;
   $.ajax({
       method: "GET",
       url: url,
   })
     .done(function( result ) {
       console.log(result);
       this.setState({
          newContactadd:result,
          renderContact:true,
        });
      }.bind(this))
}

   send(){

   //console.log(this.state.role);
   //console.log(this.state.userid);

    $.ajax({

       headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
       },

       type: "POST",
       url: "/contacts",
       dataType: 'json',
       data: {user_id:this.state.userid, role:this.state.role},
       success: function (response) {
         console.log(response);

       }.bind(this),
       error: function(jqXHR, textStatus, errorThrown) {
         console.log(textStatus, errorThrown);
       }.bind(this),

     });

     this.handleCloseModal();
    }

    componentWillMount(){
      console.log('willmoount');
      this.getContact();
    }

  render() {
console.log('contact');
//console.log(this.state.newContactadd.id);
var width = {
  width:'100%',
};

var black={
  color:'black',
};
      return (

<div>
          {this.state.renderContact ? (  <div>

              <div className="card ">
              <div className="card-header">
                  <h4 id="step1"className="card-title">New User</h4>
                  <h6 className="card-subtitle">You are adding a user</h6>
              </div>

              <div className="row">
                <div className="col-md-4 offset-1">
                  <div className="card-block">
                  <div className="card">
                    <img className="card-img-top" src={this.state.newContactadd.avatar} alt="Card image cap"/>
                    <div className="card-block text-center">
                      <h4 className="card-title" style={black}>{this.state.newContactadd.name}</h4>
                      <p className="card-text">{this.state.newContactadd.email}</p>
                    </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 ">
                  <div className="card-block">

                      <form className="form-horizontal">
                      <fieldset>
                      <legend>Add User Role</legend>
                      <div className="form-group">
                      <label className="control-label" htmlFor="rolename">User Role Name</label>

                      <select className="form-control" id="exampleSelect1">
                            <option>Supervisor</option>
                            <option>Friend</option>
                            <option>Family</option>
                      </select>
                      </div>

                      <div className="form-group">
                      <label className=" control-label" htmlFor="permissions">Role Permissions</label>
                        <hr/>
                        <label className="custom-control custom-radio">
                          <input id="radio1" name="radio" type="radio" className="custom-control-input"/>
                          <span className="custom-control-indicator"></span>
                          <span className="custom-control-description">Allow user to view all data</span>
                        </label>
                        <hr/>
                        <label className="custom-control custom-radio">
                          <input id="radio1" name="radio" type="radio" className="custom-control-input"/>
                          <span className="custom-control-indicator"></span>
                          <span className="custom-control-description">Allow user to view only my Survey result and Rank</span>
                        </label>
                        <hr/>
                        <label className="custom-control custom-radio">
                          <input id="radio1" name="radio" type="radio" className="custom-control-input"/>
                          <span className="custom-control-indicator"></span>
                          <span className="custom-control-description">Allow user to view only my Survey result and Badges</span>
                        </label>
                        <hr/>
                      </div>

                      <div className="form-group">
                      <label className="control-label" htmlFor="savebutton"></label>

                        <button id="savebutton" name="savebutton" className="btn btn-success" style={width}>Save</button>

                      </div>

                      </fieldset>
                      </form>
                      </div>
                      </div>
                      </div>
              </div>

            </div>):("")}



</div>
);
}

}

export default DisplayContacts;
