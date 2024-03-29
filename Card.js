import React from 'react';
import styles from './Card.module.css'

const Card = ({id,name, age,adress, phone,type,deleteFunc}) => {
  return (
    <div
    className={styles.cardWrapper}
    style={{ backgroundColor: type === 'girl' ? 'pink' : 'green' }}
  >
    <div>Name:{name}</div>
    <div>Age: {age}</div>
    <div>adress: {adress}</div>
    <div>Phone: {phone}</div>
    <div className={styles.deleteBtn} 
    onClick={(event)=>deleteFunc(event,id)}>
      x
    </div>
  </div>
  );
}

export default Card;
