import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DisplayContacts from './DisplayContacts';
class Contacts extends Component {

  constructor() {
      super();
      this.state = {
      contacts:[],
      render:false,
      status:false,
      showContact:true
    };

 this.getContacts=this.getContacts.bind(this);
 this.showContact = this.showContact.bind(this);

 console.log('constructor');
  }

showContact(){
     this.setState({
       showContact:false
     });
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

    render() {
      console.log(this.state.contacts);
      if(this.state.status){
        console.log(this.state.contacts.usersContacts);
        {this.state.contacts.usersContacts.map(
          (contact)=> <h4>1{this.state.contacts.usersContacts.name}</h4>
        )}
      }
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
                            <button onClick={this.showContact} className="btn bg-color-orange"> + Add New Contact Now</button>
                          </div>
                        </div>

                        <div className="row">
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
                                                <h6>{contact.email}</h6>
                                                <hr/>
                                                <button className="btn light-primary-color"><i className="fa fa-envelope p-2" aria-hidden="true"></i>Write message</button>
                                                <hr/>
                                                <button className="btn light-primary-color"><i className="fa fa-calendar p-2" aria-hidden="true"></i>Make Appointment</button>

                                            </ul>
                                        </div>
                                    </a>
                                </div>
                              )):''
                            }
                            </div>
                            </div>
                            </div>
                            </div>

                  </div>

              ) : (

                  <DisplayContacts users={this.props.users} />
                )
              }

            </div>
        );
    }
}

export default Contacts;
