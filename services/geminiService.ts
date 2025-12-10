// This service is deprecated as AI features have been removed.
// Kept to maintain file structure integrity but logic is replaced with simple mocks.

export const generateSlug = (): string => {
  return Math.random().toString(36).substring(2, 9);
};

export const validateUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};