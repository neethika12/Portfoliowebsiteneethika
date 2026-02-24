const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

const requestHistory = new Map<string, number[]>();

export function isRateLimited(key: string) {
  const now = Date.now();
  const existing = requestHistory.get(key) ?? [];
  const recent = existing.filter((timestamp) => now - timestamp < WINDOW_MS);

  recent.push(now);
  requestHistory.set(key, recent);

  return recent.length > MAX_REQUESTS_PER_WINDOW;
}
