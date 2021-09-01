import { Route, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "../../services/hooks";
import { FC } from "react";

interface ISignRoute { 
  path?: string | string[],
  exact?: boolean
}

interface ILocation extends Location {
  from: {
    pathname: string
  };
}

const SignRoute: FC<ISignRoute> = ({ children, ...rest }) => {
  const { isAuthorized } = useSelector((store) => store.sign);
  const location = useLocation<ILocation>();
  //console.log('SignRoute isAuthorized ', isAuthorized);
  return (
    <Route
      {...rest}
      render={() => {
        return isAuthorized ? (
          <Redirect
            to={{
              pathname: location.state?.from ? location.state?.from.pathname : "/",
            }}
          />
        ) : (
          children
        );
      }}
    />
  );
};

export default SignRoute;
