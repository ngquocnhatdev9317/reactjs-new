import type { AnyFieldApi } from "@tanstack/react-form";

type FieldInputProps = {
  field: AnyFieldApi;
  label: string;
  type?: string;
  showLabel?: boolean;
  placeholder?: string;
  handleBlur: () => void;
  handleChange: (value: string) => void;
};

const FieldInput = ({ field, label, type = "text", showLabel = true, placeholder = "", ...props }: FieldInputProps) => {

  return (
    <>
      {showLabel && <label htmlFor={field.name}>{label}</label>}
      <input
        type={type}
        id={field.name}
        name={field.name}
        value={field.state.value}
        placeholder={showLabel ? placeholder : label}
        onBlur={props.handleBlur}
        onChange={(e) => props.handleChange(e.target.value)}
      />
    </>
  );
};

export default FieldInput;
