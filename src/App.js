import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import SideMenuItem from "./components/side-menu-item";
import {
  Home,
  PlayCircleFilled,
  People,
  DateRange,
  Settings,
} from "@material-ui/icons";
import data from "./assets/adv-schedule-table.json";
import AdvertiserSchedulePage from "./components/advertiserSchedulePage";
import {
  UIRouter,
  UIView,
  pushStateLocationPlugin,
  useSrefActive,
} from "@uirouter/react";
import AudienceSegmentsPage from "./components/audienceSegmentsPage";
import HomePage from "./components/homePage";
import loginService from "./api/loginService";

function App() {
  const token = loginService();
  token.then((response) => console.trace(response));
  const activeClass = "active";
  // const homeSref = useSrefActive("home", null, activeClass);
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

  const sideMenuConfig = [
    {
      name: "Home",
      icon: Home,
      link: "/home",
      sref: useSrefActive("home", null, "activeSidebar"),
    },
    {
      name: "Audience Segments",
      icon: People,
      link: "/audiencesegments",
      sref: useSrefActive("advertiserSchedulePage", null, activeClass),
    },
    {
      name: "Advertiser Schedule",
      icon: DateRange,
      link: "/",
      sref: useSrefActive("advertiserSchedulePage", null, activeClass),
    },
    {
      name: "Creatives",
      icon: PlayCircleFilled,
      link: "/creatives",
      sref: useSrefActive("advertiserSchedulePage", null, activeClass),
    },
  ];

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

  return (
    <div className="App">
      <div id="wrapper" className="d-flex">
        <div
          className="bg-dark border-right navbar-dark bg-dark"
          id="sidebar-wrapper"
        >
          <div className="list-group">
            {/* <SideMenuItem name="Home" icon={Home}></SideMenuItem> */}
            {/* <SideMenuItem name="Audience Segments" icon={People}></SideMenuItem>
            <SideMenuItem
              name="Advertiser Schedule"
              icon={DateRange}
            ></SideMenuItem>

            <SideMenuItem
              name="Creatives"
              icon={PlayCircleFilled}
            ></SideMenuItem>
            <SideMenuItem
              name="Account Management"
              icon={Settings}
            ></SideMenuItem> */}
            {sideMenuConfig.map((item) => (
              <SideMenuItem {...item}></SideMenuItem>
            ))}
          </div>
        </div>
        <div id="page-content-wrapper">
          <Header></Header>

          <UIView />

          {/* <AdvertiserSchedulePage
            data={data}
            defaultKeys={defaultKeys}
          ></AdvertiserSchedulePage> */}
        </div>
      </div>
    </div>
  );
}

export default App;
