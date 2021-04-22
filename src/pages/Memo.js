import React from 'react';

import { RouteComponentProps } from 'react-router-dom';

function Memo(props) {
  const { id } = props.match.params;
  console.log(id);
  return <div>{id}</div>;
}

export default Memo;
