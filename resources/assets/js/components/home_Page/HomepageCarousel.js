import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Slider  from 'react-slick';

class HomepageCarousel extends Component {

    render() {

        console.log(this.props.badges);
        var length = this.props.badges.inProgressBadges.length;
        var slide_to_display = [];

        if(length >=3 )
            slide_to_display = 3;
        else
            slide_to_display = length;


        const collectedBadges = this.props.badges.inProgressBadges.map(
            (inProgressBadge,index) =>
            <div className="" key={index}>
                <img className="m-auto grayscale" key={inProgressBadge.badge} src={inProgressBadge.badge}/>
                <p className="text-center pb-2 mb-0">{inProgressBadge.description}</p>
                <h6 className="text-center text-color">{inProgressBadge.steps - inProgressBadge.pivot.complete_rate} more to go</h6>
            </div>
        )
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: slide_to_display,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: slide_to_display,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: slide_to_display,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: slide_to_display,
                    slidesToScroll: 1
                }
            }]
        };
        return (
            <div>
                <div className='custumSlick'>
                <Slider {...settings}>
                    {collectedBadges}
                </Slider>
                </div>

            </div>
        );
    }
}

export default HomepageCarousel;
