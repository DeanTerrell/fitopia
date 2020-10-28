import React from 'react'

export const AddStep2 = (props) => {
   if (props.page !== 2) { 
      return null
    }
   return (
      <React.Fragment>
         <div className="input-box">
            <select
               name="sets"
               value={props.sets} 
               onChange={props.handleChange}
            />
            <span>Sets</span>
         </div>
         <div className="input-box">
            <select
               name="reps" 
               type="text" 
               value={props.reps} 
               onChange={props.handleChange}
            />
            <span>Reps</span>
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
