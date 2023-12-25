import React, { Component } from 'react'; 
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';



class App extends Component{
  constructor(){
    super()
    this.state = {
      Robots: [],
      SearchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>this.setState({Robots:users}));
  }



  onSearchChange = (event) => {
    this.setState({SearchField: event.target.value})
  }

  render(){
    const filterRobots = this.state.Robots.filter(Robots =>{
    return Robots.name.toLowerCase().includes(this.state.SearchField.toLowerCase());
    })
    if(this.state.Robots.length === 0){
      return <h1>Loading</h1>
    } else {
      return(
        <><h1 className='herotext'>Robo Friends List</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList Robots={filterRobots} />
          </ErrorBoundary>
        </Scroll>
        </>
    
      );

    }

  }
}

export default App;
