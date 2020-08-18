import React, { useState } from "react";
import Header from "./header";
import TabsMaterial from "./tabsMaterial";
import AdvertiserScheduleTable from "./advertiserScheduleTable";
import SearchBar from "./searchBar";

export default function AdvertiserSchedulePage(routerInput) {
  const props = routerInput.routerInput;
  const [selectedTab, setSelectedTab] = useState("Approved");
  const [searchQuery, setSearchQuery] = useState("");

  const tabsList = [
    { label: "Pending Agency Approval", value: 0 },
    { label: "Pending Advertiser Approval", value: 0 },
    { label: "Approved", value: 19 },
    { label: "Declined", value: 0 },
    { label: "Incorrect", value: 0 },
    { label: "Pending Proccesing", value: 0 },
  ];

  const handleTabChange = function (input) {
    setSelectedTab(input);
  };

  const handleSearch = (_searchQuery) => {
    setSearchQuery(_searchQuery);
    console.log(searchQuery);
  };
  //   console.log(props.data[selectedTab]);
  return (
    <>
      <SearchBar onSearch={handleSearch}></SearchBar>
      <TabsMaterial
        selectedTab={selectedTab}
        tabsList={tabsList}
        handleChange={handleTabChange}
      ></TabsMaterial>
      <AdvertiserScheduleTable
        rows={
          props.data[selectedTab] === undefined ? [] : props.data[selectedTab]
        }
        keys={
          props.data[selectedTab] === undefined ||
          props.data[selectedTab].length === 0
            ? props.defaultKeys
            : Object.keys(props.data[selectedTab][0])
        }
        search={searchQuery}
      ></AdvertiserScheduleTable>
    </>
  );
}
