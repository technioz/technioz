import "server-only";

const NTFY_DEFAULT_SERVER = "https://ntfy.sh";

export type NtfyResult = { ok: boolean; status: number; error?: string };

/**
 * Send a push notification via ntfy. Topic comes from NTFY_TOPIC; NTFY_SERVER
 * and NTFY_TOKEN are optional. Callers should fire-and-forget — never block a
 * user response on this.
 */
export async function sendNtfy({
  title,
  body,
  tags = [],
  priority = "default",
}: {
  title: string;
  body: string;
  tags?: string[];
  priority?: "min" | "low" | "default" | "high" | "max";
}): Promise<NtfyResult> {
  const topic = process.env.NTFY_TOPIC;
  const server = process.env.NTFY_SERVER || NTFY_DEFAULT_SERVER;
  const accessToken = process.env.NTFY_TOKEN; // optional, for private topics

  if (!topic) {
    return { ok: false, status: 0, error: "NTFY_TOPIC not set" };
  }

  const url = `${server.replace(/\/+$/, "")}/${encodeURIComponent(topic)}`;
  const headers: Record<string, string> = {
    // HTTP headers must be ASCII; ntfy decodes RFC 2047 words, so non-ASCII
    // titles (e.g. Arabic names) are sent base64-encoded instead of throwing.
    Title: /^[\x20-\x7E]*$/.test(title)
      ? title
      : `=?UTF-8?B?${Buffer.from(title, "utf-8").toString("base64")}?=`,
    Priority: priority,
    Tags: tags.join(","),
    "Content-Type": "text/plain; charset=utf-8",
  };
  if (accessToken) {
    headers["Authorization"] = `Bearer ${accessToken}`;
  }

  try {
    const res = await fetch(url, { method: "POST", headers, body });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      return { ok: false, status: res.status, error: text.slice(0, 200) };
    }
    return { ok: true, status: res.status };
  } catch (err) {
    return {
      ok: false,
      status: 0,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}
