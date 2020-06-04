import { 
    SIGN_IN,
    LOG_OUT 
} from '../actions/types';

const INITIAL_STATE = {
    email:'',
    password:'',
    isSignedIn:false
};

export default (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case SIGN_IN:
        return action.payload
        case LOG_OUT:
        return INITIAL_STATE;    
        default:
        return state;
    }
}