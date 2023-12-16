type DebounceCallback = (...args: any[]) => void;

export function debounce(callback: DebounceCallback, timeoutMs: number = 300) {
  let lastCallTimer: NodeJS.Timeout;

  return function perform(...args: any[]) {
    if (lastCallTimer) {
      clearTimeout(lastCallTimer);
    }

    lastCallTimer = setTimeout(() => {
      callback(...args);
    }, timeoutMs);
  };
}
