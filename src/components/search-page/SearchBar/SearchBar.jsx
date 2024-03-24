import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import "./SearchBar.css";
import { ProductTitlesContext } from "../../../store/searchContext/searchContext";


const SearchBar = () => {
  const ProductTitles = useContext(ProductTitlesContext);
  return (
    <section className="search-bar-section">
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Stack spacing={2} sx={{ width: "100%" }}>
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              options={ProductTitles}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search Products"
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "black",
                      },
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "26px",
                    },
                  }}
                />
              )}
              ListboxProps={{
                className: "scrollBar",
              }}
            />
          </Stack>
        </Grid>
      </Grid>
    </section>
  );
};

export default SearchBar;
