import React, {useState, useContext, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Modal from 'react-modal';

import {GlobalContext} from '../context/GlobalState';
import { AddStep1 } from './AddStep1';
import { AddStep2 } from './AddStep2';

Modal.setAppElement('#root');
export const EditWorkout = () => {
   const {id} = useParams();
   const [modalIsOpen, setModalIsOpen] = useState(false);
   const [page, setPage] = useState(1);
   const [step, setStep] = useState({
      name: "", 
      description: ""
   });

   const {currentWorkout, getWorkout, updateWorkout} = useContext(GlobalContext);

   // Retrieve workout ID
   useEffect(() => {
      getWorkout(id);
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[]);

   const openModal = () => {
      setModalIsOpen(true);
   }

   const closeModal = () => {
      setModalIsOpen(false);
      setPage(1);
   }

   // Set 1 property of "step" using name/value properties
   const handleChange = (event) => {
      const {name, value} = event.target;
      setStep({
         ...step,
         [name]: value
      });
   }

   const nextPage = (event) => {
      setPage(page+1);
   }

   const previousPage = (event) => {
      setPage(page-1);
   }

   const submit = () => {
      // const newWorkout = {
      //    name,
      //    description
      // }
      // addWorkout(newWorkout);
      console.log(step);
      setStep({
         name: "", 
         description: ""
      });
      setPage(1);
   }

   return (
      <div className="edit-workout-page">
         <div className="edit-workout-header">
            <h1>{currentWorkout.name}</h1>
         </div>
         <div className="edit-workout-steps">
            <button onClick={openModal} className="add-step-button">
               <i className="fas fa-plus"></i>
            </button>
         </div>
         <Modal overlayClassName="step-modal-overlay" className="step-modal-content"
                isOpen={modalIsOpen} onRequestClose={closeModal}>
            <div className="new-step-header">
               {  
                  page == 2 &&
                  <button onClick={previousPage} className="back-button">
                     <i className="fas fa-long-arrow-alt-left"></i>
                  </button>
               }
               <span>Add Step</span>
            </div>
            <form>
               <AddStep1
                  name = {step.name}
                  description = {step.description}
                  handleChange = {handleChange}
                  submit = {submit}
                  page = {page}
                  nextPage = {nextPage}
               />
               <AddStep2
                  name = {step.name}
                  description = {step.description}
                  handleChange = {handleChange}
                  submit = {submit}
                  page = {page}
               />
            </form>
         </Modal>
      </div>
   )
}
