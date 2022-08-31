import { useState } from "react";

function TextToggle({ maxLength, children }) {
  const [hidden, setHidden] = useState(true);

  if (children.length <= maxLength) {
    return <div>{children}</div>;
  }
  return (
    <div>
      {hidden ? `${children.substr(0, maxLength).trim()}...` : children}
      {hidden ? (
        <a onClick={() => setHidden(false)}>Read more</a>
      ) : (
        <a>
          <a onClick={() => setHidden(true)}>Read less</a>
        </a>
      )}
    </div>
  );
}

export default TextToggle;
