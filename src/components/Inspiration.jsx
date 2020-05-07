import React from "react";
import { useSelector, useDispatch } from "react-redux";
import inspirationIcon from "../imgs/inspiration-icon.svg";
import { toggleInspiration } from "../reducers/statusReducer";

export default function Inspiration() {
  const inspiration = useSelector((state) => state.status.inspiration);
  const dispatch = useDispatch();

  return (
    <div className="inspiration border-bg">
      <div className="inspiration__text label">inspiration</div>
      <img
        src={inspirationIcon}
        alt=""
        onClick={() => dispatch(toggleInspiration())}
        className={`inspiration__icon ${inspiration ? "" : "hide"}`}
      ></img>
    </div>
  );
}
