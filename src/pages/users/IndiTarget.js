import * as React from "react";
import './userstyles.css';

import ReactChipInput from "react-chip-input";

class IndiTarget extends React.Component {
    state = {
        chips: []
    };
    addChip = value => {
        const chips = this.state.chips.slice();
        chips.push(value);
        this.setState({ chips });
    };
    removeChip = index => {
        const chips = this.state.chips.slice();
        chips.splice(index, 1);
        this.setState({ chips });
    };
    render() {
        return (
            <ReactChipInput

                classes="class1 class2"
                chips={this.state.chips}
                onSubmit={value => this.addChip(value)}
                onRemove={index => this.removeChip(index)}
            />
        );
    }
}
export default IndiTarget;