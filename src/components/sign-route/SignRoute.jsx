import { Route, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const SignRoute = ({ children, ...rest }) => {
  const { isAuthorized } = useSelector((store) => store.sign);
  const location = useLocation();
  console.log('SignRoute isAuthorized ', isAuthorized);
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
