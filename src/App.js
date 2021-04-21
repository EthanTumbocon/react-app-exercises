import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ personsState, setPersonsState ] = useState({
        persons: [
            { name: 'Max', age: '28' },
            { name: 'Manu', age: '29' },
            { name: 'George', age: '26' }
        ],
    });

    // const [ otherState, setOtherState ] = useState('some other value');

    console.log(personsState);

    const switchNameHandler = () => {
        // console.log('Was clicked');
        // this.state.persons[0].name = "Maximillian"; DO NOT USE THIS
        setPersonsState({
            persons: [
                { name: 'Maximilian', age: '28' },
                { name: 'Manu', age: '29' },
                { name: 'George', age: '27' }
            ] })
    }


      return(
      <div className="App">
          <h1>Hi, I'm a react App</h1>
          <p>This is really working!</p>
          <button onClick={switchNameHandler}>Switch Name</button>
          <Person
              name={personsState.persons[0].name}
              age={personsState.persons[0].age}  />
          <Person
              name={personsState.persons[1].name}
              age={personsState.persons[1].age} />
          <Person
              name={personsState.persons[2].name}
              age={personsState.persons[2].age}
           click={switchNameHandler}>My Hobbies: Racing</Person>
      </div>
      );
      // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Does this work now?'))
  }

export default app;



