import React from "react";
import { Field, ErrorMessage } from "formik";

const TextArea = (props) => {
  const { label, name, ...rest } = props;

  return (
    <div className="form-group">
      <label htmlFor={name} className="text-muted">
        {label}
      </label>
      <Field
        as="textarea"
        className="form-control"
        id={name}
        name={name}
        {...rest}
      />
      <ErrorMessage name={name}>
        {(name) => <div className="text-danger">{name}</div>}
      </ErrorMessage>
    </div>
  );
};

export default TextArea;
