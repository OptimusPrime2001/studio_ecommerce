'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

type Props = {
  children: React.ReactNode;
};
const queryClient = new QueryClient( {
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: ( failureCount, error: any ) => {
        if ( error?.message === "Unauthorized" ) return false;
        return failureCount < 3;
      },
    },
  },
} );
export const TanstackQueryProvider = ( { children }: Props ) => {

  return (
    <QueryClientProvider client={queryClient}>{children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
