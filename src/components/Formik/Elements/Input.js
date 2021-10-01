import React from "react";
import { Field, ErrorMessage } from "formik";

const Input = (props) => {
  const { name, label, ...rest } = props;

  return (
    <div className="form-group">
      <label htmlFor={name} className="text-muted">
        {" "}
        {label}
      </label>
      <Field name={name} className="form-control" {...rest} />
      <ErrorMessage name={name}>
        {(name) => <div className="text-danger">{name}</div>}
      </ErrorMessage>
    </div>
  );
};

export default Input;
