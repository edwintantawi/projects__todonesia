import actionTypes from './actionTypes';

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todos: action.payload,
      };
    case actionTypes.UPDATE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) =>
            todo.id === action.payload.id
              ? { ...todo, isDone: !todo.isDone }
              : { ...todo }
          ),
        ],
      };
    case actionTypes.ADD_USER:
      return {
        ...state,
        user: {
          uid: action.payload.uid,
          email: action.payload.email,
          displayName: action.payload.displayName,
          photoURL: action.payload.photoURL,
        },
      };
    case actionTypes.UPDATE_ACTIVE_MENU:
      return {
        ...state,
        activeMenu: !state.activeMenu,
      };

    default:
      return state;
  }
};

export default reducer;
