import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../tetrominos";

const Cell = ({ type }) => (
  <div>
    <StyledCell type={"L"} color={TETROMINOS["L"].color}>
      cell
    </StyledCell>
  </div>
);

export default Cell;
