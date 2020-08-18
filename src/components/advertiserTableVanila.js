import React from "react";

const advertiserTableVanila = (props) => {
  return (
    <>
      <table>
        <tr>
          {props.keys.map((headCell) => (
            <th>{headCell}</th>
          ))}
        </tr>
      </table>
    </>
  );
};

export default advertiserTableVanila;
