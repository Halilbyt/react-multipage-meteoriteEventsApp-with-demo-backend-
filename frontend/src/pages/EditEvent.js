import React from "react";
import EventForm from "../components/EventForm";
import { useLoaderData } from "react-router-dom";

const EditEvent = () => {
  const eventEditData = useLoaderData();
  return (
    <React.Fragment>
      <EventForm method="patch" event={eventEditData.event} />
    </React.Fragment>
  );
};

export default EditEvent;
