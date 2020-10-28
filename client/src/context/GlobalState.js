import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
   workouts: [],
   currentWorkout: {},
   error: null,
   loading: true
}

// Create context 
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({children}) => {
   const [state, action] = useReducer(AppReducer, initialState);

   // Actions
   async function getAllWorkouts() {
      try {
         const res = await axios.get('/api/workouts');
         action({
            type: 'GET_ALL_WORKOUTS',
            payload: res.data.workouts
         })
      } catch (error) {
         action({
            type: 'WORKOUT_ERROR',
            payload: error.response.data.error
         })
      }
   }

   async function getWorkout(id) {
      try {
         const res = await axios.get(`/api/workouts/${id}`);

         action({
            type: 'GET_WORKOUT',
            payload: res.data.workout
         })
      } catch (error) {
         action({
            type: 'WORKOUT_ERROR',
            payload: error.response.data.error
         })
      }
   }

   async function deleteWorkout(id) {
      try {
         await axios.delete(`/api/workouts/${id}`);
         
         action({
            type: 'DELETE_WORKOUT',
            payload: id
         })
      } catch (error) {
         action({
            type: 'WORKOUT_ERROR',
            payload: error.response.data.error
         })
      }

   }

   async function addWorkout(workout) {
      const config = {
         headers: {
            'Content-Type': 'application/json'
         }
      }

      try {
         const res = await axios.post('/api/workouts', workout, config);
         
         action({
            type: 'ADD_WORKOUT',
            payload: res.data.workouts
         })
      } catch (error) {
         action({
            type: 'WORKOUT_ERROR',
            payload: error.response.data.error
         })
      }
   }

   return (
   <GlobalContext.Provider value={{
      workouts: state.workouts,
      currentWorkout: state.currentWorkout,
      error: state.error,
      loading: state.loading,
      getAllWorkouts,
      getWorkout,
      deleteWorkout,
      addWorkout
      }}>
         {children}
   </GlobalContext.Provider>)
}