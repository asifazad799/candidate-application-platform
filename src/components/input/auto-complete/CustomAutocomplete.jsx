import * as React from "react";

import "./custom-autocomplete.css";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export function CustomAutocomplete({ options, label, ...props }) {
  return (
    <Autocomplete
      multiple
      limitTags={1}
      options={options || []}
      renderInput={(params) => <TextField {...params} label={label} />}
      getOptionLabel={(option) => option?.title}
      ListboxProps={{
        "aria-labelledby": "nested-list-subheader",
      }}
      ChipProps={{ style: { borderRadius: "3px", margin: "0px 3px" } }}
      className="autocomplete"
      {...props}
    />
  );
}
