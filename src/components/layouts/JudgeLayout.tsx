import { ReactNode } from "react";

interface JudgeLayoutProps {
  children: ReactNode;
}

export const JudgeLayout: React.FC<JudgeLayoutProps> = ({ children }) => {
  return (
    <div>
      <h4>Judge layout</h4>
      <main>{children}</main>
    </div>
  );
};
