import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Circular_scale_1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choice_index:null,
    };
    this.handleClick= this.handleClick.bind(this);
  }

  handleClick(event){


    const clicked_item= event.currentTarget.id;
    var choice_index="";
    if(clicked_item == "item-1"){
      choice_index = 0;
    }
    if(clicked_item == "item-2"){
      choice_index=1;
    }
    if(clicked_item == "item-3"){
      choice_index=2;
    }
    if(clicked_item == "item-4"){
      choice_index=3;
    }
    if(clicked_item == "item-5"){
      choice_index=4;
    }
    this.props.handleAnswer(choice_index, this.props.question_id);
  }
  render() {
    const choices= this.props.choices.map(
      (each)=>
        each.choice
    );
    var rotate_degree= "-180 350,323.01281127929693";
    if(this.props.answered == 0)
      rotate_degree = "-18 350,323.01281127929693" ;
    if(this.props.answered == 1)
      rotate_degree = "-54 350,323.01281127929693" ;
    if(this.props.answered == 2)
      rotate_degree = "-90 350,323.01281127929693" ;
    if(this.props.answered == 3)
      rotate_degree = "-126 350,323.01281127929693" ;
    if(this.props.answered == 4)
      rotate_degree = "-162 350,323.01281127929693" ;
    return (
      <div className="svg-container">

        <svg viewBox="-50 0 800 380 " preserveAspectRatio="xMinYMin meet"
          className="svg-content" id="menu" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <g>
            <title>Layer 1</title>
            <g id="symbolsContainer">
              <symbol viewBox="0 0 69 69" id="icon-1" className="icon icon-">
                <g>
                  <path d="M 32,0 C 14.355,0 0,14.355 0,32 0,49.645 14.355,64 32,64 49.645,64 64,49.645 64,32 64,14.355 49.645,0 32,0 Z m 0,60 C 16.561,60 4,47.439 4,32 4,16.561 16.561,4 32,4 47.439,4 60,16.561 60,32 60,47.439 47.439,60 32,60 Z" fill="#FFFFFF"/>
                  <circle cx="20.518" cy="21.361" r="4.3379998" fill="#FFFFFF"/>
                  <circle cx="43.48" cy="21.361" r="4.3379998" fill="#FFFFFF"/>
                  <path d="m 11.322196,46.713718 c 1.0472,0.334728 2.176785,-0.248221 2.511585,-1.299418 0.0371,-0.118357 4.06124,-10.373558 18.37296,-10.118299 14.21674,0.253565 17.58688,10.27959 17.72915,10.770205 0.30114,1.060539 1.41135,1.675435 2.46178,1.38012 1.06449,-0.298064 1.68528,-1.40217 1.38818,-2.464637 -0.0423,-0.148779 -4.25252,-13.377293 -21.50778,-13.685052 -17.25525,-0.307759 -22.207645,12.757336 -22.255295,12.90551 -0.3347796,1.050197 0.24624,2.175737 1.29942,2.511571 z" fill="#FFFFFF" />
                </g>
              </symbol>
              <symbol viewBox="0 0 69 69" id="icon-2" className="icon icon-">
                <g>
                  <path fill="#FFFFFF" d="M32,0C14.355,0,0,14.355,0,32s14.355,32,32,32s32-14.355,32-32S49.645,0,32,0z M32,60    C16.561,60,4,47.439,4,32S16.561,4,32,4s28,12.561,28,28S47.439,60,32,60z" />
                  <circle fill="#FFFFFF" r="4.338" cy="21.361" cx="20.518" />
                  <circle fill="#FFFFFF" r="4.338" cy="21.361" cx="43.48" />
                  <path fill="#FFFFFF" d="m 16.392743,38.181431 c 14.176532,-7.337793 24.456808,-4.167616 33.195305,0 0.888015,0.423517 1.775881,0.792043 1.775881,1.77588 0,0.983838 -0.916659,2.255124 -1.775881,1.775881 -11.98294,-6.683645 -24.281901,-5.356569 -33.195305,0 -0.843278,0.506774 -1.775881,-0.792043 -1.775881,-1.775881 0,-0.983837 0.902147,-1.323634 1.775881,-1.77588 z" />
                </g>
              </symbol>
              <symbol viewBox="0 0 69 69" id="icon-3" className="icon icon-">
                <g fill="#1D1D1B">
                  <path fill="#FFFFFF" d="M32,0C14.355,0,0,14.355,0,32s14.355,32,32,32s32-14.355,32-32S49.645,0,32,0z M32,60    C16.561,60,4,47.439,4,32S16.561,4,32,4s28,12.561,28,28S47.439,60,32,60z" />
                  <circle fill="#FFFFFF" r="4.338" cy="21.361" cx="20.518" />
                  <circle fill="#FFFFFF" r="4.338" cy="21.361" cx="43.48" />
                  <path d="m 16.392743,38.181431 33.195305,0 c 0.983838,0 1.775881,0.792043 1.775881,1.77588 0,0.983838 -0.792043,1.775881 -1.775881,1.775881 l -33.195305,0 c -0.983838,0 -1.775881,-0.792043 -1.775881,-1.775881 0,-0.983837 0.792043,-1.77588 1.775881,-1.77588 z" fill="#ffffff" />
                </g>
              </symbol>
              <symbol viewBox="0 0 69 69" id="icon-4" className="icon icon-">
                <g fill="#1D1D1B">
                  <path fill="#FFFFFF" d="M32,0C14.355,0,0,14.355,0,32s14.355,32,32,32s32-14.355,32-32S49.645,0,32,0z M32,60    C16.561,60,4,47.439,4,32S16.561,4,32,4s28,12.561,28,28S47.439,60,32,60z" />
                  <circle fill="#FFFFFF" r="4.338" cy="21.361" cx="20.518" />
                  <circle fill="#FFFFFF" r="4.338" cy="21.361" cx="43.48" />
                  <path d="m 16.392743,38.181431 c 11.46346,6.174561 22.459012,5.096542 33.195305,0 0.888781,-0.421906 1.775881,0.792043 1.775881,1.77588 0,0.983838 -0.849074,1.445782 -1.775881,1.775881 -10.628318,3.785461 -21.48295,5.609532 -33.195305,0 -0.887319,-0.424974 -1.775881,-0.792043 -1.775881,-1.775881 0,-0.983837 0.909701,-2.24243 1.775881,-1.77588 z" fill="#ffffff" />
                </g>
              </symbol>
              <symbol viewBox="0 0 69 69" id="icon-5" className="icon icon-">
                <g fill="#1D1D1B">
                  <path d="M32,0C14.355,0,0,14.355,0,32s14.355,32,32,32s32-14.355,32-32S49.645,0,32,0z M32,60    C16.561,60,4,47.439,4,32S16.561,4,32,4s28,12.561,28,28S47.439,60,32,60z" fill="#FFFFFF"/>
                  <circle cx="20.518" cy="21.361" r="5" fill="#FFFFFF"/>
                  <circle cx="43.48" cy="21.361" r="5" fill="#FFFFFF"/>
                  <path d="m52.541,36.568c-1.053-0.316-2.172,0.287-2.488,1.344-0.035,0.119-3.739,11.947-18.053,11.947-14.219,0-17.904-11.467-18.055-11.955-0.32-1.055-1.441-1.65-2.486-1.336-1.059,0.317-1.66,1.432-1.344,2.489 0.045,0.148 4.627,14.802 21.885,14.802s21.84-14.654 21.885-14.803c0.316-1.056-0.285-2.171-1.344-2.488z" fill="#FFFFFF"/>
                </g>
              </symbol>
            </g>
            <g id="itemsContainer">

              <a id="item-1" className="item" role="button" onClick={this.handleClick}>
                <text id="svg_2" fontSize="30px" textAnchor="start" y="250" x="76%"  fill="#222">{choices[0]}</text>
                <g>
                  <path id="svg_11" className="sector" d="m454.62421,323.170522l145,0a250,250 0 0 0 -47.74575,-146.94631l-117.30747,85.22886a105,105 0 0 1 20.05322,61.71745" stroke="#ecbd8e" fill="#eb4841"/>
                  <use id="svg_12" transform="rotate(72 539.8355712890624,261.3672790527344) " y="226.867131" x="505.335514" height="69" width="69" xlinkHref="#icon-1"/>
                </g>
              </a>

              <a  id="item-2" className="item" role="button" onClick={this.handleClick}>
                <text id="svg_4" fontSize="30px" textAnchor="start" y="115" x="65%" fill="#222">{choices[1]}</text>
                <g transform="matrix(0.80901,-0.58778,0.58778,0.80901,-99.20056166685515,194.69206447938143) ">
                  <path id="svg_13" className="sector" d="m392.589471,367.75486l145,0a250,250 0 0 0 -47.74575,-146.94631l-117.30747,85.22886a105,105 0 0 1 20.05322,61.71745" stroke="#ecbd8e" fill="#f48847"/>
                  <use id="svg_14" transform="rotate(72 477.80078125,305.9515686035156) " y="271.45147" x="443.300775" height="69" width="69" xlinkHref="#icon-2"/>
                </g>
              </a>

              <a  id="item-3" className="item" role="button" onClick={this.handleClick}>
                <text id="svg_6" fontSize="30px" textAnchor="middle" y="50" x="44%" fill="#222">{choices[2]}</text>
                <g transform="matrix(0.30901,-0.95105,0.95105,0.30901,-65.01837766752521,410.5098804800515) ">
                  <path id="svg_15" className="sector" d="m316.195403,367.359987l145,0a250,250 0 0 0 -47.74575,-146.94631l-117.30747,85.22886a105,105 0 0 1 20.05322,61.71745" stroke="#ecbd8e" fill="#ffc84a"/>
                  <use id="svg_16" transform="rotate(72 401.4067687988282,305.55664062500006) " y="271.056597" x="366.906707" height="69" width="69" xlinkHref="#icon-3"/>
                </g>
              </a>
              <a  id="item-4" className="item" role="button" onClick={this.handleClick}>
                <text id="svg_8" fontSize="30px" textAnchor="end" y="115" x="22%" fill="#222">{choices[3]}</text>
                <g transform="matrix(-0.30901,-0.95105,0.95105,-0.30901,89.49011951994842,565.0183776675252) ">
                  <path id="svg_17" className="sector" d="m254.624614,322.138391l145,0a250,250 0 0 0 -47.74575,-146.94631l-117.30747,85.22886a105,105 0 0 1 20.05322,61.71745" stroke="#ecbd8e" fill="#a6c34c"/>
                  <use id="svg_18" transform="rotate(72 339.83590698242193,260.3349914550781) " y="225.835001" x="305.335918" height="69" width="69" xlinkHref="#icon-4"/>
                </g>
              </a>
              <a  id="item-5" className="item" role="button" onClick={this.handleClick}>
                <text id="svg_10" fontSize="30px" textAnchor="end" y="250" x="11%" fill="#222">{choices[4]}</text>
                <g transform="matrix(-0.80901,-0.58778,0.58778,-0.80901,305.3079355206185,599.2005616668552) ">
                  <path id="svg_19" className="sector" d="m231.392693,249.361427l145,0a250,250 0 0 0 -47.74575,-146.94631l-117.30747,85.22886a105,105 0 0 1 20.05322,61.71745" stroke="#ecbd8e" fill="#4dbf4d"/>
                  <use id="svg_20" transform="rotate(72 316.6041259765625,187.55796813964844) " y="153.058037" x="282.103996" height="69" width="69"  xlinkHref="#icon-5"/>
                </g>
              </a>
            </g>
            <g transform={"rotate("+rotate_degree+")" } id="svg_27">
              <path
                stroke="#000" transform="rotate(1.1317607164382935 401.0000305175724,323.0167541503895) " d="m350.50002,322.744793c0.09386,-5.2407 -0.06006,-10.4884 0.77188,-15.71988c20.44239,1.72093 40.64368,4.53679 60.74161,7.06908c1.07894,-2.56973 0.57111,-4.70135 1.50855,-7.07724c12.91175,4.99953 25.70706,10.07025 37.97798,15.38244c-11.77275,6.02584 -25.27652,11.25888 -38.53361,16.61756c-0.42929,-2.49546 -0.85866,-4.9909 -1.28796,-7.48636c-19.539,2.41424 -40.20213,4.91033 -59.86745,7.11741c-1.33734,-5.09275 -1.29803,-10.63889 -1.311,-15.90301z"
                strokeWidth="1.5" fill="#d50000"/>
                <animateTransform attributeType="xml"
                      attributeName="transform"
                      type="rotate"
                      from="-180 350,323.01281127929693"
                      to={rotate_degree}
                      dur="1.5s"
                      repeatCount={1}/>

            </g>
          </g>
        </svg>
      </div>

    );
  }
}

export default Circular_scale_1;
