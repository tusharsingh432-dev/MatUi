import { Grid } from "@material-ui/core";
import React from "react";
import { useForm, Form } from '../../components/useForm';
import * as employeeService from '../../services/employeeService'
import { Controls } from "../../components/controls/Controls";


const initialState = {
  id: 0,
  fullname: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

const genderItems = [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' },
  { id: 'other', title: 'Other' }
]

export default function EmployeeForms() {
  // const [values, setValues] = useState(initialState);
  const { values, handleInputChange } = useForm(initialState);
  // const handleInputChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   // console.log(e.target.name);
  //   setValues({
  //     ...values,
  //     [name]: value,
  //   });
  // };

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            // variant="outlined"
            label="Full Name"
            name="fullname"
            value={values.fullname}
            onChange={handleInputChange}
          />
          <Controls.Input
            // variant="outlined"
            label="E-Mail"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            label="Gender"
            name="gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />

          <Controls.Select
            label="Department"
            value={values.departmentId}
            name="departmentId"
            onChange={handleInputChange}
            options={employeeService.getDepartmentCollection()}
          />

        </Grid>
      </Grid>
    </Form>
  );
}