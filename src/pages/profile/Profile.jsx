import React from 'react';

import {
  Profile
} from '../../components';
import styles from './Profile.module.css';



function ProfilePage() {
  return (
    <div className={styles.wrapper}>
      <Profile />
    </div>  
  );
}


export default ProfilePage;
