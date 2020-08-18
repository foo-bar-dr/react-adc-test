import React from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  Button,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Person, ExpandMore } from "@material-ui/icons";
// import logo from "./assets/images/adcuratio-logo.png";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleNotificationClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleNotificationClose = (event) => {
    setAnchorEl(null);
  };
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <nav className=" navbar navbar-light bg-light navbar-expand-lg">
        <a className="navbar-brand">
          <img
            src={require("../assets/images/adcuratio-logo.png")}
            width="200"
            alt="ADC"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarText"
          style={{ justifyContent: "flex-end" }}
        >
          {/* <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul> */}
          <span className="navbar-text">
            <IconButton onClick={handleNotificationClick}>
              <NotificationsIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleNotificationClose}
            ></Menu>
          </span>
          <span className="navbar-text">
            <Button onClick={handleToggle} ref={anchorRef}>
              <Person></Person>
              Lamborghini Corp
              <ExpandMore />
            </Button>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="menu-list-grow"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </span>
        </div>
      </nav>
    </>
  );
}

export default Header;
