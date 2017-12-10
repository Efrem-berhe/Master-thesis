import React, {Component} from 'react';
import PropTypes from 'prop-types';
class NoUsers extends Component {




    render() {


        return (
            <div>

            <div className="card-header">
              <h4 id="step1"className="card-title">No users</h4>
              <h6 className="card-subtitle">Currently there are no users to add as friend and family</h6>
            </div>

            <div className="card p-2">
              <div className="text-center">
              <img className="grayscale" src="./img/contacts.png" width="200" height="200"/>
              <p className="grayscale"> There are no users you can add currently</p>
              </div>
          </div>

          </div>
        );
    }
}

export default NoUsers;
