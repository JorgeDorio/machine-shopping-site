"use client";

import axios from "axios";
import Cookies from "js-cookie";
import { useMemo } from "react";

export function useApi() {
  const token = Cookies.get("token");

  const instance = useMemo(() => {
    return axios.create({
      baseURL: "http://localhost:5042/api",
      timeout: 1000,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }, [token]);

  return instance;
}
