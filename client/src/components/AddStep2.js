import React from 'react'
//import {motion} from 'framer-motion';

export const AddStep2 = (props) => {
   if (props.page !== 2) { 
      return null
    }
   return (
      <React.Fragment>
         <div className="input-box">
            <input
               name="sets"
               type="number"
               value={props.sets} 
               onChange={props.handleChange}
            />
            <span>Sets</span>
         </div>
         <div className="input-box">
            <input
               name="reps" 
               type="number" 
               value={props.reps} 
               onChange={props.handleChange}
            />
            <span>Reps</span>
         </div>
         <div className="input-box">
            <input
               name="file" 
               type="file" 
               value={props.file} 
               onChange={props.handleChange}
            />
            <span>Image</span>
         </div>
         <div className="input-box">
            <input 
               className="add-step-button" 
               type="submit" 
               value="Add" 
               onMouseDown={props.submit} 
            />
         </div>
      </React.Fragment>
   )
}
