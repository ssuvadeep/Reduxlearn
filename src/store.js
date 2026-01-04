import {createStore} from 'redux';

//inital state
const initialState = {
    user : {
        name: 'Joyeeta',
        balance: 1000
    },
};

//Action creators
export const addMoney = (amount) => ({
    type: 'ADD_MONEY',
    payload: amount,
});

export const removeMoney = (amount) => ({
    type: 'REMOVE_MONEY',
    payload: amount,
})

// Reducer
function reducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_MONEY':
            return {
                user: {
                    name: state.user.name,
                    balance: state.user.balance + action.payload,
                },
            };
        
        case 'REMOVE_MONEY' :
            return {
                user: {
                    name: state.user.name,
                    balance: state.user.balance - action.payload,
                },
            };
        default:
            return state;
    }
}

const store = createStore(reducer);
export default store;
