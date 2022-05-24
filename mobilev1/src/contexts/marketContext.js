import React, {createContext, useReducer} from 'react';

import PlayersBase from '../data/PlayersBase';
import PlayersDraft from '../data/PlayersDraft';

const initialState = { PlayersBase, PlayersDraft };
const MarketContext = createContext({});

const actions = {
    buyPlayer(state, action){
        const player = action.payload
        if(PlayersDraft.length !== 11){
            return {
                ...state,
                PlayersBase: state.PlayersBase.filter(p => p.id !== player.id),
                PlayersDraft: [...state.PlayersDraft, player]
            }
        }else{
            console.warn('Time Cheio')
            return{
                ...state
            }
        }
    },
    sellPlayer(state, action){
        const player = action.payload
        return {
            ...state,
            PlayersBase: [...state.PlayersBase, player],
            PlayersDraft: state.PlayersDraft.filter(p => p.id !== player.id)
        }
    }
}

export function MarketProvider({children}) {

    function reducer (state, action){
            const fn = actions[action.type]
            return fn ? fn(state, action) : state
        }

    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <MarketContext.Provider value={{state, dispatch}}>{children}</MarketContext.Provider>
  );
}

export default MarketContext;
