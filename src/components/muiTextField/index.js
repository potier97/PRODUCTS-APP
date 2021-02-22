import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const TextInput = withStyles({
  root: { 
    "& label.Mui-focused": {
      color: "#fff", 
    }, 
    "& .MuiOutlinedInput-input": {
      color: "#fff",
      background: 'transparent !important'
    },

    "& .MuiInputBase-input": {
      color: "#fff",
      background: 'transparent !important'
    }, 
    "& .MuiInputLabel-formControl": {
      color: "#fff",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#fff", 
        borderWidth: "3px",
        borderRadius: 8,
      },
      //Colores al pasar el mouse por enzima
      "&:hover fieldset": {
        borderColor: "#b3b6b7",
        borderWidth: "3px",
        borderRadius: 8,
      },
      //Colores al estar dentro del input
      "&.Mui-focused fieldset": {
        borderColor: "#fff",
        borderWidth: "3px",
        borderRadius: 8,
      },
    },
  },
})(TextField);

export default function MuiTextField(props) {
  return <TextInput {...props} />;
}
