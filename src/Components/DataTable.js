import * as React from "react";
import ResultCard from "./ResultCard";
import DetailsModal from "./DetailsModal";

class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, data: {} };
  }

  seeDetailsClicked = (data) => {
    this.setState({ data: data }, () => {
      this.setState({ isOpen: true });
    });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { data } = this.props;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: 15,
          marginBottom: 25,
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        {data && data.length > 0 ? (
          data.map((row, index) => (
            <ResultCard
              key={index}
              seeDetailsClicked={() => this.seeDetailsClicked(row)}
              details={row}
            />
          ))
        ) : (
          <div>
            <h3>No Results Found !</h3>
          </div>
        )}
        <DetailsModal
          data={this.state.data}
          isOpen={this.state.isOpen}
          closeModal={() => this.closeModal()}
        />
      </div>
    );
  }
}

export default DataTable;
