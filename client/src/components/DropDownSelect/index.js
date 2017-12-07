import React from 'react';

class DropDownSelect extends React.Component { // eslint-disable-line react/prefer-stateless-function

  renderSelectOptions = (optionVal) => (
    <option key={optionVal} value={optionVal} selected={this.props.selected === optionVal}>{optionVal}</option>
  )

  render() {
    const { inputName, label } = this.props;
    return (
      <div className="form-group">
        {<label htmlFor={label}>{`Select ${inputName}:`}</label>}
        <select name={inputName} className="form-control">
          {this.props.options.map(this.renderSelectOptions)}
        </select>
      </div>
    );
  }
}

DropDownSelect.propTypes = {
  options: React.PropTypes.array,
  inputName: React.PropTypes.string,
  selected: React.PropTypes.string,
  label: React.PropTypes.string
};

export default DropDownSelect;
