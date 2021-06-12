import actionTypes from './actionTypes';

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            title: action.payload.title,
            isDone: false,
          },
        ],
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

    default:
      return state;
  }
};

export default reducer;
