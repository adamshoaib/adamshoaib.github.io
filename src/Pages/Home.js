import React from "react";
import DataTable from "../Components/DataTable";
import ToolBar from "../Components/ToolBar";
import Form from "../Components/Form";
import Divider from "@mui/material/Divider";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumbers: 10,
      page: 1,
      data: [],
      baseUrl: "http://127.0.0.1:4000",
    };
  }
  pageNumberChanged = (e, page) => {
    this.setState({ page: page });
  };

  onSubmitClicked = (data) => {
    axios({
      method: "POST",
      url: `${this.state.baseUrl}/api/v1/get_apt`,
      data: { data: data.data },
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://127.0.0.1:4000",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((e) => {
        console.log("Error", e);
      });
  };
 
  render() {
    return (
      <div
        style={{ display: "flex", flexDirection: "column", overflow: "auto" }}
      >
        <ToolBar />
        <div style={{ marginTop: 80, marginBottom: 20 }}>
          <Form onSubmitClicked={(data) => this.onSubmitClicked(data)} />
        </div>
        <Divider />
        <div style={{ marginTop: 20 }}>
          <DataTable data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default Home;
