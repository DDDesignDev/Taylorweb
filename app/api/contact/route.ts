import { Resend } from "resend";

export const runtime = "nodejs"; // must be node, not edge

const resend = new Resend(process.env.RESEND_API_KEY);

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const subject = String(body?.subject ?? "").trim();
    const message = String(body?.message ?? "").trim();

    // optional anti-bot (recommended)
    const honey = String(body?.company_website ?? "").trim();
    if (honey) return Response.json({ ok: true }); // pretend success

    const ts = Number(body?.ts ?? 0);
    if (!Number.isFinite(ts) || Date.now() - ts < 1500) {
      return Response.json({ ok: true }); // silently accept
    }

    // validation
    if (!name || !isEmail(email) || message.length < 10) {
      return Response.json({ ok: false, error: "Invalid form data." }, { status: 400 });
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;
    if (!to || !from || !process.env.RESEND_API_KEY) {
      return Response.json({ ok: false, error: "Server email not configured." }, { status: 500 });
    }

    const finalSubject = subject ? `Contact: ${subject}` : `Portfolio contact: ${name}`;

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: finalSubject,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "(none)"}\n\nMessage:\n${message}\n`,
    });

    if (error) {
      return Response.json({ ok: false, error: error.message }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: "Bad request." }, { status: 400 });
  }
}