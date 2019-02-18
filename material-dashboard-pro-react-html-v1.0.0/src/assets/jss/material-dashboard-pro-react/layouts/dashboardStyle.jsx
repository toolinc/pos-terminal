// ##############################
// // // App styles
// #############################

import {
  drawerWidth,
  drawerMiniWidth,
  drawerTicketWidth,
  transition,
  containerFluid
} from "assets/jss/material-dashboard-pro-react.jsx";

const appStyle = theme => ({
  wrapper: {
      // direction: "rtl",
      position: "relative",
      top: "0",
      height: "100vh",
      "&:after": {
          display: "table",
          clear: "both",
          content: '" "'
      }
  },
  mainPanel: {
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    overflow: "auto",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch"
  },

    mainPanelTicket: {
        transitionProperty: "top, bottom, width",
        transitionDuration: ".2s, .2s, .35s",
        transitionTimingFunction: "linear, linear, ease",
        [theme.breakpoints.up("md")]: {
            width: `calc(100% - ${drawerTicketWidth}px)`
        },
        overflow: "auto",
        position: "relative",
        float: "right",
        ...transition,
        maxHeight: "100%",
        width: "100%",
        overflowScrolling: "touch"
    },
  content: {
    marginTop: "70px",
    padding: "30px 15px",
    minHeight: "calc(100% - 123px)"
  },
  container: {
    ...containerFluid,
    paddingRight: `${drawerTicketWidth}px`,
  },
  map: {
    marginTop: "70px"
  },
  mainPanelSidebarMini: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerMiniWidth}px)`
    }
  },
  mainPanelWithPerfectScrollbar: {
    overflow: "hidden !important"
  }
});

export default appStyle;
