import { React } from 'react';

import styles from './Button.module.css'

function Button(props){
    return(
        <button onClick={props.func} className={styles.defaultBtn}>{props.text}</button>
    );
}

export default Button;