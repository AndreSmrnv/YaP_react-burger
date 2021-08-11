import Cookies from "js-cookie";
import { postRefreshTokenRequest } from '../api';
import {
    REFRESH_TOKEN,
    ACCESS_TOKEN
} from '../constants/constValue'

const setToken = ({ accessToken, refreshToken }) => {
    const expTime = new Date(new Date().getTime() + 20 * 60 * 1000);
  Cookies.set(
    ACCESS_TOKEN,
    accessToken,
   // { expires: expTime }
  );
    localStorage.setItem(REFRESH_TOKEN, refreshToken);
  };
const getToken = () => Cookies.get(ACCESS_TOKEN);
  

const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN);

const clearToken = () => {
    Cookies.remove(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
  };
  
const refreshToken = (afterRefresh) => (dispatch) => {
      postRefreshTokenRequest(localStorage.getItem(REFRESH_TOKEN))
      .then(response => (response.ok)
           ? response.json()
           : Promise.reject(`api err: ${response.status}`)
         )        
        .then(          
          result => {
                //console.log(result); 
            setToken({ accessToken: result.accessToken, refreshToken: result.refreshToken });
            dispatch(afterRefresh);
        })
        .catch(e => {
              console.log(e);              
            }) ;
  };

  
export {
    setToken,
    refreshToken,
    clearToken,
  getToken,
  getRefreshToken
};

