import React from "react";
import classes from "./NewEvent.module.css";
import EventForm from "../components/EventForm";
import { json, redirect } from "react-router-dom";

const NewEvent = () => {
  return (
    <React.Fragment>
      <EventForm method="post" />
    </React.Fragment>
  );
};

export default NewEvent;
