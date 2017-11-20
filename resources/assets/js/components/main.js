/**
 * Created by Avatar on 11/4/2017.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import RankPage from './rank_page/RankPage';
import MySurvey  from './mysurvey_page/MySurvey';
import AchievementPage from './achievement_page/AchievementPage'; //update the progress bar in achievement_page
import ProfilePage from './profile_page/ProfilePage';
import ChallengesPage from './challenges_page/ChallengesPage';
import FooterComponent from './welcome_page/FooterComponent';

/**
 * include home page
 */
import HomePage from './home_Page/HomePage';

if (document.getElementById('home_page')) {
    ReactDOM.render(
        <HomePage/>,
        document.getElementById('home_page'));
}

//
if (document.getElementById('mysurvey_page')) {
    ReactDOM.render(
        <MySurvey />,
        document.getElementById('mysurvey_page')
    );
}

if (document.getElementById('rank_page')) {
    ReactDOM.render(
        <RankPage />,
        document.getElementById('rank_page'));
}

//TO DO :update the progress bar in achievement_page
if (document.getElementById('achievement_page')) {
    ReactDOM.render(
        <AchievementPage/>,
        document.getElementById('achievement_page'));
}



if (document.getElementById('profile_page')) {
    ReactDOM.render(
        <ProfilePage/>,
        document.getElementById('profile_page'));
}

if (document.getElementById('challenges_page')) {
    ReactDOM.render(
        <ChallengesPage/>,
        document.getElementById('challenges_page'));
}


// if (document.getElementById('footer')) {
//     ReactDOM.render(
//         <FooterComponent/>,
//         document.getElementById('footer'));
// }