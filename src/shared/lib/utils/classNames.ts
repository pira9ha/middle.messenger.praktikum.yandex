type TClassNamesParams = [
  className: string,
  additional: Array<string | undefined>,
  mods?: Record<string, boolean>,
];

export const classNames = (...params: TClassNamesParams): string[] => {
  const [className, additional, mods] = params;
  const result = [className];

  if (mods) {
    Object.entries(mods).forEach(([key, value]) => {
      if (value) {
        result.push(key);
      }
    });
  }

  if (additional) {
    additional.forEach((className) => {
      if (className) {
        result.push(className);
      }
    });
  }

  return result;
};
