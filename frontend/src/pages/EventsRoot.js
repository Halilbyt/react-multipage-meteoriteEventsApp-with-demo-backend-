import React from "react";
import EventsNavigations from "../components/EventsNavigation";
import { Outlet } from "react-router-dom";

const EventsRoot = () => {
  return (
    <React.Fragment>
      <EventsNavigations />
      <Outlet />
    </React.Fragment>
  );
};

export default EventsRoot;
