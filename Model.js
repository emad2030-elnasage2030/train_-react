import React ,{Fragment}from 'react';
import  ReactDOM  from 'react-dom';
import Controller from '../layout/Form';
import styles from './Model.module.css'



const Backdrop =({close,show})=>{
    return <div className={`${styles.Backdrop} ${show? styles.showbackDrop:null}`} 
    onClick={close} ></div>
  };
const  Overlay= ({children,show})=>(
<div className= {`${styles.Overlay} ${show? styles.showOverlay:null}`} >
{ children}
   

</div>

);
const Model = ({children, show, closeModel}) => {

    return (
   
        <Fragment>
          { ReactDOM.createPortal(
          <Fragment>
           <Backdrop close={closeModel} show={show}/>  
          <Overlay show={show}>
           { children}
          </Overlay>
          </Fragment>,
         document.getElementById('modal')) }
       </Fragment>
       
);
}

export default Model;
