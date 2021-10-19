import { Route } from "react-router-dom";

// components
import CheckoutLayout from "../layout/CheckoutLayout";

const CheckoutHOC = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <CheckoutLayout>
            <Component {...props} />
          </CheckoutLayout>
        )}
      />
    </>
  );
};

export default CheckoutHOC;
