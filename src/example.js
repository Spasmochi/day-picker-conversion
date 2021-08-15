import React from "react";
import { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      from: undefined,
      to: undefined
    };
  }

  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }

  handleResetClick() {
    this.setState(this.getInitialState());
  }

  handleToChange(to) {
    this.setState({ to }, this.showFromMonth);
  }

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <div className="RangeExample">
        <DayPickerInput
          value={
            from &&
            to &&
            ` ${from.toLocaleDateString()} - ${to.toLocaleDateString()}`
          }
          placeholder="Select range of dates"
          hideOnDayClick={false}
          dayPickerProps={{
            className: "Selectable",
            selectedDays: [from, { from, to }],
            disabledDays: { after: new Date() },
            month: from,
            fromMonth: from,
            toMonth: to,
            modifiers,
            numberOfMonths: 1,

            onDayClick: this.handleDayClick
          }}
        />
      </div>
    );
  }
}
