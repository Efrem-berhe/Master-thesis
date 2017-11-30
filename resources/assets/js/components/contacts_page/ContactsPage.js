import React, {Component} from 'react';

import NoContacts from './NoContacts';
import Contacts from './Contacts';

class ContactsPage extends Component {

  constructor() {
      super();
      this.state = {
      users:[],
      render:false
    };

    this.getUsers=this.getUsers.bind(this);

 console.log('constructor');
  }
    getUsers() {
      console.log('getUsers');
         var url ="/contacts/{1}";
         $.ajax({
             method: "GET",
             url: url,
         })
           .done(function( result ) {

                this.setState({
                   users:result
                 });
              if(this.state.users.contacts.length == 0){
                this.setState({
                  render:true
                });
              }else{
                this.setState({
                  render:false
                });
              }
            }.bind(this))

    }


  componentWillMount(){
    console.log('willmoount');
    this.getUsers();
  }

  componentDidMount(){
    console.log('Didmoount');
  }

    render() {
      console.log('render');
      console.log(this.state.render);
        return (
            <div>
                {this.state.render ? <NoContacts users={this.state.users.users}/> : <Contacts users={this.state.users.users}/>}
            </div>
        );
    }
}

export default ContactsPage;
