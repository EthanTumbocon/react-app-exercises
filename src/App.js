import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            { name: 'Max', age: '28' },
            { name: 'Manu', age: '29' },
            { name: 'George', age: '26' }
        ],
        otherState: 'some other value'
    }

    switchNameHandler = () => {
        // console.log('Was clicked');
        // this.state.persons[0].name = "Maximillian"; DO NOT USE THIS
        this.setState({
            persons: [
                { name: 'Maximilian', age: '28' },
                { name: 'Manu', age: '29' },
                { name: 'George', age: '27' },
                { name: 'Jasmine', age: '24' },
                { name: 'Careena', age: '25' },
                { name: 'Tyler', age: '24' }

            ] })
    }
  render() {
      return(
      <div className="App">
          <h1>Hi, I'm a react App</h1>
          <p>This is really working!</p>
          <button onClick={this.switchNameHandler}>Switch Name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}  />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> My Hobbies: Racing</Person>
          <Person name={this.state.persons[3].name} age={this.state.persons[2].age}> My Hobbies: Racing</Person>
          <Person name={this.state.persons[4].name} age={this.state.persons[2].age}> My Hobbies: Racing</Person>
          <Person name={this.state.persons[5].name} age={this.state.persons[2].age}> My Hobbies: Racing</Person>

      </div>
      );
      // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Does this work now?'))
  }
}

export default App;
