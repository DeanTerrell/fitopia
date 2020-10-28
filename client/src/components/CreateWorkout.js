import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const CreateWorkout = () => {
   const [name, setName] = useState("");
   const [description, setDescription] = useState("");
   // TODO add dropdown
   //const [type, setType] = useState("");

   const {addWorkout} = useContext(GlobalContext);

   const submit = () => {
      const newWorkout = {
         name,
         description
      }
      addWorkout(newWorkout);
   }

   const updateName = (e) => {
      setName(e.target.value);
   }

   const updateDescription = (e) => {
      setDescription(e.target.value);
   }

   const expandTextField = (e) => {
      e.target.style.height = "150px";
      e.target.parentElement.style.height = "150px";
   }

   const retractTextField = (e) => {
      e.target.style.height = "100%";
      e.target.parentElement.style.height = "100%";
   }

   return (
      <div className="create-workout-page">
         <div className="create-workout-container">
            <div className="create-workout-header">
               <span>New Workout</span>
            </div>
            <form>
               <div className="input-box">
                  <input type="text" required value={name} onChange={updateName}/>
                  <span>Name</span>
               </div>
               <div className="input-box description-text">
                  <textarea //onFocus={expandTextField} onBlur={retractTextField} 
                            value={description} onChange={updateDescription} 
                            required="required" />
                  <span>Description</span>
               </div>
               <div className="input-box">
                  <input onMouseDown={submit} className="create-workout-button" type="submit" value="Create" />
               </div>
            </form>
         </div>
      </div>
   )
}
