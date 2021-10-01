import React from "react";
import { Field, ErrorMessage } from "formik";

const Select = (props) => {
  const { label, name, options, ...rest } = props;

  return (
    <div className="form-group">
      <label htmlFor={name} className="text-muted">
        {label}
      </label>
      <Field
        as="select"
        className="form-control"
        id={name}
        name={name}
        {...rest}
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name}>
        {(name) => <div className="text-danger">{name}</div>}
      </ErrorMessage>
    </div>
  );
};

export default Select;
