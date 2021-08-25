import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { getLogout, getProfile }  from '../../services/actions/sign';
import { getRefreshToken }  from '../../services/actions/token';
import {
  Profile,
  ProfileNav,
  Orders
} from '../../components';
import styles from './Profile.module.css';
import { PROFILE_NAV_TEXT } from '../../services/constants/constValue';


function ProfilePage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { isAuthorized, user, lastUpdated, isFetching } = useSelector((store) => store.sign);
  const [navText, setNavText] = useState(PROFILE_NAV_TEXT.profile);
  useEffect(
    () => {
      dispatch(getProfile());      
    },
    []
  ); 

  useEffect(() => {
    if (location.pathname === '/profile/logout') {
      const token = getRefreshToken();
      if (token) {
        dispatch(getLogout(token));
        history.push('/login');        
      }
    } else if (location.pathname === '/profile/orders') {
      setNavText(PROFILE_NAV_TEXT.orders)
    }
    else if (location.pathname === '/profile') {
      setNavText(PROFILE_NAV_TEXT.profile)
    }

  }, [location]);
  if (!isAuthorized) {
    return null;
  }
  return (
     <div className={styles.wrapper}>
   
      <div className={styles.profile}>
        <div className={styles.nav_container}>
          <ProfileNav />
          <p className={`${styles.nav__text} text text_type_main-default text_color_inactive`}>
            {navText}
          </p>
        </div>
        <Switch>
          <Route path="/profile/orders">
            <Orders />
          </Route>          
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
        
      </div>
    </div>
  );
}


export default ProfilePage;


