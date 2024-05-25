import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { useContext } from "react";
import { Context } from "../Context";

export const Searchbar = () => {
  const { products } = useContext(Context);
  return (
    <Stack sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="typeahead search"
        disableClearable
        options={products.map((product) => product.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            size="small"
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{
              ...params.InputProps,
              type: "search",
              style: { color: "white" },
            }}
          />
        )}
      />
    </Stack>
  );
};
