import React from "react";
import "./Dropdown.css";
import onClickOutside from "react-onclickoutside";

class Dropdown extends React.Component {
  state = {
    listOpen: false,
    title: this.props.title,
    countChecked: 0
  };

  componentDidUpdate(prevProps) {
    if (prevProps.items !== this.props.items) {
      this.selectedItems();
    }
  }

  toggleList = () => {
    this.setState(prevState => ({
      listOpen: !this.state.listOpen
    }));
  };

  totalChecked = () => {
    return this.props.items.filter(item => item.selected).length;
  };

  selectedItems = () => {
    this.props.items.map(item =>
      item.selected ? console.log("Selected Values are", item.name) : null
    );
  };

  handleClickOutside = () => {
    this.setState({
      listOpen: false
    });
  };

  render() {
    const { title, selectAll, itemToggle, clearAll, items } = this.props;
    return (
      <div className="dropdown">
        <div className="title">{title}</div>
        <div className="closed-dropdown">
          <div className="style">
            <span>{this.totalChecked() + " selected "} </span>
            <i onClick={this.toggleList} className="arrow-down"></i>
          </div>
        </div>
        <div className="dropdown-content">
          {this.state.listOpen ? (
            <ul>
              <h3 onClick={selectAll} className="select-all">
                Select All
              </h3>
              {items.map(item => {
                return (
                  <li key={item.id} onChange={() => itemToggle(item.id)}>
                    <input
                      className="input-dropdown"
                      type="checkbox"
                      name="check"
                      checked={item.selected}
                      onChange={() => {}}
                    ></input>
                    {item.name}{" "}
                  </li>
                );
              })}
              <h3 onClick={clearAll} className="select-all">
                Clear All
              </h3>
            </ul>
          ) : null}
        </div>
      </div>
    );
  }
}

export default onClickOutside(Dropdown);
