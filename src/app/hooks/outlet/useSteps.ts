import { useOutletContext } from "react-router-dom";
import { ContextType } from "./types";

export function useSteps() {
  return useOutletContext<ContextType>();
}
