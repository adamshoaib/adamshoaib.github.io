import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumbers: 10,
      page: 1,
      form: {
        searchText: "",
        is2b: false,
        is3b: false,
        is1b: false,
        rent: 1000,
        radioSelected: "pincode",
        isPetFriendly: false,
        hasPool: false,
        hasGym: false,
        ratings: 1,
      },
    };
  }

  handleChange = (event) => {
    this.setState({
      form: { ...this.state.form, ratings: event.target.value },
    });
  };

  handleRentChange = (event) => {
    this.setState({ form: { ...this.state.form, rent: event.target.value } });
  };

  onTextFieldChange = (e) => {
    this.setState({ form: { ...this.state.form, searchText: e.target.value } });
  };

  submitClicked = () => {
    this.props.onSubmitClicked({ data: this.state.form });
  };

  onRadioChanged = (e) => {
    this.setState({
      form: { ...this.state.form, radioSelected: e.target.value },
    });
  };

  is1bChanged = (e) => {
    this.setState({
      form: { ...this.state.form, is1b: e.target.checked },
    });
  };

  is2bChanged = (e) => {
    this.setState({
      form: { ...this.state.form, is2b: e.target.checked },
    });
  };

  is3bChanged = (e) => {
    this.setState({
      form: { ...this.state.form, is3b: e.target.checked },
    });
  };

  isPetChanged = (e) => {
    this.setState({
      form: { ...this.state.form, isPetFriendly: e.target.checked },
    });
  };

  hasGymChanged = (e) => {
    this.setState({
      form: { ...this.state.form, hasGym: e.target.checked },
    });
  };

  hasPoolChanged = (e) => {
    this.setState({
      form: { ...this.state.form, hasPool: e.target.checked },
    });
  };

  render() {
    const { is2b, is3b, is1b, hasPool, hasGym, isPetFriendly, rent, ratings } =
      this.state.form;
    return (
      <Box
        component="form"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <Box
          component="form"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            marginLeft: 15,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
          noValidate
          autoComplete="off"
        >
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={this.state.form.radioSelected}
            onChange={(e) => this.onRadioChanged(e)}
          >
            <FormControlLabel
              value="pincode"
              control={<Radio />}
              label="Search by Pincode"
            />
            <FormControlLabel
              value="apartmentName"
              control={<Radio />}
              label="Search by Apartment Name"
            />
            <FormControlLabel
              value="city"
              control={<Radio />}
              label="Search by City"
            />
          </RadioGroup>
        </Box>
        <Box
          component="form"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            onChange={(e) => {
              this.onTextFieldChange(e);
            }}
            value={this.state.form.searchText}
            id="outlined-basic"
            label={`Search by ${this.state.form.radioSelected}`}
            variant="outlined"
            size={"small"}
            sx={{ width: 300 }}
          />
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={is1b} />}
              label="1 Bedroom"
              onChange={(e) => {
                this.is1bChanged(e);
              }}
            />
            <FormControlLabel
              control={<Checkbox checked={is2b} />}
              label="2 Bedroom"
              onChange={(e) => {
                this.is2bChanged(e);
              }}
            />
          </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={is3b} />}
              label="3 Bedroom"
              onChange={(e) => {
                this.is3bChanged(e);
              }}
            />
            <FormControlLabel
              control={<Checkbox checked={isPetFriendly} />}
              label="Pet Friendly"
              onChange={(e) => {
                this.isPetChanged(e);
              }}
            />
          </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={hasGym} />}
              label="Gym"
              onChange={(e) => {
                this.hasGymChanged(e);
              }}
            />
            <FormControlLabel
              control={<Checkbox checked={hasPool} />}
              label="Pool"
              onChange={(e) => {
                this.hasPoolChanged(e);
              }}
            />
          </FormGroup>
          <FormGroup>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Rent Range</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={rent}
                label="Rent Range"
                onChange={(e) => this.handleRentChange(e)}
              >
                <MenuItem value={1000}>$0 - $1000</MenuItem>
                <MenuItem value={2000}>$1000 - $2000</MenuItem>
                <MenuItem value={3000}>$2000 - $3000</MenuItem>
                <MenuItem value={4000}>$3000 - Above</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Ratings</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={ratings}
                label="Ratings"
                onChange={(e) => this.handleChange(e)}
              >
                <MenuItem value={1}>1+ Star Ratings</MenuItem>
                <MenuItem value={2}>2+ Star Ratings</MenuItem>
                <MenuItem value={3}>3+ Star Ratings</MenuItem>
                <MenuItem value={4}>4+ Star Ratings</MenuItem>
                <MenuItem value={5}>5+ Star Ratings</MenuItem>
              </Select>
            </FormControl>
          </FormGroup>
          <div>
            <Button onClick={() => this.submitClicked()} variant="contained">
              Search
            </Button>
          </div>
        </Box>
      </Box>
    );
  }
}

export default Form;
