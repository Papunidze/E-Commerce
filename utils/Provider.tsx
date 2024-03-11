"use client";

import { SessionProvider, useSession } from "next-auth/react";
import { Suspense } from "react";
import { QueryClientProvider, QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <Suspense fallback={<p>Loading feed...</p>}>{children}</Suspense>
      </SessionProvider>
    </QueryClientProvider>
  );
};

export default Provider;
