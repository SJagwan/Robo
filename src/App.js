import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import {CardList} from './components/CardList/CardList.js';
import {Search} from './components/Search/Search';


class App extends Component {
  constructor(){
    super();
    this.state ={
      monsters:[],
      type:""

    };
  }
   
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({monsters:data}))
  }

   onInput=(e)=>{
    this.setState({type:e.target.value});
  }
  render(){
    const{type,monsters}=this.state;
    const filterstate=monsters.filter(monster =>
      (monster.name.toLowerCase().includes(type.toLowerCase())
      ))

  

    return (
      <div className="App">
        <h1>Robo</h1>
        <Search onInput={this.onInput}/>
        <CardList monsters={filterstate}/>
      </div>
    );

  }
 
}

export default App;
