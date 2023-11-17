export const updateLoaded = (
  event: Event,
  setFileName: (name: string) => void,
) => {
  const targetInput = event.target;

  if (targetInput && targetInput instanceof HTMLInputElement) {
    const files = targetInput.files;

    if (!files || files?.length === 0) {
      throw new Error();
    } else {
      for (const file of files) {
        setFileName(file.name);
      }
    }
  }
};
