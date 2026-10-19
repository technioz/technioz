import "server-only";

/**
 * Postgres being unreachable must not hold a visitor hostage. During the
 * October 19 2026 outage a write to the dead host hung for over two minutes
 * before Prisma gave up (P1008 / SocketTimeout) — long after the visitor had
 * closed the tab and the lead was gone.
 *
 * Callers treat a timeout exactly like a failed save, so the ntfy/email
 * fallback can run and the visitor still gets to book a call.
 */
export const SAVE_TIMEOUT_MS = 6_000;

export function withSaveTimeout<T>(work: Promise<T>, label: string, ms = SAVE_TIMEOUT_MS): Promise<T> {
  let timer: NodeJS.Timeout | undefined;
  const timeout = new Promise<never>((_, reject) => {
    timer = setTimeout(() => reject(new Error(`${label} timed out after ${ms}ms`)), ms);
    timer.unref?.();
  });
  return Promise.race([work, timeout]).finally(() => clearTimeout(timer));
}
