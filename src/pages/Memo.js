import React from "react";

import { useParams } from "react-router-dom";

function Memo() {
  const { id } = useParams();
  return <div>{id}</div>;
}

export default Memo;
