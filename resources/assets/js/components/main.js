/**
 * Created by Avatar on 11/4/2017.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import ContactsPage from './contacts_page/ContactsPage';
import RankPage from './rank_page/RankPage';
import MySurvey  from './mysurvey_page/MySurvey';
import AchievementPage from './achievement_page/AchievementPage'; //update the progress bar in achievement_page
import ProfilePage from './profile_page/ProfilePage';
import ChallengesPage from './challenges_page/ChallengesPage';
import FooterComponent from './welcome_page/FooterComponent';
import RespondentPage from './respondents_page/RespondentPage';
import SupervisorPage from './Supervisor/SupervisorPage';
//import DetailsPage from './details_page/DetailsPage';

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

if (document.getElementById('contacts_page')) {
    ReactDOM.render(
        <ContactsPage/>,
        document.getElementById('contacts_page'));
}

if (document.getElementById('respondents_page')) {
    ReactDOM.render(
        <RespondentPage/>,
        document.getElementById('respondents_page'));
}

if (document.getElementById('supervisor_page')) {
    ReactDOM.render(
        <SupervisorPage/>,
        document.getElementById('supervisor_page'));
}

// if (document.getElementById('details_page')) {
//     ReactDOM.render(
//         <DetailsPage/>,
//         document.getElementById('details_page'));
// }
