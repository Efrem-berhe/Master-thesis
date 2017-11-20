import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Circular_scale_1 from './Circular_scale_1';
import Question from './Question';
import Slider_scale from './Slider_scale';
import HomePageRadioButton from './HomepageRadioButton';
import ProgressBar from './ProgressBar';
import PlayerStatus from '../components/PlayerStatus';

import {ModalContainer, ModalDialog} from 'react-modal-dialog';
class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      currentQuestion: null,
      answer:null,
      question_id:null,
      isShowingModal: false,
      playerStatus:null,
      answered: null,
      survey_id:0,
      loaded: false,
    };
    this.handleNextButton= this.handleNextButton.bind(this);
    this.handlePrevButton= this.handlePrevButton.bind(this);

    this.handleAnswer= this.handleAnswer.bind(this);
    this.sendAnswers=this.sendAnswers.bind(this);
    this.handleGoBackBtn = this.handleGoBackBtn.bind(this);
    this.changeChildstate = this.changeChildstate.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  //this contains the answers the user responded and will be send to server when all survey questions are finished
  answers = [];

  handleModalClick = () => this.setState({isShowingModal: true})
  handleModalClose () {
    this.setState({isShowingModal: false})
    this.props.handleOnclick("survey");
  }

  handlePrevButton() {
    this.setState({
      currentQuestion: this.state.currentQuestion-1,
    }, function () {
      for (var i = 0; i < this.answers.length; i++) {
        if (i == this.state.currentQuestion){
          // this.setState({answer:this.answers[i].c_id})
          this.changeChildstate(this.answers[i].index);
          return
        }
      }
    });
    this.changeChildstate(null);
  }


  changeChildstate(choice_index) {
    if(choice_index == 0){
      this.setState({answered: 0 });
    }
    if(choice_index == 1){
      this.setState({answered: 1 });
    }
    if(choice_index == 2){
      this.setState({answered: 2 });
    }
    if(choice_index == 3){
      this.setState({answered: 3 });
    }
    if(choice_index == 4){
      this.setState({answered: 4 });
    }
    if(choice_index == null){
      this.setState({answered: null });
    }
  }

  handleNextButton(){

    this.setState({
      currentQuestion: this.state.currentQuestion+1,
    }, function () {
      if(this.state.currentQuestion >= this.state.data.length-1){
        console.log("time to send answers")
      }
      console.log(this.state.currentQuestion)
      for (var i = 0; i < this.answers.length; i++) {
        if (i == this.state.currentQuestion){
          this.changeChildstate(this.answers[i].index);
          return
        }
      }

      this.answers.push({});
      this.changeChildstate(null);
    });

  }

  handleAnswer(choice_index, question_id){
    this.changeChildstate(choice_index);
    var answer = this.state.data[this.state.currentQuestion].choices[choice_index].id;
    for (var i = 0; i < this.answers.length; i++) {
      if (i == this.state.currentQuestion){
        this.answers.splice(i, 1, {c_id:answer, q_id: question_id, index:choice_index});
        console.log(this.answers);
        return
      }
    }
    this.answers.push({c_id:answer, q_id: question_id, index:choice_index});
    console.log(this.answers);
  }


  sendAnswers(){
      //remove the not answered questions from the list
    //   if(this.props.selectedCategoryId < 11 && this.props.selectedCategoryId > 1){
    //       var answers = this.answers.filter((each)=>
    //       (Object.values(each)!="" && each.index != 0)
    //       );
    //   }else{
    //       var answers = this.answers.filter((each)=>
    //         Object.values(each)!=""
    //       );
    //   }


    var answers = this.answers.filter((each)=>
            Object.values(each)!=""
          );

    console.log(answers);
    this.answers = answers;

    $.ajax({

      headers: {
       'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      },

      type: "POST",
      url: "/survey/store",
      dataType: 'json',
      data: {data: this.answers, survey_id: this.state.survey_id},
      success: function (response) {
        this.setState({playerStatus: response},function(){
          console.log(this.state.playerStatus);

          this.handleModalClick();
        });

      }.bind(this),
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus, errorThrown);
      }.bind(this),

    });

  }
  componentDidMount(){
    var url_prefix = "survey/create/";
    var url = url_prefix.concat(this.props.selectedCategory);   //get qustoins by category
    console.log(url);
    $.ajax({
      method: "GET",
      url: url,
      dataType:"json",
    })
    .done(function( result ) {
      console.log(result);
      this.setState({data:result.prepare_questions, currentQuestion:0, survey_id:result.survey_id}, function(){
        this.setState({loaded: true});
      });
    }.bind(this))
  }

  handleGoBackBtn(completeState) {

    this.props.handleOnclick("survey");
  }


  render(){
    if(!this.state.loaded)
      return (<h>loading</h>);

    const survey_question= this.state.data.map((each)=>
      <Question key={each.id}
         question={each.question}/>
    );
    var choices_for_q=null;
    if(this.props.selectedCategoryId ==1){
      choices_for_q= this.state.data.map((each)=>
      <Circular_scale_1 key={each.id} question_id={each.id} choices={each.choices} answered={this.state.answered} handleAnswer={this.handleAnswer}/>
      );
    }else if (this.props.selectedCategoryId <=5) {
      choices_for_q= this.state.data.map((each)=>
      <Slider_scale key={each.id} question_id={each.id} choices={each.choices} answered={this.state.answered} handleAnswer={this.handleAnswer}/>
      );
    }else {
      choices_for_q= this.state.data.map((each)=>
      <HomePageRadioButton key={each.id} question_id={each.id} choices={each.choices} answered={this.state.answered} handleAnswer={this.handleAnswer}/>
      );
    }
    console.log(survey_question.length);
    return(
      <div>

            <div className="row card">

                <div className="card-header">
                  <h4 id="step1"className="card-title">Survey</h4>
                  <h6 className="card-subtitle d-flex justify-content-start ">You are filling category {this.props.selectedCategory}
                  <div className="text-color ml-1">{this.state.currentQuestion}/{survey_question.length}</div>
                  </h6>
                </div>

                <div className="card-block pb-0 Card-Height vertical-align">
                    {survey_question[this.state.currentQuestion]}
                </div>

                <div className="card-block d-flex justify-content-between align-items-center Set-width">

                  <div style={{width:"81px"}}>
                    <button
                        className="btn btn-success btn-lg"
                        hidden={this.state.currentQuestion == 0? true:false}
                        onClick={this.handlePrevButton}>Prev</button>
                  </div>


                    {this.state.currentQuestion<this.state.data.length? (choices_for_q[this.state.currentQuestion])
                        : (
                            <div style={{width:"60%"}} className="text-center">
                              <p style={{fontSize: "18px"}}>Please submit your answer.</p>
                              <button className="btn btn-success btn-lg" onClick={this.sendAnswers}>
                                submit
                              </button>
                            </div>

                        )}

                  <div style={{width:"81px"}}>
                    <button
                        className="btn btn-success btn-lg"
                        hidden={this.state.currentQuestion == this.state.data.length? true:false}
                        onClick={this.handleNextButton}>Next</button>
                  </div>

                </div>

              <button  className="btn btn-success m-3" onClick={this.handleGoBackBtn}>Quit</button>

            </div>


        {
          this.state.isShowingModal &&
        <ModalContainer>
            <ModalContainer onClose={this.handleModalClose}>
                <ModalDialog onClose={this.handleModalClose}>
                  <div className="card-block" style={{width:"300px"}}>
                      <div className="d-flex justify-content-around align-items-center ">
                      <h3 className="">You earned:</h3>
                      <h3 className="">{this.answers.length} points</h3>
                      </div>
                  </div>
                </ModalDialog>
            </ModalContainer>
        </ModalContainer>
      }
      </div>
    );
  }
}

export default Survey;
