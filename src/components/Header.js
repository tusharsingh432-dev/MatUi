import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import React from "react";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import {
  ChatBubbleOutline,
  PowerSettingsNewOutlined,
  SearchOutlined,
} from "@material-ui/icons";

const useStyle = makeStyles({
  root: {
    backgroundColor: "#fff",
    transform: "translateƵ(0)",
    position: "relative",
  },
  searchInput: {
    opacity: "0.6",
    padding: "0px 8px",
    fontSize: "0.8rem",
    "&:hover": {
      backgroundColor: "#f2f2f2",
    },
    "& .MuiSvgIcon-root": {
      marginRight: "8px",
    },
  },
});

export default function Header() {
  const classes = useStyle();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <InputBase
              placeholder="Search"
              className={classes.searchInput}
              startAdornment={<SearchOutlined fontSize="small" />}
            />
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={4} color="primary">
                <ChatBubbleOutline />
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNewOutlined />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
