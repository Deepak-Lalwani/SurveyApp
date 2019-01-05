import React, { Component } from 'react';
import $ from 'jquery'

class Survey extends Component {
  constructor(props){
    super(props);
    
    this.state= {
      name : "",
      answers : {
        answer1 : "",
        answer2 : "",
        answer3 : ""
      },
      isSubmitted : false
    }
    
    this.nameSubmitted = this.nameSubmitted.bind(this);
    this.answered = this.answered.bind(this);
    this.submitted = this.submitted.bind(this);
  }
  
  nameSubmitted(event){
    var name = this.refs.name.value;
    this.setState({name : name})
    
  }
  
  answered(event){
    var answers = this.state.answers;
    if(event.target.name==='answer1'){
      answers.answer1 = event.target.value;
      document.getElementById('label1').style.textDecoration = "line-through";
      
      $('.card1').css("pointerEvents", "none");
      $('.card1').fadeTo("1000", "0.4");

      $('#reload1').css('display','block');
      $('#reload1').css('pointerEvents','auto');
      
    }else if(event.target.name==='answer2'){

      answers.answer2 = event.target.value;
      document.getElementById('label2').style.textDecoration = "line-through";
      
      $('.card2').css("pointerEvents", "none");
      $('.card2').fadeTo("1000", "0.4");

      $('#reload2').css('display','block');
      $('#reload2').css('pointerEvents','auto');

    }else if(event.target.name==='answer3'){
      
      answers.answer3 = event.target.value;

      document.getElementById('label3').style.textDecoration = "line-through";
      
      $('.card3').css("pointerEvents", "none");
      $('.card3').fadeTo("1000", "0.4");

      $('#reload3').css('display','block');
      $('#reload3').css('pointerEvents','auto');
    }
    
    $('.reload').css('opacity','1');
    this.setState({answers : answers});    
  }
  
  submitted(){
    this.setState({isSubmitted : true});
  }

  reload(cardNo, labelNo, reloadNo, answer){

    $("input:radio[name="+answer+"]").prop('checked',false);

    var answers = this.state.answers;

    if(answer === 'answer1'){
      answers.answer1 = "";  
    } else if(answer === 'answer2'){
      answers.answer2 = "";  
    } else if(answer === 'answer3'){
      answers.answer3 = "";  
    }
    
    this.setState({answers : answers});
    console.log(this.state)
    
    $('.'+cardNo).css('pointerEvents','auto');
    $('.'+cardNo).fadeTo("1000", "1");

    $('#'+labelNo).css('textDecoration', 'none');

    $('#'+reloadNo).css('display', 'none');
  }
  
  render(){
    var studentName;
    var questions;
    
    if(this.state.name === ""){
      studentName = 
        <div>
          <form onSubmit={this.nameSubmitted}>
            <div><input type="text" ref="name" placeholder="Enter your name"/></div>
          </form>
        </div>
    
    } else if(this.state.name != "" && this.state.isSubmitted === false){
      
      studentName = 
        <div>
          <h1>Hello {this.state.name}, welcome to Survey!!!!</h1>
        </div>
      
      questions = 
        
        <div>
          <form onSubmit={this.submitted}>
            
            <div className ="card card1">
              <label id='label1'><p onClick={this.reload.bind(this, 'card1', 'label1', 'reload1', 'answer1')} className="reload" id="reload1">&#x21bb;</p>What is your fvr8 color</label><br/><br/>
              <input type="radio" name="answer1" value="red" onChange={this.answered}/>Red&nbsp;&nbsp;
              <input type="radio" name="answer1" value="blue" onChange={this.answered}/>Blue&nbsp;&nbsp;
              <input type="radio" name="answer1" value="Orange" onChange={this.answered}/>Orange&nbsp;&nbsp;
            </div>
            
            <div class ="card card2">
              <label id='label2'><p onClick={this.reload.bind(this, 'card2', 'label2', 'reload2', 'answer2')} className="reload" id="reload2">&#x21bb;</p>What is your fvr8 car</label><br/><br/>
              <input type="radio" name="answer2" value="Audi" onChange={this.answered}/>Audi&nbsp;&nbsp;
              <input type="radio" name="answer2" value="Mercedes" onChange={this.answered}/>Mercedes&nbsp;&nbsp;
              <input type="radio" name="answer2" value="Ferari" onChange={this.answered}/>Ferari&nbsp;&nbsp;
            </div>
            
            <div class ="card card3">
              <label id='label3'><p onClick={this.reload.bind(this, 'card3', 'label3', 'reload3', 'answer3')} className="reload" id="reload3">&#x21bb;</p>What is your fvr8 sports</label><br/><br/>
              <input type="radio" name="answer3" value="Cricket" onChange={this.answered}/>Cricket&nbsp;&nbsp;
              <input type="radio" name="answer3" value="Football" onChange={this.answered}/>Football&nbsp;&nbsp;
              <input type="radio" name="answer3" value="Baseball" onChange={this.answered}/>Baseball&nbsp;&nbsp;
            </div>
            
            <input type="submit" value="Submit"></input>
          
          </form>
        
        </div>
    
    }else if(this.state.isSubmitted=== true){
      
      studentName = 
        
        <div>
          <h2>Thank you {this.state.name} for your valuable feedback. Please find your response below : </h2>
          
          <div className="card">
            <label id='label1'>What is your fvr8 color</label><br/>
            <p>&#10004;  {this.state.answers.answer1}</p>
          </div>
          
          <div className="card">
            <label id='label2'>What is your fvr8 car</label><br/>
            <p>&#10004;  {this.state.answers.answer2}</p>
          </div>
          
          <div className="card"> 
            <label id='label3'>What is your fvr8 sports</label><br/>
            <p>&#10004;  {this.state.answers.answer3}</p>
          </div>
        
        </div>
        
        questions = <div></div>
    }
    return(
      
      <div>
      
        {studentName}
        {questions}
      
      </div>);
  }
}

export default Survey;