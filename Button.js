import React from 'react';
import styles from './form.module.css'

const Button = (props) => {
    return (
     <button
     style={props.styles}
     type={`${props.type?props.type:'button'}`}
     onClick={props.onClick}
     className={styles.button}
     >{props.children}

     </button>
    );
}

export default Button;
