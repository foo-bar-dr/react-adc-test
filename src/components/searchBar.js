import React, { useState, useEffect } from "react";
import { TextField, InputAdornment } from "@material-ui/core";
import { Search } from "@material-ui/icons";

export default function SearchBar(props) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    // console.log(searchQuery);
    props.onSearch(searchQuery);
  }, [searchQuery]);

  return (
    <div style={{ padding: 10 }}>
      <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
        <TextField
          id="standard-basic"
          label="Search"
          variant="outlined"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            ),
          }}
          onChange={handleChange}
        ></TextField>
      </form>
    </div>
  );
}
