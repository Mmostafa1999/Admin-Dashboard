import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import Bar from "./pages/bar/Bar";
import Calender from "./pages/calender/Calender";
import Contacts from "./pages/contacts/Contacts";
import Dashboard from "./pages/dashboard/Dashboard";
import Faq from "./pages/faq/Faq";
import Geography from "./pages/geography/Geography";
import Invoices from "./pages/invoices/Invoices";
import Line from "./pages/line/Line";
import NotFound from "./pages/NotFound";
import Pie from "./pages/pie/Pie";
import Profile from "./pages/profile/Profile";
import Team from "./pages/team/Team";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="profile" element={<Profile />} />

      <Route path="pie" element={<Pie />} />

      <Route path="line" element={<Line />} />

      <Route path="invoices" element={<Invoices />} />
      <Route path="geography" element={<Geography />} />
      <Route path="faq" element={<Faq />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="calender" element={<Calender />} />
      <Route path="bar" element={<Bar />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
