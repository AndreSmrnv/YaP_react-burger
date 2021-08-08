import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";


const ProtectedRoute = ({ children, ...rest }) => {
  const { isAuthorized } = useSelector((store) => store.sign);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isAuthorized ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default ProtectedRoute;
