import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Paper } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    "aria-controls": `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    "& .MuiTab-wrapper": {
      fontWeight: "800",
    },
  },
}));

export default function TabsMaterial(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(props.selectedTab);
  // console.log(value);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.handleChange(newValue);
  };

  return (
    <div className={classes.root}>
      <Paper position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          {props.tabsList.map((tabInfo) => (
            <Tab
              value={tabInfo.label}
              label={tabInfo.label + " (" + tabInfo.value + ")"}
              {...a11yProps(tabInfo.label)}
              wrapped
            ></Tab>
          ))}
        </Tabs>
      </Paper>
      {/* {props.tabsList.map((tabInfo) => (
        <TabPanel value={value} index={tabInfo.label}></TabPanel>
      ))} */}
    </div>
  );
}
