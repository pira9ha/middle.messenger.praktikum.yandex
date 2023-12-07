export const fromFormData = <T>(form: FormData) => {
  return Object.fromEntries(form) as unknown as T;
};
