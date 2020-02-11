import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// import logo from './logo.svg';
// import './App.css';

const App = () => {
  
  const storestanding = useSelector(state => state);
  const dispatch = useDispatch();
  
  let [appState, setAppState] = useState([]);
  
  const fetchData = () => {
    axios({
      method: 'get',
      url: 'http://api.football-data.org/v2/competitions/2021/standings', 
      headers: {'X-Auth-Token': '030a03482da942128a7ffafdbd3b7936'}
    })
    // .then((body) => {
    //   return body.json();
    // })
    .then((data) => {
      console.log(data);
      setAppState(data.data.standings[0].table);
    })
    // .then(() => {
    //   console.log(appState)
    // })
    .catch((error) => {
      console.log(error)
    })
  }
  
  useEffect(() => {
    fetchData();
  }, [setAppState])
  
  
  const storeStandings = () => {
    dispatch({
      type: "storeStandings",
      payload: appState
    });
  }
  
  console.log(storestanding);
  
  
  return (
    <div className="container">
    <button onClick={storeStandings} className="btn btn-lg btn-primary">Press this button see standings</button>
    <hr />
    
    <table className="table table-bordered">
      <thead>
        <tr>
          <td>
            Position
          </td>
          <td>
            Club
          </td>
          <td>
            Played
          </td>
          <td>
            Won
          </td>
          <td>
            Draw
          </td>
          <td>
            Lost
          </td>
          <td>
            Points
          </td>
          <td>
            GoalsFor
          </td>
          <td>
            GoalsAgainst
          </td>
          <td>
            GoalDifference
          </td>
        </tr>
      </thead>
      <tbody>
        {storestanding.standings[0] ? storestanding.standings[0].map((n, i) => {
      return (
      <tr key={i}><td>{n.position}</td><td>{n.team.name}</td><td>{n.playedGames}</td><td>{n.won}</td><td>{n.draw}</td><td>{n.lost}</td><td>{n.points}</td><td>{n.goalsFor}</td><td>{n.goalsAgainst}</td><td>{n.goalDifference}</td></tr>
        );
      }) : "press the button please"
    }
          
          
        
      </tbody>
    </table>
    




    
    
    </div>
    );
  }
  
  // class App extends Component {
  //   render() {
  //     return (
  //       <div className="App">
  
  //       </div>
  //     );
  //   }
  // }
  
  export default App;
  