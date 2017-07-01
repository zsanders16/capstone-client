const navbar = ( state = [], action ) => {
  switch(action.type){
    case 'SET_NAVBAR':
      return action.navbar;
    default:
      return state;
  }
}

export default navbar;
