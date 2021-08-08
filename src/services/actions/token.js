import Cookies from "js-cookie";
import { postRefreshTokenRequest } from '../api';

const setToken = ({ accessToken, refreshToken }) => {
    const expTime = new Date(new Date().getTime() + 20 * 60 * 1000);
    Cookies.set("accessToken", accessToken, { expires: expTime });
    localStorage.setItem("refreshToken", refreshToken);
  };
  
const clearToken = () => {
    Cookies.remove("accessToken");
    localStorage.removeItem("refreshToken");
  };
  
const refreshToken = () => {
      postRefreshTokenRequest(localStorage.getItem("refreshToken"))
      .then(response => (response.ok)
           ? response.json()
           : Promise.reject(`api err: ${response.status}`)
         )        
        .then(          
          result => {
                console.log(result); 
                setToken({ accessToken: result.accessToken, refreshToken: result.refreshToken });                
        })
        .catch(e => {
              console.log(e);              
            }) ;
  };

  
  export {
    setToken,
    refreshToken,
    clearToken
};

