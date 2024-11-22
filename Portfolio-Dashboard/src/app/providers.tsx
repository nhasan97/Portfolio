"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserProvider from "../context/user.provider";
import { Toaster } from "sonner";
import ProjectsProvider from "../context/projects.provider";
import BlogsProvider from "../context/blogs.provider";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

// Create a client
const queryClient = new QueryClient();

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <ProjectsProvider>
          <BlogsProvider>
            <NextUIProvider navigate={router.push}>
              <NextThemesProvider {...themeProps}>
                {children}
              </NextThemesProvider>
            </NextUIProvider>
          </BlogsProvider>
        </ProjectsProvider>
      </UserProvider>
      <Toaster />
    </QueryClientProvider>
  );
}
