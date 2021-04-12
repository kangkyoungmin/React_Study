import React,{Component} from 'react';

class Subject extends Component{
    render(){
      return(
        <header>
          <h1>{this.props.title}</h1>
          {this.props.sub}
          world wide web!
        </header>
      )
    }
  }

  export default Subject;