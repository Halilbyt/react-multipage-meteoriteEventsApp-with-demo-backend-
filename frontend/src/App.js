/* Challenge / Exercise
// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

*/

import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/Error";
import Home from "./pages/Home";
import Events, { loader as eventLoader } from "./pages/Events";

import EventDetail, {
  loader as eventDetailLoader,
  action as deleteAction,
} from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import { useDispatch, useSelector } from "react-redux";
import EventsRoot from "./pages/EventsRoot";
import { getData } from "./store/eventReducer";
import { action as dynamicEventAction } from "./components/EventForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/events",
        element: <EventsRoot />,
        children: [
          {
            path: "/events",
            element: <Events />,
            loader: eventLoader,
          },
          {
            path: "/events/:eventId",
            element: <EventDetail />,
            action: deleteAction,
          },
          {
            path: "/events/new",
            element: <NewEvent />,
            action: dynamicEventAction,
          },
          {
            path: "/events/:eventId/edit",
            element: <EditEvent />,
            loader: eventDetailLoader,
            action: dynamicEventAction,
          },
        ],
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();

  const storedData = useSelector((state) => state.dummyData.data);

  useEffect(() => {
    dispatch(getData());
  }, [storedData]);

  return <RouterProvider router={router} />;
}

export default App;

/* Note (loader) property:
we can note use useLoaderData() hook hier than its current root;
*/
