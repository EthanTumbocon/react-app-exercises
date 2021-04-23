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
        showPersons: false;
    });

    // const [ otherState, setOtherState ] = useState('some other value');

    console.log(personsState);

    const switchNameHandler = (newName) => {
        // console.log('Was clicked');
        // this.state.persons[0].name = "Maximillian"; DO NOT USE THIS
        setPersonsState({
            persons: [
                { name: 'Max', age: 28 },
                { name: 'Manu', age: 29 },
                { name: 'Stephanie', age: 26 }
            ]
        })
    }

     const nameChangedHandler = (event) => {
        this.setState( {
            persons: [
                { name: 'Max', age: 28 },
                { name: event.target.value, age: 29 },
                { name: 'Stephanie', age: 26 }
            ]
        } )
    }
    const togglePersonsHandler = () =>{

    }


    // render () {
    //     const style = {
    //         backgroundColor: 'white',
    //         font: 'inherit',
    //         border: '1px solid blue',
    //         padding: '8px',
    //         cursor: 'pointer'
    //     };
    // }


      return(
      <div className="App">
          <h1>Hi, I'm a react App</h1>
          <p>This is really working!</p>
          <button onClick={() => switchNameHandler('Maximillian!!')}>Switch Name</button>
          {
              this.state.showPersons ?
              <div>
              <Person
                  name={personsState.persons[0].name}
                  age={personsState.persons[0].age}  />
              <Person
                  name={personsState.persons[1].name}
                  age={personsState.persons[1].age}
                  click={switchNameHandler.bind(this, 'Max!')}
                  changed={nameChangedHandler} >My Hobbies: Racing</Person>
              <Person
                  name={personsState.persons[2].name}
                  age={personsState.persons[2].age}/>
          </div> : null
          }
      </div>
      );
      // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Does this work now?'))
  }

export default app;



