// import {Fragment} from "react";
// import NetflixSeries from "./components/NetflixSeries";
// import "./components/Netflix.css";
import "./components/NetFlix.module.css";
import { EventHandling } from "./components/EventHandling";
export const App = () => {
  return (
    <section className="container">
         {/* <h1 className="card-heading">List of Best Netflix Series</h1> */}
         {/* <NetflixSeries />; */}
         <EventHandling />
    </section>
  );
};