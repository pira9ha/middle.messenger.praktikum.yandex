export const isObject = (value: any): boolean => {
  return value && typeof value === 'object' && !Array.isArray(value);
};
