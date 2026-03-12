import { ReactNode } from "react";
import BottomTabBar from "./BottomTabBar";

interface AppShellProps {
  children: ReactNode;
  showTabs?: boolean;
}

const AppShell = ({ children, showTabs = true }: AppShellProps) => {
  return (
    <div className="mx-auto min-h-screen max-w-lg bg-background">
      <main className={showTabs ? "pb-24" : ""}>{children}</main>
      {showTabs && <BottomTabBar />}
    </div>
  );
};

export default AppShell;
