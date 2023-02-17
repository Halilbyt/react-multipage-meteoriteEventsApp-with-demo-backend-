import React from "react";
import { Link } from "react-router-dom";
import classes from "./Events.module.css";
import { useSelector } from "react-redux";
import { memo } from "react";
import { useLoaderData } from "react-router-dom";

const Events = () => {
  const allData = useSelector((state) => state.dummyData.data);
  const isSucces = useSelector((state) => state.dummyData.isSuccess);

  const eventFromAPI = useLoaderData();

  if (eventFromAPI.isError) {
    return <p className={classes.message}>{eventFromAPI.message}</p>;
  }

  return (
    <React.Fragment>
      <ul className={classes.card}>
        {allData.map((data) => (
          <li key={data.id}>
            <Link to={`/events/${data.id}`}>
              <div>
                <img src={data.image} alt="img" />
                <h3>{data.title}</h3>
                <p>Date : {data.date}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default memo(Events);

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    return { isError: true, message: "Could not fetch data from API" };
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
