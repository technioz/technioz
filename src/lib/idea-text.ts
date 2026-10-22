/**
 * The "Your idea" box is required, and a few digits do not count.
 * On 18 October 2026 someone typed only their phone number, which tells us
 * nothing we can plan a build from. Shared by the form and the API validator so
 * the browser and the server agree on what a real answer looks like.
 */

/** Shortest answer we accept: "booking app" has 10 letters and 2 words. */
const MIN_LETTERS = 8;
const MIN_WORDS = 2;

export function ideaProblem(raw: string): string | null {
  const value = raw.trim();
  if (!value) return "Please describe your idea in a few words.";

  // Count letters in any script, so Arabic or Urdu answers are not penalised.
  const letters = (value.match(/\p{L}/gu) ?? []).length;
  const digits = (value.match(/\d/g) ?? []).length;
  const words = value.split(/\s+/).filter((w) => /\p{L}{2,}/u.test(w));

  if (letters === 0) return "Please use words, not just numbers.";
  if (digits > letters) return "That looks like a phone number. Please describe the idea in words.";
  if (letters < MIN_LETTERS || words.length < MIN_WORDS) {
    return 'Please write a little more, e.g. "Booking app for dentists".';
  }
  return null;
}
