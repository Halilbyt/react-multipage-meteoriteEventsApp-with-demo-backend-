import React, { memo } from "react";
import { json, useParams, redirect, useNavigate } from "react-router-dom";
import classes from "./EventDetail.module.css";
import { useSelector } from "react-redux";
import { Link, useSubmit } from "react-router-dom";

const EventDetail = () => {
  const params = useParams();
  const submit = useSubmit();
  const navigate = useNavigate();
  const allData = useSelector((state) => state.dummyData.data);

  const data = allData.filter((findedData) => {
    return findedData.id === params.eventId;
  });

  const deleteHandler = () => {
    const state = window.confirm("Are you sure ? ");
    if (state) {
      submit(null, { method: "delete" });
    }
  };

  return (
    <div key={data.id} className={classes.card}>
      <h2>
        {data.length !== 0 && data[0].title} (
        {data.length !== 0 && data[0].date})
      </h2>
      <img src={data.length !== 0 && data[0].image} alt="meteor" />
      <p>{data.length !== 0 && data[0].description}</p>
      <div className={classes.btnArea}>
        <Link to={`/events/${data[0].id}/edit`}>Edit</Link>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
};

export default memo(EventDetail);

// sending edit page the data that wanted to edit:
export async function loader({ request, params }) {
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    console.log("EventDetail:loader Error!!");
  } else {
    return response;
  }
}

export async function action({ request, params }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });
  if (!response.ok) {
    throw json(
      { message: "Could not delete the selected event" },
      { status: 500 }
    );
  }

  return redirect("/events");
}
