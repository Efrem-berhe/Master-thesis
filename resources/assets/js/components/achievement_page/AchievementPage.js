import React, {Component} from 'react';
import CollectedBadges from './CollectedBadges';
import AvailableBadges from './AvailableBadges';

class AchievementPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            achievementData: [],
            loaded: false,
        };
        this.handleOnclick = this.handleOnclick.bind(this);
        this.getData = this.getData.bind(this);
    }

    handleOnclick() {

    }

    componentWillMount() {
        this.getData();
        console.log('in achievement')
    }

    getData() {
        var url = "/getAchievementData";
        $.ajax({
            method: "GET",
            url: url,
        })
            .done(function (result) {

                console.log(result)
                this.setState({achievementData: result});

            }.bind(this))

        var url = "/getAchievementFlag";
        $.ajax({
            method: "GET",
            url: url,
        })
            .done(function (result) {

                console.log(result)
                this.setState({achievementFlag: result}, function () {
                    this.setState({loaded: true}, function () {
                        if (this.state.achievementFlag.flag == 0) {
                            startIntro('achievement').start();
                        }
                    });
                });

            }.bind(this))
    }


    render() {
        if (!this.state.loaded)
            return (<h>loading</h>);

        const collectedBadges = this.state.achievementData.badges.map(
            (badges) =>

                <CollectedBadges key={badges.id}
                                 img_src={badges.badge}
                                 description={badges.description}/>
        )

        const inProgressBadges = this.state.achievementData.inProgressBadges.map(
             (inProgressBadges) =>

                 <AvailableBadges key={inProgressBadges.id}
                                  img_src={inProgressBadges.badge}
                                  title={inProgressBadges.title}
                                  description={inProgressBadges.description}
                                  complete_rate={inProgressBadges.pivot.complete_rate}
                                  steps={inProgressBadges.steps}/>
         )
       const availableBadges = this.state.achievementData.availableBadges.map(
            (availableBadges) =>

                <AvailableBadges key={availableBadges.id}
                                 img_src={availableBadges.badge}
                                 title={availableBadges.title}
                                 description={availableBadges.description}
                                 complete_rate={0}
                                 steps={availableBadges.steps}/>
        )
console.log(availableBadges);
        return (

            <div>

                <div className="card mb-5">

                    <div className="card-header">
                        <h4 id="step1"className="card-title">Collected Badges</h4>
                        <h6 className="card-subtitle">You have collected this badges</h6>
                    </div>

                    <div className="card-block">
                        <div className="row  justify-content-around">
                          <div className="wrapper">
                            {collectedBadges}
                          </div>

                        </div>
                    </div>
                </div>


                <div className="card">

                    <div className="card-header">
                        <h4 id="step2"className="card-title">Future Badges</h4>
                        <h6 className="card-subtitle">You may also collecte this badges</h6>
                    </div>

                    <div className="card-block">
                        <div className="list-group list-group-flush">
                            {inProgressBadges}
                            {availableBadges}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default AchievementPage;
