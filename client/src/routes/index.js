import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import ForgotPassword from "../components/pages/ForgotPassword";
import SignUp from "../components/pages/SignUp";
import { AdminPanel } from "../components/pages/AdminPanel";
import PaymentPage from "../components/pages/PaymentPage";
import SuccessPage from "../components/pages/SuccessPage";

// ---
import CenterDetails from "../components/pages/CenterDetails"; // Assuming you have this component
import BookingPage from "../components/pages/BookingPage"; 
import MyBookings from "../components/pages/MyBookings";

const router = createBrowserRouter([{
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />
            },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/admin-panel",
            element: <AdminPanel/>
        }, 
        {
          path: "/my-bookings",
          element: <MyBookings/>
      },
        {
            path: "/forgot-password",
            element: <ForgotPassword />
            },
            {
                path: "/signup",
                element: <SignUp />
                },
                // <Route path="/center/:id" element={<CenterDetails />} />
                //       <Route path="/center/:id/book" element={<BookingPage />} />
                {
                    path: "/center/:id", // Center details page
                    element: <CenterDetails />,
                  },
                  {
                    path: "/center/:id/book", // Booking page
                    element: <BookingPage />,
                  },
                  {
                    path: "/center/:id/payment", // Booking page
                    element: <PaymentPage />,
                  },
                  {
                    path: "/center/:id/success", // Booking page
                    element: <SuccessPage />,
                  },
                  
            ]
}])
export default router;