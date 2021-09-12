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

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('fullname' in fieldValues)
      temp.fullname = fieldValues.fullname ? "" : "This is a mandatory field"
    if ('email' in fieldValues)
      temp.email = (/$^|.+@.+../).test(fieldValues.email) ? "" : "Invalid E-Mail address"
    if ('mobile' in fieldValues)
      temp.mobile = fieldValues.mobile.length > 9 ? "" : "Phone No. should have 10 Digits"
    if ('departmentId' in fieldValues)
      temp.departmentId = fieldValues.departmentId.length !== 0 ? "" : "This is a mandatory field"

    setErrors({
      ...temp
    });

    if (fieldValues === values)
      return Object.values(temp).every(x => x === '')
  }

  const { values, handleInputChange, errors, setErrors, resetForm } = useForm(initialState, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) employeeService.insertEmployee(values)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            label="Full Name"
            name="fullname"
            value={values.fullname}
            onChange={handleInputChange}
            error={errors.fullname}
          />
          <Controls.Input
            label="E-Mail"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Controls.Input
            label="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
          />
          <Controls.Input
            label="City"
            name="city"
            value={values.city}
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
            error={errors.departmentId}
          />

          <Controls.DatePicker
            name="hireDate"
            value={values.hireDate}
            label="Hire Date"
            onChange={handleInputChange}
          />

          <Controls.Checkbox
            name="isPermanent"
            label="Permanent Employee"
            value={values.isPermanent}
            onChange={handleInputChange}
          />
          <div>
            <Controls.Button
              text="Submit"
              type="submit"
            />
            <Controls.Button
              text="Reset"
              color="default"
              onClick={resetForm}
            />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
