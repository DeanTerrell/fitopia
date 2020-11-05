const AppReducer = (state, action) => {
   switch(action.type) {
      case 'GET_ALL_WORKOUTS':
         return {
            ...state,
            loading: false,
            workouts: action.payload
         }
      case 'GET_WORKOUT':
         return {
            ...state,
            loading: false,
            currentWorkout: action.payload
         }
      case 'DELETE_WORKOUT':
         return {
            ...state,
            workouts: state.workouts
               .filter(workout => workout._id !== action.payload)
         }
         case 'ADD_WORKOUT':
            return {
               ...state,
               workouts: [...state.workouts, action.payload]
            }
         case 'UPDATE_WORKOUT':
            return {
               ...state,
               workouts: [...state.workouts, action.payload]
            }
         case 'WORKOUT_ERROR':
            return {
               ...state,
               error: action.payload
            }
      default:
         return state;
   }
}

export default AppReducer;