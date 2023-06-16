import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Description from "./Description";
import NodeCreate from "./node_create";
import NodeUpdate from "./node_update";
import RelationCreate from "./relation_create";
import RelationUpdate from "./relation_update";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ClonePMESII() {
  const elements = [
    { data: { id: "one", label: "Node 1" }, position: { x: 85, y: 15 } },
    { data: { id: "two", label: "Node 2" }, position: { x: 100, y: 150 } },
    {
      data: { source: "one", target: "two", label: "Edge from Node1 to Node2" },
    },
  ];

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [age, setAge] = React.useState("");

  const handleChange1 = (event) => {
    setAge(event.target.value);
  };

  return (
    // <CytoscapeComponent elements={elements} style={ { width: '600px', height: '600px' } } />

    <React.Fragment>
      <CssBaseline />
      {/* "xs" | "sm" | "md" | "lg" | "xl" */}
      <Container maxWidth="xl" sx={{ width: "90%" }}>
        <Box>
          <Grid container>
            <Grid
              item
              xs={6}
              sx={{
                width: "100%",
                height: "315px",
                backgroundColor: "#b2a429",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "black",
              }}
            >
              <h1>PMESII</h1>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                width: "100%",
                height: "315px",
                backgroundColor: "#ffeb3b",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "black",
              }}
            >
              <h1>PMESII Duplicate</h1>
            </Grid>
          </Grid>
          <Grid container>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Node: Create" {...a11yProps(0)} />
                  <Tab label="Node: Update - Delete" {...a11yProps(1)} />
                  <Tab label="Relation: Create" {...a11yProps(2)} />
                  <Tab label="Relation: Update - Delete" {...a11yProps(2)} />
                  <Tab label="Description" {...a11yProps(4)} />
                </Tabs>
              </Box>

              <TabPanel value={value} index={0}>
                <Grid container spacing={1}>
                  <Grid item xs={8}>
                    <NodeCreate />
                  </Grid>
                  <Grid item xs={4} sx={{ color: "white" }}>
                    <Description />
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Grid container spacing={1}>
                  <Grid item xs={8}>
                    <NodeUpdate />
                  </Grid>
                  <Grid item xs={4}>
                    <Description />
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Grid container spacing={1}>
                  <Grid item xs={8}>
                    <RelationCreate />
                  </Grid>
                  <Grid item xs={4}>
                    <Item>คำอธิบายของ Relation</Item>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <Grid container spacing={1}>
                  <Grid item xs={8}>
                    <RelationUpdate />
                  </Grid>
                  <Grid item xs={4}>
                    <Item>คำอธิบายของ Relation</Item>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={4}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={1}>
                    <Grid item xs={8}>
                      <Item>คำอธิบายของ Node</Item>
                    </Grid>
                    <Grid item xs={4}>
                      <Item>คำอธิบายของ Relation</Item>
                    </Grid>
                  </Grid>
                </Box>
              </TabPanel>
            </Box>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
