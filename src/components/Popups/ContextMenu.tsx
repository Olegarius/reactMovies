import React, {useEffect, useState} from "react";

import styles from './index.module.css';

type Props = {
  onClick: (actionType: string) => (event: any) => void;
};

const ContextMenu:React.FC<Props> = ({onClick: action}) => {

  return (<ul className={styles.wrapperContext}>
    <li onClick={action('edit')}>Edit</li>
    <li onClick={action('delete')}>Delete</li>
  </ul>);
}

  export default ContextMenu;
