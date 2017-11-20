import React, {Component} from 'react';

class ChallengesPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            challengesData:[],

        };
        this.handleOnclick = this.handleOnclick.bind(this);
        this.getData = this.getData.bind(this);
    }
    handleOnclick() {

    }
    componentWillMount(){
        this.getData();
        console.log('in challenges')


    }
    getData() {
        var url ="/getChallengesData";
        $.ajax({
            method: "GET",
            url: url,
        })
            .done(function( result ) {

                console.log(result)
                this.setState({challengesData:result});

            }.bind(this))
    }

    render() {

        if(this.state.challengesData.flag==0){
            startIntro('challenges');
        }

        return (
            <div>
                <div className="card">
                    <dvi className="row">
                        <div className="col-md-4 col-sm-3">
                            <div className="card-block text-center">
                                <img className="card-img-top img-fluid img-responsive" src="/img/avatars/children/child-women-avatar.png"
                                     alt="Card image cap"></img>
                                    <p className="card-text">Today's Challenge</p>
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-9">
                            <div className="card-block">
                                <h3 id="step8" className="card-title Lato-font">Fill in One survey from nutrition category</h3>
                                <div className=" ">
                                    <dl className="row Rail-way-font">
                                        <dt className="col-sm-5 col-lg-3">Time it takes:</dt>
                                        <dd className="col-sm-7 col-lg-9">3 minutes only </dd>

                                        <dt className="col-sm-5 col-lg-3">You will get:</dt>
                                        <dd className="col-sm-7 col-lg-9">10 points</dd>

                                        <div className="col-sm-5 col-lg-5">
                                            <button className="btn btn-success mt-2 mb-0">Start the Challenge</button>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </dvi>
                </div>
            </div>
        );
    }
}

export default ChallengesPage;
