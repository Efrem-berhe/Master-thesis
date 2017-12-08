<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/**
 * welcome page if user is gust
 */
Route::get('/', 'WelcomeController@index');

/**
 * home page after user is authenticated
 */

Auth::routes();

Route::resource('home', 'HomeController');
Route::get('home', 'HomeController@index')->name("Home");
Route::get('getResultByCatagory','HomeController@getResultByCatagory');
Route::get('getRadarChartData','HomeController@getRadarChartData');

//survey
Route::get('mysurvey','MySurveyController@getMysurvey')->name("Survey");
Route::get('getMysurveyData','MySurveyController@getMysurveyData');

//challenges
Route::get('challenges','ChallengesController@getChallenges')->name("Challenges");
Route::get('getChallengesData','ChallengesController@getChallengesData');

//rank
Route::get('rank','RankController@getRank')->name("Rank");
Route::get('getRankData','RankController@getRankData');
Route::get('getRankFlag','RankController@getRankFlag');

//achievement
Route::get('achievement','AchievementController@getAchievement')->name("Achievement");
Route::get('getAchievementData','AchievementController@getAchievementData');
Route::get('getAchievementData/{id}','AchievementController@show');
Route::post('/respondentData','AchievementController@respondentData');
Route::get('getAchievementFlag','AchievementController@getAchievementFlag');

Route::get('survey/create/{new}', 'SurveyController@create_survey')->name('new.survey');
Route::post('survey/store', 'SurveyController@store_survey')->name('store.survey');
Route::get('survey/result', 'SurveyController@survey_result');


Route::resource('profile', 'ProfileController');
Route::get('profile', 'ProfileController@index')->name("Profile");
Route::post('uploadFile','ProfileController@upload_avatar');

//Contacts
Route::get('/contacts', 'ContactsController@index')->name("Contacts");
Route::get('/contacts/{contact}','ContactsController@show');
Route::post('/contacts','ContactsController@store');
Route::get('/getnewContact/{id}','ContactsController@getnewContact');
//supervisor controller

Route::get('/supervisor','SupervisorController@index')->name("Supervisor");
Route::get('supervisor/users','SupervisorController@respondent')->name("Supervisor/Users");;
