import React from "react";

const initialState = {
    standings : []
}



function reducer(state = initialState, action){
    switch (action.type){
        case "storeStandings":
        return {
            ...state, standings:
            [...state.standings, action.payload]
        }
        default:
        return state;
    }
}

export default reducer;