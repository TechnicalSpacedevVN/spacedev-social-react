import { useEffect } from "react";

export const useShortcut = (
  shortcut: string,
  effect: Function,
  dependencies: any[],
  enabled = false,
  pipe = false
) => {
  useEffect(() => {
    if (enabled) {
      const onKeydownEvent = (ev: KeyboardEvent): any => {
        if (ev.bubbles) {
          if (ev.key === shortcut) {
            effect();
          }
        }
        return false;
      };
      window.addEventListener("keydown", onKeydownEvent, {});
      return () => {
        window.removeEventListener("keydown", onKeydownEvent);
      };
    }
  }, [enabled, ...dependencies]);
};
