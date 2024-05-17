import { Redirect } from "expo-router";
import { ReactNode } from "react";

import { useAuth } from "../../providers/Auth";

interface ChildrenProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ChildrenProps) => {
  const authData = useAuth();

  if (!authData?.auth) {
    return <Redirect href="/login" />;
  }

  return children;
};

export default ProtectedRoute;
