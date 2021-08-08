import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const SignRoute = ({ children, ...rest }) => {
  const { isAuthorized } = useSelector((store) => store.sign);

  return (
    <Route
      {...rest}
      render={() => {
        return isAuthorized ? (
          <Redirect
            to={{
              pathname: "/",
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
