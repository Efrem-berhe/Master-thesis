
import React, {Component} from 'react';

class CollectedBadges extends Component {
    render() {
        return (
            <div>

                <div className="card-block text-center">
                    <img className="card-img-top  img-responsive"
                         src={this.props.img_src}
                         alt="Card image cap" width={150} height={150}></img>
                </div>

            </div>
        );
    }
}

export default CollectedBadges;
