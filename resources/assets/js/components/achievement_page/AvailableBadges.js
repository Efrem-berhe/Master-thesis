import React, {Component} from 'react';
import ProgressBar from '../mysurvey_page/ProgressBar';
class AvailableBadges extends Component {
    render() {
        return (

            <div>
                    <li className="list-group-item justify-content-between ">
                        <div className="col-md-4 col-sm-4">
                                <img className="card-img-top  img-responsive grayscale"
                                     src={this.props.img_src}
                                     alt="Card image cap" width={150} height={150}></img>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="card-block">

                                <h3><b>{this.props.title}</b></h3>
                                <h6>{this.props.description}</h6>

                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">


                            <small>{this.props.complete_rate}/{this.props.steps}</small>

                            <ProgressBar percent={(this.props.complete_rate/this.props.steps)*100} className={"progressbar"}/>

                        </div>
                    </li>
            </div>
        );
    }
}

export default AvailableBadges;
