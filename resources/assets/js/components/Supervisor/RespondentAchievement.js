import React, {Component} from 'react';

class RespondentAchievement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            respondentbadge:[],
            renderbadge:false,
        };

        this.getRespondentAchievement = this.getRespondentAchievement.bind(this);
    }

getRespondentAchievement() {

       var url_prefix = "/getAchievementData/";
       var url = url_prefix.concat(this.props.respondentID);

       var url =url;
       $.ajax({
           method: "GET",
           url: url,
       })
         .done(function( result ) {
           //console.log(result);
           this.setState({
              respondentbadge:result,
              renderbadge:true,

            });
          }.bind(this))

    }


      componentWillMount(){
        console.log('willmoount');
        this.getRespondentAchievement();
      }

    render() {

          console.log(this.state.respondentbadge);

        return (

            <div>
            {this.state.renderbadge ?
                (

                        <img className="card-img-top"
                            src={this.state.respondentbadge.badge}
                            alt="new badge"
                            width="80"
                            height="80"
                            />

                ) :("")}
            </div>
        );
    }
}

export default RespondentAchievement;
