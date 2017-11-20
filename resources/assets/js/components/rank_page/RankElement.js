import React, {Component} from 'react';

class RankElement extends Component {

    render() {
        var rank_class= '';
        rank_class= "card rounded-0 border-top-0  border-right-0 border-left-0"
        var ranking;
        if(this.props.ranking == 1) {
            ranking = <img className=""
                 src="/img/first_place.png"
                 alt={'first_place'}
                 />
        } else if (this.props.ranking == 2){
            ranking = <img className=""
                 src="/img/second_place.png"
                 alt={'second_place'}
                 />
        } else if (this.props.ranking == 3){
            ranking = <img className=""
                 src="/img/third_place.png"
                 alt={'third_place'}
                 />
        } else {
            ranking=<p className="my-auto">{this.props.ranking}</p>
        }

        if (this.props.current_userId == this.props.user_id) {
           rank_class = "color-2 card rounded-0 border-right-0 border-left-0 border-top-0"
        }
        return (

            <div>


                <div className={rank_class}>
                    <div className="row">

                        <div className=" w-25  d-flex align-items-center">
                            <div className="card-block pt-3 resize-card d-flex align-items-center justify-content-center">
                                {ranking}
                            </div>
                        </div>


                        <div className=" w-25 ">
                            <div
                                className="card-block pt-3 resize-card d-flex align-items-center">

                                <img className="card-img-top rounded img-fluid img-responsive mr-3"
                                     src={this.props.user_avatar}
                                     alt={this.props.user_avatar}
                                     width={48} height={48}/>{this.props.user_name}

                            </div>

                        </div>

                        <div className=" w-50  d-flex align-items-center">

                            <div
                                className="card-block pt-3 resize-card d-flex align-items-center justify-content-center">
                                <div className="mb-0 row Rail-way-font w-50">
                                    <p className="mb-0">Total Points:</p>
                                    <p className=" ml-2 mb-0">{this.props.points}</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}

export default RankElement;
