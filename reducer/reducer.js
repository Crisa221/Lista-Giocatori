import { combineReducers } from 'redux'
import { List, fromJS } from 'immutable'
import Action from '../action/action.js'

let initialState = {
    players: fromJS([
        {
            id: 1,
            name: "Nico",
            surname: "Crisa",
            knowname: "TheNicolaus",
            shirtNumb: 22,
            role: "Striker"

        },

        {
            id: 2,
            name: "Ema",
            surname: "Crisa",
            knowname: "Grinch",
            shirtNumb: 5,
            role: "Defender"

        },
        {
            id: 3,
            name: "Pietro",
            surname: "Smusi",
            knowname: "LOL",
            shirtNumb: 9,
            role: "Midfielder"


        }
    ]),

    menu: {
        shirtNumber: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,],
        role: ['Goalkeeper', 'Defender', 'Midfielder', 'Striker']
    }
};


const storageKey = '_players_';

if (localStorage) {
    let localState = localStorage.getItem(storageKey);
    if (localState) {
        localState = json.parse(localState);
        initState = {players: fromJS(localState)}
    }
}



function reducer (state = initialState, action) {
  switch (action.type) {
    case 'ADD_PLAYER':
        return state.push(fromJS(action.player));
    case 'REMOVE_PLAYER':
        return state.filter(player => player.get('id') !== action.id);
    case 'EDTI_PLAYER':
        return state.set(
            state.findIndex(player => player.get('id') === action.players.id),
            fromJS(action.player)
        );
    default:
        return state;
  }
};

const rootReducer = combineReducers({
  initialState,
  reducer
});


/*const reducer = combineReducers({
    players: (state = List(), action) => {
        switch (action.type) {
            case 'ADD_PLAYER':
                return state.push(fromJS(action.player));
            case 'REMOVE_PLAYER':
                return state.filter(player => player.get('id') !== action.id);
            case 'EDTI_PLAYER':
                return state.set(
                    state.findIndex(player => player.get('id') === action.players.id),
                    fromJS(action.player)
                );
            default:
                return state;
        }
    }
});*/


export default rootReducer;
