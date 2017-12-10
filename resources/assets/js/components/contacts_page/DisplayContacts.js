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
      sendPost:false,
      role:"",
      permission:"",

    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);


    this.getContact = this.getContact.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.supervisorChange = this.supervisorChange.bind(this);
    this.familyChange = this.familyChange.bind(this);
    this.friendChange = this.friendChange.bind(this);

    this.supervisorPermission = this.supervisorPermission.bind(this);
    this.familyPermission = this.familyPermission.bind(this);
    this.friendPermission = this.friendPermission.bind(this);

  }


  supervisorChange(){
    //console.log(event);
    var e = document.getElementById("select_role");
    var f = e.options[e.selectedIndex].value;
    this.setState({
      role: f,
    });
    }

    familyChange(){

      var e = document.getElementById("select_role");
      var f = e.options[e.selectedIndex].value;
      this.setState({
        role: f,
      });
    }

    friendChange(){
      var e = document.getElementById("select_role");
      var f = e.options[e.selectedIndex].value;
      this.setState({
        role: f,
      });
    }

    supervisorPermission(event){
      console.log(event);
        this.setState({
          permission: event.target.value,
        });
      }
      familyPermission(event){
        this.setState({
          permission: event.target.value,
        });
      }
      friendPermission(event){
        this.setState({
          permission: event.target.value,
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


   handleSubmit() {
     //console.log('handleSubmit');
     //console.log(event);
     $.ajax({

     headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
     },

     type: "POST",
     url: "/contacts",
     dataType: 'json',
     data: {
     role: this.state.role,
     user_id:this.state.newContactadd.id,
     permission: this.state.permission},
     success: function (response) {
       console.log('response from display');
       console.log(response);

     }.bind(this),
     error: function(jqXHR, textStatus, errorThrown) {
       console.log(textStatus, errorThrown);
     }.bind(this),

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

       this.setState({
          newContactadd:result,
          renderContact:true,
        });
      }.bind(this))
}


    componentWillMount(){
      console.log('willmoount');
      this.getContact();
    }

  render() {

console.log(this.state.role);
console.log(this.state.permission);
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

                      <form onSubmit={this.handleSubmit} className="form-horizontal">
                      <fieldset>
                        <legend>Add User Role</legend>
                          <div className="form-group">
                          <label className="control-label" htmlFor="rolename">User Role Name</label>

                          <select className="form-control" onClick={this.supervisorChange}  id="select_role">
                                <option value="supervisor">Supervisor</option>
                                <option value="family">Family</option>
                                <option value="friend">Friend</option>
                          </select>

                          </div>

                              <div className="form-group">
                              <label className=" control-label" htmlFor="permissions">Role Permissions</label>
                                <hr/>
                                <label className="custom-control custom-radio">
                                  <input onClick={this.supervisorPermission} value="supervisor" id="radio1" name="radio" type="radio" className="custom-control-input"/>
                                  <span className="custom-control-indicator"></span>
                                  <span className="custom-control-description">Allow user to view all data</span>
                                </label>
                                <hr/>
                                <label className="custom-control custom-radio">
                                  <input onClick={this.familyPermission} value="family" id="radio1" name="radio" type="radio" className="custom-control-input"/>
                                  <span className="custom-control-indicator"></span>
                                  <span className="custom-control-description">Allow user to view only my Survey result and Rank</span>
                                </label>
                                <hr/>
                                <label className="custom-control custom-radio">
                                  <input onClick={this.friendPermission} value="friend" id="radio1" name="radio" type="radio" className="custom-control-input"/>
                                  <span className="custom-control-indicator"></span>
                                  <span className="custom-control-description">Allow user to view only my Survey result and Badges</span>
                                </label>
                                <hr/>
                              </div>

                            <div className="form-group">
                            <label className="control-label" htmlFor="savebutton"></label>

                              <button type="submit"  className="btn btn-success" style={width}>Save</button>

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
