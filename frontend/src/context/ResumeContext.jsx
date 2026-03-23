import { createContext, useState } from "react";

export const ResumeContext = createContext();

export default function ResumeProvider({ children }) {
  const [template, setTemplate] = useState("Modern Pro");

  return (
    <ResumeContext.Provider value={{ template, setTemplate }}>
      {children}
    </ResumeContext.Provider>
  );
}