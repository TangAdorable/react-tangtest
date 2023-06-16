import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";

export default function FixedContainer() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <h2 align="left">เพิ่มข่าว</h2>
        <hr />
        <h4 align="left">รายละเอียด</h4>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <TextField fullWidth id="fullWidth" label="แหล่งข่าว" />
          </Grid>

          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-standard-label">
                ความน่าเชื่อถือ
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-standard-label">
                ความถูกต้อง
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-standard-label">
                ชั้นความลับ
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={8}>
            <TextField fullWidth id="fullWidth" label="ชื่อกลุ่ม/ชุดข้อมูล" />
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-standard-label">
                ประเภทข้อมูล
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-standard-label">
                ชุดข้อมูล
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={8}>
            <TextField fullWidth id="fullWidth" label="หัวข้อข่าว" />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth id="fullWidth" label="Location" />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="outlined-multiline-flexible"
              label="รายละเอียด"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="outlined-multiline-flexible"
              label="วิเคราะห์เพิ่มเติม"
              multiline
              rows={4}
            />
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <h4>PMESII</h4>

            <Button onClick={handleClickOpen} color="warning" variant="text">
              + เพิ่ม PMESII
            </Button>

            <Dialog
              open={open}
              onClose={handleClose}
              fullWidth={true}
              maxWidth={"lg"}
            >
              <DialogTitle>เพิ่มความสัมพันธ์ข่าว</DialogTitle>
              <DialogContent>
                <Grid
                  container
                  spacing={2}
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={4}>
                    <Item>xs=8</Item>
                  </Grid>
                  <Grid item xs={3}>
                    <Item>xs=4</Item>
                  </Grid>
                  <Grid item xs={4}>
                    <Item>xs=4</Item>
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Subscribe</Button>
              </DialogActions>
            </Dialog>

            <Grid item xs={12}>
              <TextField
                style={{ backgroundColor: "#424242" }}
                fullWidth
                size="small"
                id="create-pmesii"
                multiline
                maxRows={4}
                disabled="disabled"
              />
            </Grid>
          </Grid>
        </Grid>
        <hr />
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Stack spacing={1} direction="row">
            <Button color="error" variant="text">
              ยกเลิก
            </Button>

            <Button variant="outlined">บันทึก</Button>
            <Button color="success" variant="contained">
              ส่ง
            </Button>
          </Stack>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
