import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SurveyResult from './SurveyResult';
import NewSurvey from './NewSurvey';
import Survey from './Survey';


class MySurvey extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mysurveyData:[],
            renderSurveyPage: true,
            selectedCategory:null,
            loaded: false,
        };
        this.handleOnclick = this.handleOnclick.bind(this);
        this.getData = this.getData.bind(this);
    }
    handleOnclick(target) {
        console.log('in mysyrvey')
        console.log('target');
        console.log(target);
        if (target == 'survey'){
          this.setState({renderSurveyPage: true})
        }else {
          const selectedCategory = this.state.mysurveyData.categories.find((category)=>
            category.id==target
          );
          this.setState( function () {
            return { renderSurveyPage: false, selectedCategory: selectedCategory};
          });
        }
    }
    componentWillMount(){
        this.getData();
        console.log('in mysyrvey')


    }
    getData() {

        var url ="/survey/result";
        $.ajax({
            method: "GET",
            url: url,
            dataType: 'json',
        })
            .done(function( data ) {

                console.log(data)
                this.setState({mysurveyData:data});

            }.bind(this))

        var url1 ="/getMysurveyData";
        $.ajax({
            method: "GET",
            url: url1,
        })
            .done(function( result ) {

                console.log(result)
                this.setState({mysurveyFlag:result}, function () {
                    this.setState({loaded: true}, function () {
                        if(this.state.mysurveyFlag.flag==0){
                            startIntro('mysurvey')
                        }
                    });
                });

            }.bind(this))
    }

    render() {



      const renderSurveyPage = this.state.renderSurveyPage;


      if(!this.state.loaded)
        return (<h>loading</h>);

      return (
        <div>

          {renderSurveyPage ? (
                    <div>

                        <NewSurvey handleOnclick={this.handleOnclick} categories={this.state.mysurveyData.categories}/>
                    </div>
                    ) : (
                        <div>
                            <Survey
                              handleOnclick={this.handleOnclick}
                              selectedCategory={this.state.selectedCategory.name}
                              categoryDescription={this.state.selectedCategory.description}
                              selectedCategoryId={this.state.selectedCategory.id}
                            />
                        </div>
                    )}
            </div>
        );
    }


}

export default MySurvey;

// <SurveyResult data={this.state.mysurveyData.SurveyResult}/>
