export type SendContactPayload = {
  name: string;
  email: string;
  message: string;
  subject?: string;
  ts: number;
  company_website?: string; // honeypot
};

export async function sendContact(payload: SendContactPayload) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => null);

  if (!res.ok || !data?.ok) {
    throw new Error(data?.error ?? "Failed to send message.");
  }

  return data;
}