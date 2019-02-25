import React, { Component } from "react";
import "../App.css";
class Comp1 extends Component {
    state = {
        suggestions: [],
        text: ""
    };

    onTextChange = e => {
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, "i");
            suggestions = this.props.items.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({ suggestions, text: value }));
    };
    suggestionSelect(value) {
        this.setState(() => ({
            text: value,
            suggestions: []
        }));
    }
    renderSuggestions() {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul>
                {suggestions.map((item, index) => (
                    <li onClick={() => this.suggestionSelect(item)} key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        );
    }
    render() {
        const { text } = this.state;
        return (
            <div>
                <input value={text} type="text" onChange={this.onTextChange} />
                {this.renderSuggestions()}
            </div>
        );
    }
}

export default Comp1;
