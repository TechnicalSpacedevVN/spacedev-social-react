import { Observable } from "@utils/Observable";
import { useEffect } from "react";
import { fromEvent } from "rxjs";

let keyboardEvent = new Observable();

fromEvent(window, "keydown").subscribe((...args) =>
  keyboardEvent.emit(args, { inverse: true })
);

export const useShortcut = (
  shortcut: string,
  effect: Function,
  dependencies: any[],
  enabled = false
) => {
  useEffect(() => {
    if (enabled) {
      const onKeydownEvent = (ev: KeyboardEvent): any => {
        if (ev.key === shortcut) {
          effect();
          // stopImmediatelyPropagation
          return false;
        }
      };

      // window.addEventListener("keydown", onKeydownEvent);
      // return () => {
      //   window.removeEventListener("keydown", onKeydownEvent);
      // };

      let unsubscribe = keyboardEvent.subscribe(onKeydownEvent);

      return () => {
        unsubscribe();
      };
    }
  }, [enabled, ...dependencies]);
};
