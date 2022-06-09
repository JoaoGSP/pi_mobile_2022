import React, {createContext, useReducer} from 'react';
import firebaseApp from '../config/FirebaseConfig';
import {getDatabase, ref, onValue} from 'firebase/database';

import PlayersBase from '../data/PlayersBase';
import PlayersDraft from '../data/PlayersDraft';

const InitialBalance = 110;
const NewBalance = 0;
const initialState = {PlayersBase, PlayersDraft, InitialBalance, NewBalance};
const MarketContext = createContext({});
{/*
const database = getDatabase(firebaseApp);

const playersDataRef = ref(database);
onValue(playersDataRef, snapshot => {
  const data = snapshot.val();
  updateStarCount(postElement, data);
  console.log(data);
});
*/}
const actions = {
  buyPlayer(state, action) {
    const player = action.payload;
    if (PlayersDraft.length !== 11) {
      return {
        ...state,
        PlayersBase: state.PlayersBase.filter(p => p.id !== player.id),
        PlayersDraft: [...state.PlayersDraft, player],
      };
    } else {
      console.warn('Time Cheio');
      return {
        ...state,
      };
    }
  },
  sellPlayer(state, action) {
    const player = action.payload;
    return {
      ...state,
      PlayersBase: [...state.PlayersBase, player],
      PlayersDraft: state.PlayersDraft.filter(p => p.id !== player.id),
    };
  },
  updateBalanceBuy(state, action) {
    const player = action.payload;
    return {
      ...state,
      NewBalance: state.NewBalance + player.price,
      InitialBalance: state.InitialBalance - player.price,
    };
  },
  updateBalanceSell(state, action) {
    const player = action.payload;
    return {
      ...state,
      NewBalance: state.NewBalance - player.price,
      InitialBalance: state.InitialBalance + player.price,
    };
  },
};

export function MarketProvider({children}) {
  function reducer(state, action) {
    const fn = actions[action.type];
    return fn ? fn(state, action) : state;
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MarketContext.Provider value={{state, dispatch}}>
      {children}
    </MarketContext.Provider>
  );
}

export default MarketContext;
