import React,{Component} from 'react';
import { CardList } from './component/card-list/card-list.component';
import './App.css';
import { SearchBox } from './component/Search-box/Search-box.component';
class App extends Component{
  constructor(){
    super();
    this.state={
     monsters:[],
     searchField:''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(users=>this.setState({monsters:users}))
  }
  render(){
    const{monsters,searchField}=this.state;
    const filterMonsters=monsters.filter(monster=>monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase()))
    return (
      <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox placeholder='Search Monsters' handleChange={e=>this.setState({searchField:e.target.value})} />
      <CardList monsters={filterMonsters}/>
      </div>
    )

}}


export default App;
