import React, { useMemo, useState } from "react";

function Listitems({ ele }) {
  const [flag, setFlag] = useState(true);
//   console.log("listitems");
  return (
    <div className="list-item">
      {flag ? <p>{ele}</p> : <p>Content is hidden</p>}
      <button onClick={() => setFlag(!flag)}>Toggle</button>
    </div>
  );
}

const MemoizedListItems = React.memo(Listitems);

export default MemoizedListItems;
