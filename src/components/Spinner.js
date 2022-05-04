import React from 'react';

export default function Spinner ({ type }) {
  if(type === 'table') {
    return(<tbody className="text-center spinner-border text-light"></tbody>)
  } else {
    return(<div className="text-center spinner-border text-light"></div>)
  }
}
