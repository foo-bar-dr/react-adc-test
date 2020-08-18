import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { UIRouter, pushStateLocationPlugin } from "@uirouter/react";
import AdvertiserSchedulePage from "./components/advertiserSchedulePage";
import data from "./assets/adv-schedule-table.json";
import HomePage from "./components/homePage";
import AudienceSegmentsPage from "./components/audienceSegmentsPage";

const defaultKeys = [
  "Deal ID",
  "Advertiser name",
  "Brand",
  "Sub-Brand",
  "Network",
  "Last modified",
  "Approved By",
];
const plugins = [pushStateLocationPlugin];
const states = [
  {
    name: "advertiserSchedulePage",
    url: "/",
    component: AdvertiserSchedulePage,
    deps: ["$transition$"],
    params: {
      data: {
        type: "string",
        array: true,
      },
    },
    resolve: [
      {
        token: "routerInput",
        resolveFn: () => {
          return { data: data, defaultKeys: defaultKeys };
        },
      },
    ],
  },
  {
    name: "home",
    url: "/home",
    component: HomePage,
    deps: ["$transition$"],
  },
  {
    name: "audienceSegments",
    url: "/audiencesegments",
    component: AudienceSegmentsPage,
    deps: ["$transition$"],
  },
  {
    name: "creatives",
    url: "/creatives",
    component: AudienceSegmentsPage,
    deps: ["$transition$"],
  },
];

ReactDOM.render(
  <React.StrictMode>
    <UIRouter plugins={plugins} states={states}>
      <App />
    </UIRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
