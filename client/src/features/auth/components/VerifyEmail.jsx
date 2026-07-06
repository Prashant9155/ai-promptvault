"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import api from "@/lib/axios";

export default function VerifyEmail() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const verify = async () => {
      const token = searchParams.get("token");

      if (!token) return;

      try {
        await api.get(`/auth/verify-email?token=${token}`);

        toast.success("Email verified successfully");

        setTimeout(() => {
          router.push("/login");
        }, 1500);
      } catch (error) {
        toast.error(
          error.response?.data?.message || "Verification failed"
        );
      }
    };

    verify();
  }, [searchParams, router]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <h2 className="text-xl font-semibold">
        Verifying your email...
      </h2>
    </div>
  );
}