import React from "react";
import "./App.css";
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";
import {
  createTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import PageHeader from "../components/PageHeader";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";

const theme = createTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
  },
  zIndex: {
    appBar: 90,
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />

        <PageHeader
          icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
          title="Title"
          subtitle="Sub Title"
        />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
