import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikController from "../Controller";

const FormikWrapper = () => {
  const choices = [
    { key: "Choice a", value: "choicea" },
    { key: "Choice b", value: "choiceb" },
  ];

  const initialValues = {
    email: "",
    description: "",
    selectChoice: "",
    radioChoice: "",
    checkBoxChoice: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectChoice: Yup.string().required("Required"),
    radioChoice: Yup.string().required("Required"),
    checkBoxChoice: Yup.array().required("Required"),
  });

  const onSubmit = (values) => console.log("Form data", values);

  return (
    <div className="container">
      <div className="row">
        <div className="col card border-1">
          <div className="card-header">
            <h1>Reusable Formik & Yup</h1>
          </div>
          <div className="card-body">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => (
                <Form>
                  <FormikController
                    control="input"
                    type="email"
                    label="Email"
                    name="email"
                  />
                  <FormikController
                    control="select"
                    label="Select your choice"
                    name="selectChoice"
                    options={choices}
                  />
                  <FormikController
                    control="radio"
                    label="Click your choice"
                    name="radioChoice"
                    options={choices}
                  />
                  <FormikController
                    control="checkbox"
                    label="select your choices"
                    name="checkBoxChoice"
                    options={choices}
                  />
                  <FormikController
                    control="textArea"
                    label="Description"
                    name="description"
                  />
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormikWrapper;
