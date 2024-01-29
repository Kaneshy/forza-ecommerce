"use client";

import { SessionProvider, useSession } from "next-auth/react";

function AuthProvider({ children }) {
  return <SessionProvider >{children}</SessionProvider>;
}

export default AuthProvider



