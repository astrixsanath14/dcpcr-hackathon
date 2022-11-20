import React from "react";
import Select from "react-select";

class DisabilityPicker extends React.Component {
  state = {
    value: { label: this.props.val, value: this.props.val }
  };

  handleChange(value) {
    this.setState({ value: value });
  }

  render() {
    return (
      <Select
        options={this.options}
        value={this.state.value}
        onChange={(value) => this.handleChange(value)}
      />
    );
  }
}

// ReactDOM.render(<DisabilityPicker val={2} />, document.getElementById("root"));

export default DisabilityPicker;