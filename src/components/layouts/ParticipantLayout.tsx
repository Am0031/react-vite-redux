import { ReactNode } from "react";

interface ParticipantLayoutProps {
  children: ReactNode;
}

export const ParticipantLayout: React.FC<ParticipantLayoutProps> = ({
  children,
}) => {
  return (
    <div>
      <h4>Participant layout</h4>
      <main>{children}</main>
    </div>
  );
};
