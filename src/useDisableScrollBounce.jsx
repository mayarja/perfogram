import { useState, useEffect } from "react";

const useDisableScrollBounce = () => {
  const [isBounceDisabled, setIsBounceDisabled] = useState(false);

  useEffect(() => {
    const handleTouchMove = (e) => {
      if (isBounceDisabled) {
        e.preventDefault();
      }
    };

    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => window.removeEventListener("touchmove", handleTouchMove);
  }, [isBounceDisabled]);

  return { isBounceDisabled, setIsBounceDisabled };
};

export default useDisableScrollBounce;
