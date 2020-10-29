import React from 'react'
import {motion} from 'framer-motion';

export const AddStep1 = (props) => {
   if (props.page !== 1) { 
      return null
    }

   return (
      <motion.div 
         initial="initial" 
         animate="in" 
         exit="out" 
         variants={props.pageVariants} 
         transition={props.pageTransition}
      >
         <div className="input-box">
            <input 
               required 
               name="name" 
               type="text" 
               value={props.name} 
               onChange={props.handleChange}
            />
            <span className="required">Name</span>
         </div>
         <div className="input-box description-text">
            <textarea
               name="description" 
               value={props.description} 
               onChange={props.handleChange} 
            />
            <span>Description</span>
         </div>
         <div className="input-box">
            <input 
               className="add-step-button" 
               type="submit" 
               value="Next" 
               onMouseDown={props.nextPage} 
            />
         </div>
      </motion.div>
   )
}
