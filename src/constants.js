import { useState } from "react";

export const useProduction = false;

export const baseURL = useProduction
  ? "https://backend-dot-smartbook-lms.uc.r.appspot.com/"
  : "http://127.0.0.1:8000/";

export const useConstructor = (callBack = () => {}) => {
  const [hasBeenCalled, setHasBeenCalled] = useState(false);
  if (hasBeenCalled) return;
  callBack();
  setHasBeenCalled(true);
};
