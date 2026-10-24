const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Returns an error message for an invalid email, or undefined when it is valid. */
export function validateEmail(value: string): string | undefined {
  const email = value.trim();
  if (!email) return "Enter your work email.";
  if (!emailPattern.test(email)) return "Enter an email like name@company.com.";
  return undefined;
}
