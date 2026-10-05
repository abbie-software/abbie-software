import { config } from "@/src/data/config";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") ?? "unknown";
    if (isRateLimited(ip)) {
      return Response.json({ error: "Too many reactions" }, { status: 429 });
    }

    const body = await req.json();
    const emoji = typeof body.emoji === "string" ? body.emoji : "❔";
    const label = typeof body.label === "string" ? body.label : "Unknown";

    await resend.emails.send({
      from: "Abbieverse <onboarding@resend.dev>",
      to: [config.email],
      subject: `New reaction on your portfolio: ${emoji}`,
      html: `<p>Someone reacted with <strong>${emoji} ${label}</strong> on Abbieverse.</p>`,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Reaction email failed:", err);
    return Response.json({ error: "Failed to send" }, { status: 500 });
  }
}