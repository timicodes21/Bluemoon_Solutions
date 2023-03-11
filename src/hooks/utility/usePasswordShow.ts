import { useState } from "react";

export const usePasswordShow = () => {
  const [visible, setVisible] = useState(false);
  const toggleShow = () => {
    setVisible(!visible);
  };

  return { visible, toggleShow };
};
