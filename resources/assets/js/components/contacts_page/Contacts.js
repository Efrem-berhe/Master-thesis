import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DisplayContacts from './DisplayContacts';
import DetailsPage from '../details_page/DetailsPage';

class Contacts extends Component {

  constructor() {
      super();
      this.state = {
      contacts:[],
      users:[],
      render:false,
      status:false,
      showContact:true,
      renderModal:false,
      contactID:"",
      edituser:[],

    };

 this.getContacts=this.getContacts.bind(this);
 this.newContact = this.newContact.bind(this);
 this.editUser = this.editUser.bind(this);
 console.log('constructor');
  }

  getContacts() {
      console.log('getContacts');
         var url ="/contacts/{1}";
         $.ajax({
             method: "GET",
             url: url,
         })
           .done(function( result ) {
             console.log(result);
                this.setState({
                   contacts:result,
                   status:true
                 });

            }.bind(this))

    }


  componentWillMount(){
    console.log('willmoount');
    this.getContacts();

  }

newContact(user){

  this.setState({
    showContact: false,
    contactID:user.id,
   });
}

editUser(){
  console.log('returned to contacts page');
    this.setState({
      showContact: true,
    });
  }
    render() {

      console.log(this.state.contacts);
      // if(this.state.status){
      //   console.log('this.state.contacts.usersContacts');
      //   console.log(this.state.contacts.usersContacts);
      //   {this.state.contacts.usersContacts.map(
      //     (contact)=> <h4>1{this.state.contacts.usersContacts.name}</h4>
      //   )}
      // }
      //console.log('back to users page');
      console.log(this.props.users);

          var display = {
            display: 'none',
          };
          var margin = {
            margin: '20px',
          };

      var color={
        color:'white',
      };
      var titleColor={
        color:'black',
      };
      var width={
        width: '100%',
      };

      var padding={
        paddingRight:'inherit',
      };
        return (
            <div>
            {this.state.showContact ?
                            (

             <div className="card">
                    <div className="card-header">
                        <div className="d-flex justify-content-between">
                        <div>
                      <h4 id="step1"className="card-title">Contacts</h4>
                      <h6 className="card-subtitle">This are your contacts</h6>
                        </div>
                          <button onClick={this.getContacts} className="btn bg-color-orange" data-toggle="modal" data-target="#add_project"> + Add New Contact Now</button>
                        </div>
                    </div>

                    <div className="">
                    <div className="col-md-12">
                    <div className="card-block pt-0">
                    <div className="row justify-content-wrap">

                        {this.state.status ?
                          (this.state.contacts.usersContacts.map(
                            (contact)=>

                            <div className="col-md-3  mt-3">
                                <a className="card text-center">
                                    <div className="card-block p-2">
                                        <img className="rounded-circle"
                                            src={contact.avatar}
                                            width="100"
                                            height="100"
                                            />
                                        <ul className="text-center mt-1 pl-0">
                                            <h6>{contact.name}</h6>
                                            <h6>Role: {contact.role}</h6>
                                            <hr/>
                                            <button onClick={this.newContact.bind(this, contact)} className="btn light-primary-color"><i className="fa fa-cog" aria-hidden="true" style={padding}></i>Edit User</button>
                                        </ul>
                                    </div>
                                </a>


                                <div id="add_project" className="modal fade" role="dialog">
                                        <div className="modal-dialog">

                                        <div className="modal-content">
                                                <div className="modal-header login-header">
                                                      <span className="title" style={color}>Add new contact </span>
                                                </div>

                                                <div className="modal-body">
                                              <ul className="list-group" id="contact-list">

                                                   {this.state.contacts.searchContacts.map(
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
                                              </div>

                                            </div>

                                        </div>
                                  </div>
                                  </div>


                          )):("")
                        }
                        </div>
                        </div>
                        </div>
                        </div>

              </div> ) : (

                    <DisplayContacts deleteOnclick={this.editUser} contactID={this.state.contactID} />

                )
              }

          </div>
        );
    }
}

export default Contacts;

//  <div className="card">
  //       <div className="card-header">
  //           <div className="d-flex justify-content-between">
  //           <div>
  //         <h4 id="step1"className="card-title">Contacts</h4>
  //         <h6 className="card-subtitle">This are your contacts</h6>
  //           </div>
  //             // <button onClick={this.getContacts} className="btn bg-color-orange" data-toggle="modal" data-target="#add_project"> + Add New Contact Now</button>
  //           </div>
  //       </div>
  //
  //       <div className="">
  //       <div className="col-md-12">
  //       <div className="card-block pt-0">
  //       <div className="row justify-content-wrap">
  //
  //           {this.state.status ?
  //             (this.state.contacts.usersContacts.map(
  //               (contact)=>
  //
  //               <div className="col-md-3  mt-3">
  //                   <a className="card text-center">
  //                       <div className="card-block p-2">
  //                           <img className="rounded-circle"
  //                               src={contact.avatar}
  //                               width="100"
  //                               height="100"
  //                               />
  //                           <ul className="text-center mt-1 pl-0">
  //                               <h6>{contact.name}</h6>
  //                               <h6>Role: {contact.role}</h6>
  //                               <hr/>
  //                               <button className="btn light-primary-color"><i className="fa fa-cog" aria-hidden="true" style={padding}></i>Edit User</button>
  //                           </ul>
  //                       </div>
  //                   </a>
  //
  //
  //                   <div id="add_project" className="modal fade" role="dialog">
  //                           <div className="modal-dialog">
  //
  //                             <div className="modal-content">
  //                                 <div className="modal-header login-header">
  //                                 <div className="row">
  //                                   <div className="input-group c-search">
  //                                       <input type="text" className="form-control" id="contact-list-search"/>
  //                                       <span className="input-group-btn">
  //                                           <button className="btn btn-default" type="button"><i className="fa fa-search" aria-hidden="true"></i></button>
  //                                       </span>
  //                                   </div>
  //                                 </div>
  //                                 </div>
  //
  //                                 <div className="modal-body">
  //                                 <ul className="list-group" id="contact-list">
  //
  //                                   {this.state.contacts.searchContacts.map(
  //                                     (user,id)=>
  //
  //                                          <li onClick={this.newContact.bind(this, user)} className="list-group-item mb-1" data-dismiss="modal" style={color}>
  //                                              <div className="col-xs-12 col-sm-3">
  //                                              <img className="rounded-circle"
  //                                                            src={user.avatar}
  //                                                            width="40"
  //                                                            height="40"
  //                                                            />
  //                                              </div>
  //                                              <div className="col-xs-12 col-sm-9">
  //                                                  <span className="name">{user.name}</span><br/>
  //                                                  <span className="visible-xs"> <span className="text-muted">{user.email}</span><br/></span>
  //                                              </div>
  //
  //                                          </li>
  //
  //                                   )}
  //                                 </ul>
  //
  //                                 </div>
  //
  //                               </div>
  //
  //                           </div>
  //                     </div>
  //                     </div>
  //
  //
  //             )):''
  //           }
  //           </div>
  //           </div>
  //           </div>
  //           </div>
  //
  // </div>
// <button className="btn light-primary-color" style={width}><i className="fa fa-envelope p-2" aria-hidden="true"></i>Write message</button>
