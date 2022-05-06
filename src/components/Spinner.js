import react from 'react';

export default function Spinner ({ type }) {
  if(type === 'table') {
    return(<tbody className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"></tbody>)
  } else {
    return(<div className="flex justify-center items-center">
    <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>)
  }
}
