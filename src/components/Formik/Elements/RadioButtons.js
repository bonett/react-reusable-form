import React from "react";
import { Field, ErrorMessage } from "formik";

const RadioButtons = (props) => {
  const { label, name, options, ...rest } = props;

  return (
    <div className="form-check">
      <label className="text-muted">{label}</label>
      <Field name={name} className="form-check-label">
        {(formik) => {
          const { field } = formik;
          return options.map((option) => {
            return (
              <div key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  {...rest}
                  className="form-check-input"
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </div>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name}>
        {(name) => <div className="text-danger">{name}</div>}
      </ErrorMessage>
    </div>
  );
};

export default RadioButtons;
