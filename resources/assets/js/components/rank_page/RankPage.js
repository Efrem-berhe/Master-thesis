import React, {Component} from 'react';
import RankElement from './RankElement.js';
import Ranking from './Ranking.js';

class RankPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rankData:[],
            loaded:false,
        };

        this.getData = this.getData.bind(this);
    }

    componentWillMount(){
        this.getData();
        console.log('in rank')
    }

    getData() {
        var url ="/getRankData";
        $.ajax({
            method: "GET",
            url: url,
        })
            .done(function( result ) {

                console.log(result)
                this.setState({rankData:result} , function () {
                    this.setState({loaded: true}, function () {
                        if(this.state.rankData.flag==0){
                            startIntro('rank')
                        }
                    });
                });

            }.bind(this))

        var url ="/getRankFlag";
        $.ajax({
            method: "GET",
            url: url,
        })
            .done(function( result ) {
                console.log(result)
                this.setState({rankFlag:result} , function () {
                    this.setState({loaded: true}, function () {
                        if(this.state.rankFlag.flag==0){
                            startIntro('rank')
                        }
                    });
                });

            }.bind(this))
    }

    render() {
        if(!this.state.loaded)
            return (<h>loading</h>);

        if(this.state.rankData.flag==0){
            startIntro('rank');
        }

        return (
            <div>


                <div className="card ">
                  <div className="card-header">
                      <h4 id="step1"className="card-title">Rank</h4>
                      <h6 className="card-subtitle">Ranking is based on total points collected</h6>
                  </div>
                    <Ranking
                      rankUsers = {this.state.rankData.rankUsers}
                      currentUser = {this.state.rankData.currentUser}
                      />
                    
                </div>

            </div>
        );
    }
}

export default RankPage;
