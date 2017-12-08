import React, {Component} from 'react';
import RespondentRanking from './RespondentRanking.js';

class RespondentRank extends Component {
  constructor(props) {
      super(props);

      this.state = {
      };

  }

  render() {

    var userId = this.props.currentUser;
    var rankUsers = this.props.rankUsers.map(
      function (rank,index){
      return <RespondentRanking
        current_userId={userId}
        key={rank.id}
        ranking={index+1}
        user_avatar={rank.avatar}
        user_name={rank.name}
        user_id={rank.id}
        level={rank.level}
        points={rank.point} />
    });

    if (this.props.mode == 'short'){

       rankUsers = this.props.rankUsers.map(
        function (rank,index){
          if (index < 3 || rank.id == userId) {
            return <RankElement
              current_userId={userId}
              key={rank.id}
              ranking={index+1}
              user_avatar={rank.avatar}
              user_name={rank.name}
              user_id={rank.id}
              level={rank.level}
              points={rank.point} />
          }
        });
    }

    return (
      <div>

              {rankUsers}

      </div>
    );
  }




}


export default RespondentRank;
/*

*/
