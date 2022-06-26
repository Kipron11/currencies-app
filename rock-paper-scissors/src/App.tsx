import React, { useState } from 'react';
import './App.scss';
import { FaHandPaper, FaHandRock, FaHandScissors } from 'react-icons/all';

const actions = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper',
};

const randomAction = () => {
  const keys = Object.keys(actions);
  const index = Math.floor(Math.random() * keys.length);

  return keys[index];
};

const Winner = (actionA, actionB) => {
  if (actionA === actionB) {
    return 0;
  } if (actions[actionA] === actionB) {
    return -1;
  }
  return 1;
};

const ShowWinner = ({ winner = 0 }) => {
  const text = {
    '-1': 'You Win!',
    0: "It's a Tie!",
    1: 'You Lose!',
  };
  return <div><h2>{text[winner]}</h2></div>;
};

const DuelIcon = ({ action, ...props }) => {
  const icons = {
    rock: FaHandRock,
    paper: FaHandPaper,
    scissors: FaHandScissors,
  };
  const Icon = icons[action];
  return (<Icon {...props} />);
};

const ActionButton = ({ action, onActionSelected }) => {
  const a = 1;
  return (
    <button onClick={() => {
      onActionSelected(action);
    }}
    >
      <DuelIcon action={action} />
    </button>
  );
};

const Player = ({ name, score, action }) => {
  const a = 1;
  return (
    <div className="Player">
      <div className="Score">{`${name} : ${score}`}</div>
      <div className="Duel">{action && <DuelIcon action={action} />}</div>
    </div>
  );
};

const App = () => {
  const [playerAction, setPlayerAction] = useState('');
  const [pcAction, setPCAction] = useState('');

  const [playerScore, setPlayerScore] = useState(0);
  const [pcScore, setPCScore] = useState(0);

  const [winner, setWinner] = useState(0);

  const onActionSelected = (selectedAction) => {
    setPlayerAction(selectedAction);

    const newPCAction = randomAction();
    setPCAction(newPCAction);

    const newWinner = Winner(selectedAction, newPCAction);
    setWinner(newWinner);
    if (newWinner === -1) {
      setPlayerScore(playerScore + 1);
    } else if (newWinner === 1) {
      setPCScore(pcScore + 1);
    }
  };

  return (
    <section className="App">
      <header><h1>Rock Paper Scissors</h1></header>
      <div className="Game--Form">

        <div className="Players">
          <Player name="Player" score={playerScore} action={playerAction} />
          <Player name="PC" score={pcScore} action={pcAction} />
        </div>
        <div className="div__button">
          <ActionButton action="rock" onActionSelected={onActionSelected} />
          <ActionButton action="paper" onActionSelected={onActionSelected} />
          <ActionButton action="scissors" onActionSelected={onActionSelected} />
        </div>
        <ShowWinner winner={winner} />
      </div>
    </section>
  );
};

export default App;
