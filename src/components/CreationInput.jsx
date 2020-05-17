import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserInput } from "../reducers/creationReducer";

export default function CreationInput(props) {
  const dispatch = useDispatch();
  const creation = useSelector((state) => state.creation);
  function handleInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(setUserInput(name, value));
  }

  if (props.type === "dropdown") {
    if (props.multi) {
      return (
        <div className='creation__col'>
          <div>
            <select
              name={props.name}
              className='creation__input class-value'
              onChange={handleInputChange}
            >
              {props.options}
            </select>
            <select
              name={props.name}
              className='creation__input level-value'
              onChange={handleInputChange}
            >
              {props.options2}
            </select>
          </div>

          <div className='class-label label'>{props.label}</div>
        </div>
      );
    } else {
      return (
        <div className='creation__col'>
          <select
            name={props.name}
            className='creation__input background-value'
            onChange={handleInputChange}
          >
            {props.options}
          </select>
          <div className='background-label label'>{props.label}</div>
        </div>
      );
    }
  } else {
    return (
      <div className='creation__col'>
        <input
          name={props.name}
          className='name-value seemless-input'
          //   type='text'
          onChange={handleInputChange}
          value={creation[props.name]}
          size={creation[props.name].length}
        />
        <div className='name-label label'>{props.label}</div>
      </div>
    );
  }
}
