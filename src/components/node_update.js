import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function NodeUpdate() {
  return (
    <>
      <h1 style={{ fontSize: "20px", fontWeight: "normal" }}>
        Node: Update - Delete
      </h1>

      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Item>ID Node</Item>
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            id="outlined-disabled"
            variant="standard"
            defaultValue="disabled"
            disabled
            style={{ backgroundColor: "#424242" }}
          />
        </Grid>

        <Grid item xs={4}>
          <Item>Country</Item>
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
          <Item>PMESII</Item>
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
          <Item>ASCOPE</Item>
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
          <Item>Sub ASCOPE</Item>
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
              อัพเดท
            </Button>
            <Button color="warning" variant="contained">
              ลบ
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
