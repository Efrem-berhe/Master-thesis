import React, {Component} from 'react';
import ReactModal from 'react-modal';
import DisplayContacts from './DisplayContacts';
import PropTypes from 'prop-types';
class NoContacts extends Component {
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

    this.addContact = this.addContact.bind(this);

  }






  addContact(){
     this.setState({
       renderContacts:false
     });
  }


    render() {

        return (
            <div>

            { this.state.renderContacts ? (
            <div>
                <div className="card-header">
                  <h4 id="step1"className="card-title">Contacts</h4>
                  <h6 className="card-subtitle">All your contacts</h6>
                </div>

                <div className="card-block">
                  <div className="text-center">
                  <img className="grayscale" src="./img/contacts.png" width="200" height="200"/>
                  <p className="grayscale"> You have no contacts. SinorLife is more interesting with family and friends</p>
                   <button onClick={this.addContact} className="btn bg-color-orange"> + Add New Contact Now</button>
                  </div>
              </div>
            </div> ) :(

            <DisplayContacts users={this.props.users} />
        )
}
                    </div>
                );
    }
}

export default NoContacts;
