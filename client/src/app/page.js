"use client";

import { useEffect } from "react";
import api from "@/lib/axios";

export default function Home() {
  useEffect(() => {
    api
      .get("/prompts")
      .then((res) => console.log(res.data))
      .catch(console.error);
  }, []);

  return <h1>AI PromptVault</h1>;
}