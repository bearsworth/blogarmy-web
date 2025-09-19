// app/providers.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../firebase/config";

export function AuthenticatedProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Auth state changed:", user);
      if (!user) {
        router.replace("/signin");
      } else {
        // check for user subscription state
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [router]);

  if (loading) return null;

  return <div>{children}</div>;
}
