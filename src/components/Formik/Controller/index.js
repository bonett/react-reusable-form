import React from "react";
import Input from "../Elements/Input";
import TextArea from "../Elements/TextArea";
import Select from "../Elements/Select";
import RadioButtons from "../Elements/RadioButtons";
import CheckBoxes from "../Elements/Checkbox";

const FormikController = (props) => {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textArea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckBoxes {...rest} />;
    default:
      return null;
  }
};

export default FormikController;
