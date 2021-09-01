import { FC } from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "../../services/hooks";


const ProtectedRoute: FC = ({ children, ...rest }) => {
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
