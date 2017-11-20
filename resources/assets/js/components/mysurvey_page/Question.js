import React, { Component } from 'react';

import PropTypes from 'prop-types';
class Question extends Component {

    render(){



        return(
            <div>
              <p className="Text-font-size ">{this.props.question}</p>
            </div>
        );
    }
}

export default Question;
