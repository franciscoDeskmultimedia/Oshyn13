import Link from 'next/link'

import styles from '../Button/Button.module.scss'

interface ButtonProps {
    type: string;
    url: string;
    children?: React.ReactNode; 
  }

const Button = (props:ButtonProps)=>{
    const btnType = props.type ? props.type : 'primary';
    let btnTypeClass = styles.button_type_primary
    if( btnType == 'primary' ){
        btnTypeClass = styles.button_type_primary
    }
    if(btnType == 'secondary'){
        btnTypeClass = styles.button_type_secondary
    }
    return(
        <Link className={`${styles.btn} btn-cta ${btnTypeClass} `} href={props.url} >{props.children}</Link>
    )
}

export default Button;
