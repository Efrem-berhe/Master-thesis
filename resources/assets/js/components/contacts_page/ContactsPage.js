import React, {Component} from 'react';
import NoUsers from './NoUsers';

import NoContacts from './NoContacts';
import Contacts from './Contacts';

class ContactsPage extends Component {

  constructor() {
      super();
      this.state = {
      users:[],
      status:true,
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
             console.log(result);
                this.setState({
                   users:result
                 });
              if(!this.state.users.users.length == 0){
                this.setState({status:false,});
              }
              if(this.state.users.contacts.length == 0){
                this.setState({
                  render:true,
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

                {this.state.status ?(<NoUsers />):(<div>
                {this.state.render ? <NoContacts users={this.state.users.users}/> : <Contacts users={this.state.users.users}/>}
                </div>)}

            </div>
        );
    }
}

export default ContactsPage;
