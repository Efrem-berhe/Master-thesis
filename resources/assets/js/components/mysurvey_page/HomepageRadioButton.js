import React, { Component } from 'react';
import PropTypes from 'prop-types';
class HomepageRadioButton extends Component {

  constructor(props) {
       super(props);
       this.state = {
        yourPick:''
       };
   }
  handleRadio(e) {
    this.props.handleAnswer(e.target.value, this.props.question_id);
  }

  render() {
    const choices= this.props.choices.map(
      (each,index)=>
        <label
           key={index}
            className={
              this.props.answered == index ?
                'radioPad-wrapper radioPad-wrapper-'+index :
                'radioPad-wrapper'
              }
            >
        <input

          type='radio'
          value={index}
          className='radioPad-radio'
          name = 'choices'
          onChange={this.handleRadio.bind(this)}
          />
        {each.choice}
        </label>
    );

    return (
      <div className="mx-auto">
        {choices}
      </div>
    )
  }
}

export default HomepageRadioButton;
