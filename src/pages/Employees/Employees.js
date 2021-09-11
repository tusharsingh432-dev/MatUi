import React from "react";
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import EmployeeForms from "./EmployeeForms";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContents: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

export default function Employees() {
  const classes = useStyles();
  return (
    <>
      <PageHeader
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
        title="Title"
        subtitle="Sub Title"
      />
      <Paper className={classes.pageContents}>
        <EmployeeForms />
      </Paper>
    </>
  );
}
