import React from "react";

function SideMenuItem(props) {
  const PropsIcon = props.icon;
  console.log(props.sref);
  return (
    <a
      {...props.sref}
      className="list-group-item list-group-item-action list-group-item-dark bg-dark text-white"
      style={{ textAlign: "left", fontSize: 16 }}
    >
      <PropsIcon fontSize="small"></PropsIcon>
      <span style={{ verticalAlign: "middle", marginLeft: 10 }}>
        {props.name}
      </span>
    </a>
  );
}

export default SideMenuItem;
