import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import image from './image.png';
import reportWebVitals from './reportWebVitals';

function Header() {
    return <h1 class="title">First React Duty for Erika</h1>
    
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  increment() {
    this.setState({
      count: this.state.count + 1
    });
  };


render(){
    return(<div>
        <img src={image} alt="logo" onClick={(e) => this.increment(e)}/>
        <h1>Current Count: {this.state.count}</h1></div>
    )
  }
};
ReactDOM.render(
  <React.StrictMode>
      <Header/>
    <Counter/>
  </React.StrictMode>,document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
