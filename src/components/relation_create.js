import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function RelationCreate() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <h1 style={{ fontSize: "20px", fontWeight: "normal" }}>
        Relation: Create
      </h1>

      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Item>Source: ID Node</Item>
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            id="outlined-basic"
            variant="standard"
            style={{ backgroundColor: "#424242" }}
          />
        </Grid>
        <Grid item xs={4}>
          <Item>Target: ID Node</Item>
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            id="outlined-basic"
            variant="standard"
            style={{ backgroundColor: "#424242" }}
          />
        </Grid>
        <Grid item xs={4}>
          <Item>Line: relation name</Item>
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            id="outlined-basic"
            variant="standard"
            style={{ backgroundColor: "#424242" }}
          />
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={0.5}>
            <Grid item xs={6}>
              <Item>Type: Line</Item>
            </Grid>
            <Grid item xs={6} style={{ marginTop: "-10px" }}>
              <FormControl
                variant="standard"
                size="small"
                style={{ width: "80%" }}
              >
                <InputLabel id="demo-simple-select-standard-label">
                  Line
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age}
                  onChange={handleChange}
                  label="line"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>- - - -</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>- - - - - -</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={0.5}>
            <Grid item xs={6}>
              <Item>Type: Arrow Direction</Item>
            </Grid>
            <Grid item xs={6} style={{ marginTop: "-10px" }}>
              <FormControl
                variant="standard"
                size="small"
                style={{ width: "80%" }}
              >
                <InputLabel id="demo-simple-select-standard-label">
                  Arrow Direction
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age}
                  onChange={handleChange}
                  label="line"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>- - - -</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>- - - - - -</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Item>size</Item>
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            id="outlined-number"
            label="Number"
            type="number"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Stack spacing={1} direction="row">
            <Button color="success" variant="contained">
              สร้าง
            </Button>
            <Button color="error" variant="text">
              เคลียร์
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
