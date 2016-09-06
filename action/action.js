const action = {
    addPlayer: (text) => {
        return {
            type: 'ADD_PLAYER',
            text
        };
    },
    removePlayer: (id) => {
        return {
            type: 'REMOVE_PLAYER',
            id
        };
    },
    editPlayer: (text) => {
        return {
            type: 'EDIT_PLAYER',
            text
        };
    }
};