import { PublicLayout } from "./components/layouts";
import { PublicRoute } from "./constants";
import { useLocation } from "react-router-dom";
import { AppRouter } from "./routes/routes";


export const App = () => {

  console.log(PublicRoute);

  const { pathname } = useLocation();

  const renderRoute = () => {
    if (Object.values(PublicRoute).includes(pathname)) {
      return <AppRouter />;
    } else {
      return (
        <PublicLayout>
          <AppRouter />
        </PublicLayout>
      );
    }
  };

  return renderRoute();

};