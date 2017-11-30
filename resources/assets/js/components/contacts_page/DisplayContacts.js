import React, {Component} from 'react';
import ReactModal from 'react-modal';

import PropTypes from 'prop-types';

class DisplayContacts extends Component {

  constructor(props){
    super(props);
    this.state ={
      renderContacts:true,
      showModale:false,
      currentUser:"",
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

  }

  addSupervisor(userId){
    this.setState({
      role:"Supervisor",
      userid:userId
    });
  }

  addFamily(userId){

    this.setState({
      role:"Family",
      userid:userId,
      sendPost:true
    });

  //  this.send();


  }

  addFriend(userId){

  this.setState({
    role:"Friend",
    userid:userId
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

   send(){

   console.log(this.state.role);
   console.log(this.state.userid);

    $.ajax({

       headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
       },

       type: "POST",
       url: "/contacts",
       dataType: 'json',
       data: {user_id:this.state.userid , role:this.state.role},
       success: function (response) {
         console.log(response);

       }.bind(this),
       error: function(jqXHR, textStatus, errorThrown) {
         console.log(textStatus, errorThrown);
       }.bind(this),

     });

     this.handleCloseModal();
    }

  render() {

      return (

<div>

<div className="card mb-4">
    <div className="card-header">
      <h4 id="step1"className="card-title">Users</h4>
      <h6 className="card-subtitle">Select a user to add as your friend or family or supervisor </h6>
    </div>

    <div className="row">
    <div className="col-md-12">
    <div className="card-block pt-0">
    <div className="row justify-content-wrap">
      {this.props.users.map(
        (user,id)=>
        <div className="col-md-3  mt-3">
            <a className="card text-center">
                <div className="card-block p-2">
                    <img className="rounded-circle"
                        src={user.avatar}
                        width="100"
                        height="100"
                        />
                    <ul className="text-center mt-1 pl-0">
                        <h6>{user.name}</h6>
                        <h6>{user.email}</h6>
                        <button onClick={this.handleOpenModal.bind(this, user)} className="btn bg-color-orange">Invite user </button>
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

  <ReactModal

     isOpen={this.state.showModal}
     contentLabel="onRequestClose Example"
     onRequestClose={this.handleCloseModal}

     className="Modal"

     >

     <div className="modal-dialog  d-flex justify-content-center align-items-center h-100" role="document">
        <div className="modal-content modal-vh border-0">
            <div className="modal-header modal-bg-color">
                <h5 className="modal-title white-color">Add {this.state.currentUser} As Your </h5>

            </div>

            <button id="Supervisor" onClick={this.addSupervisor.bind(this, this.state.userid)} className="btn light-primary-color">
                Supervisor
            </button>
            <div className="dropdown-divider"></div>
            <button id="Family" onClick={this.addFamily.bind(this, this.state.userid)} className="btn light-primary-color">
                  Family
            </button>
            <div className="dropdown-divider"></div>
            <button id="Friend" onClick={this.addFriend.bind(this, this.state.userid)} className="btn light-primary-color">
                  Friend
            </button>

            <div className="modal-footer modal-bg-color">
              <button onClick={this.handleCloseModal} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" onClick={this.send} className="btn bg-color-orange">Send Invitation</button>
            </div>

      </div>

      </div>

  </ReactModal>

</div>
);
}

}

export default DisplayContacts;
