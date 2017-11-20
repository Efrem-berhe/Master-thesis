import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Category extends Component {
    constructor(props) {
        super(props);

        this.handleOnclick = this.handleOnclick.bind(this);
    }
    handleOnclick() {
        this.props.handleOnclick(this.props.id)
        console.log('in category')

    }
    render() {
        return (
            <div className="col-md-3 col-lg-2  col-sm-4 col-6 mt-3">
                <button className="card text-center" onClick={this.handleOnclick} >
                    <div className="card-block p-1">
                        <img className="card-img-top"
                            src={this.props.img_src}
                            alt="Image Community life"
                            width="80"
                            height="80"
                            />
                        <p className="card-text category-fix-width">{this.props.name}</p>
                    </div>

                </button>
            </div>
        );
    }
}

class NewSurvey extends Component {
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    render () {
        //var url="/survey/new";
        var categorys = this.props.categories;
        //
        // [
        //   {id: 0, name: "Cognition", img_src:"/img/categorys/001-mind.svg"},
        //
        // ]


        var toReturns = categorys.map(category=>{
            return <Category key={category.id} id={category.id} name={this.capitalizeFirstLetter(category.name)} img_src = {category.img_src} handleOnclick={this.props.handleOnclick} />
        });
        return (
            <div className="row mt-2 Rail-way-font">
                <div className="col-md-12 col-xs-12">
                    <div className="card mb-4">

                        <div className="card-header">
                            <h4 id="step1"className="card-title">Survey</h4>
                            <h6 className="card-subtitle">You can select one category to start</h6>
                        </div>

                        <div className="row">

                            <div className="col-md-12">
                                <div className="card-block pt-0">
                                    <div className="row justify-content-wrap ">
                                        {toReturns}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default NewSurvey;
