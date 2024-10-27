import { API_URL } from "@/constants";
import ky from "ky";

class PresetQuotation {
  constructor(url?: string) {
    this.url = url ?? API_URL;
  }
  url: string;

  async getAllPresets({
    contractorId,
    headers,
  }: {
    contractorId: string;
    headers: Record<string, string>;
  }) {
    const url = new URL(
      `/api/v1/contractor/presets/all/${contractorId}`,
      this.url,
    );
    const res = await ky.get(url, {
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    });
    return res.json() as Promise<Array<unknown>>;
  }
}

export const presetQuotation = new PresetQuotation();
