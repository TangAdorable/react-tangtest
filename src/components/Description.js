import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Description() {
  const gridStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  return (
    <>
      <div style={{ fontSize: "20px" }}>คำอธิบาย</div>
      <Grid
        container
        direction={"row"}
        spacing={{ xs: 2, md: 3 }}
        justifyContent="space-between"
      >
        <Grid item xs={6}>
          <Grid container rowSpacing={0.5} columnSpacing={{ md: 0.5 }}>
            <Grid item xs={6}>
              <div style={{ fontSize: "15px" }}>PMESII Colors</div>
            </Grid>
            <Grid item xs={6}>
              <div style={{ fontSize: "15px" }}>PMESII</div>
            </Grid>
            <Grid item xs={6} sx={gridStyles}>
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: "#03a9f4",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Item>PMESII</Item>
            </Grid>
            <Grid item xs={6} sx={gridStyles}>
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: "white",
                }}
              />
            </Grid>

            <Grid item xs={6}>
              <Item>Military</Item>
            </Grid>
            <Grid item xs={6} sx={gridStyles}>
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: "#4caf50",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Item>Social</Item>
            </Grid>
            <Grid item xs={6} sx={gridStyles}>
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: "#dd33fa",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Item>Information</Item>
            </Grid>
            <Grid item xs={6} sx={gridStyles}>
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: "#ff9800",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Item>Infrastructure</Item>
            </Grid>
            <Grid item xs={6} sx={gridStyles}>
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: "#ffef62",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Item>Economic</Item>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container rowSpacing={0.5} columnSpacing={{ md: 0.5 }}>
            <Grid item xs={6}>
              <div style={{ fontSize: "15px" }}>Ascope Colors</div>
            </Grid>
            <Grid item xs={6}>
              <div style={{ fontSize: "15px" }}>Ascope</div>
            </Grid>
            <Grid item xs={6} sx={gridStyles}>
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: "#B8926A",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Item>Area</Item>
            </Grid>
            <Grid item xs={6} sx={gridStyles}>
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: "#B8926A",
                }}
              />
            </Grid>

            <Grid item xs={6}>
              <Item>Structures</Item>
            </Grid>
            <Grid item xs={6} sx={gridStyles}>
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: "#B8926A",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Item>Capabilities</Item>
            </Grid>
            <Grid item xs={6} sx={gridStyles}>
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: "#B8926A",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Item>Organization</Item>
            </Grid>
            <Grid item xs={6} sx={gridStyles}>
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: "#B8926A",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Item>People</Item>
            </Grid>
            <Grid item xs={6} sx={gridStyles}>
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: "#B8926A",
                }}
              />
            </Grid>

            <Grid item xs={6}>
              <Item>Events</Item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
