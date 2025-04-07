import { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div>
      <h4>Admin layout</h4>
      <main>{children}</main>
    </div>
  );
};
