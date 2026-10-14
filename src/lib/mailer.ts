import "server-only";
import nodemailer, { type Transporter } from "nodemailer";

/**
 * Transactional email over SMTP (Zoho Mail). All settings come from env:
 *
 *   SMTP_HOST      smtp.zoho.com (or smtppro.zoho.com / smtp.zoho.in / smtp.zoho.eu,
 *                  depending on the Zoho account type and data centre)
 *   SMTP_PORT      465 (SSL) or 587 (STARTTLS). Defaults to 465.
 *   SMTP_USER      the Zoho mailbox that signs in, e.g. hello@technioz.com
 *   SMTP_PASS      a Zoho app-specific password for that mailbox
 *   MAIL_FROM      sender shown to the recipient, e.g. "Technioz <hello@technioz.com>".
 *                  Zoho only accepts the mailbox itself or one of its aliases.
 *   MAIL_REPLY_TO  optional; where replies go (defaults to MAIL_FROM)
 *
 * If any required value is missing, sending is skipped with a warning; the
 * caller's main work (saving the lead) is never blocked by email.
 */

export type MailResult = { ok: true; messageId: string } | { ok: false; skipped?: boolean; error: string };

type MailConfig = { host: string; port: number; user: string; pass: string; from: string; replyTo?: string };

function readConfig(): MailConfig | null {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS;
  const from = process.env.MAIL_FROM?.trim() || user;
  const port = Number(process.env.SMTP_PORT || 465);
  if (!host || !user || !pass || !from || !Number.isFinite(port)) return null;
  return { host, port, user, pass, from, replyTo: process.env.MAIL_REPLY_TO?.trim() || undefined };
}

/** True when SMTP is configured, i.e. a confirmation email will be attempted. */
export function isMailConfigured(): boolean {
  return readConfig() !== null;
}

declare global {
  var __technioz_mailer__: Transporter | undefined;
}

function getTransport(cfg: MailConfig): Transporter {
  if (!global.__technioz_mailer__) {
    global.__technioz_mailer__ = nodemailer.createTransport({
      host: cfg.host,
      port: cfg.port,
      secure: cfg.port === 465, // 587 upgrades with STARTTLS
      auth: { user: cfg.user, pass: cfg.pass },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    });
  }
  return global.__technioz_mailer__;
}

export async function sendMail(msg: { to: string; subject: string; text: string; html: string }): Promise<MailResult> {
  const cfg = readConfig();
  if (!cfg) return { ok: false, skipped: true, error: "SMTP env vars not set" };
  try {
    const info = await getTransport(cfg).sendMail({
      from: cfg.from,
      replyTo: cfg.replyTo,
      to: msg.to,
      subject: msg.subject.replace(/[\r\n]+/g, " "),
      text: msg.text,
      html: msg.html,
    });
    return { ok: true, messageId: info.messageId };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}
