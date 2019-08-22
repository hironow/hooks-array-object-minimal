import React, { useEffect, useRef, useState } from "react";

// Hook
function useHover(): [React.Ref<HTMLDivElement>, boolean] {
  const [value, setValue] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);

      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [ref.current]); // Recall only if ref changes

  return [ref as React.Ref<HTMLDivElement>, value as boolean];
}

export default useHover;
