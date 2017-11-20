import React, { Component } from 'react'
import PropTypes from 'prop-types';
// import Slider from 'react-rangeslider'
import Slider from 'rc-slider/lib/Slider'

// const style = { width: 60% };
class Slider_scale extends Component {

    constructor (props, context) {
          super(props, context)
          this.state = {
              value: null,
              color: '#4dbf4d',
          }
          this.handleOnAfterChange=this.handleOnAfterChange.bind(this);
          // this.handleChangeComplete=this.handleChangeComplete.bind(this);
          this.handleOnChange=this.handleOnChange.bind(this);

      }
      handleOnChange(value){
          this.setState({value: value})
          console.log(this.state.value);
      }
      handleOnAfterChange (value) {
          if (this.state.value != null){
              value = this.state.value
          }
        var choice_index =null;
        if(value == 0) {
          choice_index = 0;
          // this.setState({color:'#B2DFDB'});
        }
        if(value == 25) {
          choice_index = 1;
          // this.setState({color:'#a6c34c'});
        }

        if(value == 50){
          choice_index = 2;
          // this.setState({color:'#ffc84a'});
        }

        if(value == 75){
          choice_index = 3;
          // this.setState({color:'#f48847'});
        }

        if(value == 100){
          choice_index = 4;
          // this.setState({color:'#eb4841'});
        }


        this.props.handleAnswer(choice_index, this.props.question_id);
      }

    // handleChangeComplete (e){
    //     console.log(e.target)
    // }


        render () {

            const choices= this.props.choices.map(
              (each)=>
                each.choice
            );
            var lable_style={
              bottom:-120,
              fontSize: 18,
              marginLeft:"-11%"
            }
            const horizontalLabels = {
              0: {
                style: lable_style,
                label: choices[0],
              },
              25: {
                style: lable_style,
                label: choices[1],
              },
              50: {
                style: lable_style,
                label: choices[2],
              },
              75: {
                style: lable_style,
                label: choices[3],
              },
              100: {
                style: lable_style,
                label: choices[4],
              },
            }

            var value=0
            var color='#B2DFDB'
            var handlecolor = '#B2DFDB'
            var handleOpacity = 0
            if(this.props.answered == 0){
                value= 0
                color='#4dbf4d'
                handlecolor='#2c3e50'
                handleOpacity =1
            }
            if(this.props.answered == 1){
                value= 25
                handlecolor='#2c3e50'
                handleOpacity =1
                color='#a6c34c'
            }
            if(this.props.answered == 2){
                value= 50
                handlecolor='#2c3e50'
                handleOpacity =1
                color='#ffc84a'
            }
            if(this.props.answered == 3){
                value= 75
                handlecolor='#2c3e50'
                color='#f48847'
                handleOpacity =1
            }
            if(this.props.answered == 4){
                value= 100
                handlecolor='#2c3e50'
                color='#eb4841'
                handleOpacity =1
            }
            return (

              <div className="likert-scale">
                <Slider
                  dots
                  step={25}
                  value={value}
                  dotStyle={{
                    width: 60,
                    height: 60,
                    bottom: -66,
                    marginLeft:-29,
                  }}
                  marks={horizontalLabels}
                  handleStyle={{
                    borderColor: handlecolor,
                    height: 70,
                    width: 70,
                    marginLeft: -34,
                    marginTop: 5,
                    backgroundColor: color,
                    opacity:handleOpacity,
                    borderWidth:3,
                  }}
                  railStyle={{
                    backgroundColor: color,
                    right:-47,
                    height: 80,
                    width:"116%",
                    borderRadius: 40,
                   }}

                  onChange={this.handleOnChange}
                  onAfterChange={this.handleOnAfterChange}
                  included={false}
                  />
              </div>

            )
        }
}
export default Slider_scale;
/*
<div className='slider ' >
    <Slider
        min={0}
        max={100}
        labels={horizontalLabels}
        value={value}
        step={25}
        tooltip={false}
        onChange={this.handleChange}
        onChangeComplete={this.handleChangeComplete}
    />
</div>
*/
