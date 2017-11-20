
import React, {Component} from 'react';

class FooterComponent extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid Rail-way-font">

                    {/*Example row of columns */}

                    <div className="row ">
                        <div className="col-md-4 m-0 p-0">
                            <div className="card my-flex-card">
                                <div className="card-header Bg-color"><h4>Survey</h4></div>
                                <div className="card-block">
                                    <h5 className="card-title">Where you fill the questionnaire</h5>
                                    <img className="card-img-top img-responsive pull-left" src="img/Survey.png" alt=""
                                         width="120" height="120" align="left"/>
                                    <p>In Survey part, you will find different categories and
                                        questions inside them. These questions are used to investigate
                                        your characteristics, behaviors, or opinions regarding different
                                        things. </p>
                                    <p><a className="btn btn-success" href="#" role="button">Read more &raquo;</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 m-0 p-0">
                            <div className="card my-flex-card">
                                <div className="card-header Bg-color"><h4>Gamification</h4></div>
                                <div className="card-block">
                                    <h5 className="card-title">points and badges</h5>
                                    <img className="card-img-top img-responsive pull-left" src="img/Empatica.png"
                                         width="120" height="120"
                                         align="left"/>
                                    <p>To make your self-assessment more interactive we have included some game elements.
                                        You can gate  badges as reward if you collected enough points and acomplish challenges.</p>
                                    <p><a className="btn btn-success" href="#" role="button">Read more &raquo;</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 m-0 p-0">
                            <div className="card my-flex-card">
                                <div className="card-header Bg-color"><h4>Avatar</h4></div>
                                <div className="card-block">
                                    <h5 className="card-title">use avatars for your profile</h5>
                                    <img className="card-img-top img-responsive pull-left" src="img/Share.png"
                                         width="120"
                                         height="120"
                                         align="left"/>
                                    <p className="card-text">By using avatars as your profile feel free on sharing with your friends, relatives and more.</p>
                                    <p><a className="btn btn-success" href="#" role="button">Read more &raquo;</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default FooterComponent;