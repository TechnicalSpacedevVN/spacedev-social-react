import { useDebounce } from "@hooks/useDebounce";
import { cn } from "@utils";
import { Observable } from "@utils/Observable";
import _ from "lodash";
import { useEffect, useRef, useState } from "react";
import { fromEvent } from "rxjs";

const observableDragOver = new Observable(
  fromEvent<DragEvent>(window, "dragover")
);
const observableDrop = new Observable(fromEvent<DragEvent>(window, "drop"));
const observableDragLeave = new Observable(
  fromEvent<DragEvent>(window, "dragleave")
);

interface DropFileProps {
  children: any;
  content?: any;
  includes?: { [k in keyof DropFileType]?: (value: DropFileType[k]) => void };
  title?: { [k in keyof DropFileType]?: string };
  backdropClassName?: string;
  isGlobal?: boolean;
}

export const setDropFileData = <T extends keyof DropFileType>(
  ev: DragEvent | React.DragEvent<HTMLElement>,
  type: T,
  data: DropFileType[T]
) => {
  ev.stopPropagation();
  ev?.dataTransfer?.clearData();
  ev?.dataTransfer?.setData(type, JSON.stringify(data));
};

export const getDropFileData = <T extends keyof DropFileType>(
  ev: DragEvent,
  type: T
): DropFileType[T] => {
  return ev?.dataTransfer?.getData(type) as DropFileType[T];
};

const defaultMap: {
  [k: string]: {
    types: string[];
    handler(ev: DragEvent): any;
    title: string;
  };
} = {
  url: {
    title: "Thả link vào đây",
    types: ["text/uri-list"],
    handler(ev) {
      return ev.dataTransfer?.getData("text");
    },
  },
  text: {
    title: "Thả văn bản vào đây",
    types: ["text/plain", "text/html"],
    handler(ev) {
      return ev.dataTransfer?.getData("text");
    },
  },

  files: {
    title: "Thả file vào đây",
    types: ["Files"],
    handler(ev) {
      return Array.from(ev?.dataTransfer?.files || []);
    },
  },
};

export const DropFile: Atom<DropFileProps> = ({
  children,
  className,
  includes,
  ...props
}) => {
  const [open, setOpen, setOpenImmediately] = useDebounce(false, 10);
  const checkRef = useRef(false);

  const getAllowTypes = () => {
    let allowTypes = Object.keys(includes || {});

    allowTypes = allowTypes.reduce(
      (cum, cur) => [
        ...cum,
        ...(typeof defaultMap[cur] !== "undefined"
          ? defaultMap[cur].types
          : [cur]),
      ],
      [] as string[]
    );
    return allowTypes;
  };

  const [type, setType] = useState("");

  const onDrop = async (ev: DragEvent) => {
    ev.preventDefault();
    // ev.stopPropagation();
    const types = ev?.dataTransfer?.types;
    if (types) {
      for (const i of types) {
        const checkIsDefault = _.findKey(defaultMap, (e) =>
          e.types.includes(i)
        );

        if (checkIsDefault) {
          const data = defaultMap[checkIsDefault].handler(ev);
          if (data) {
            includes?.[checkIsDefault as keyof typeof includes]?.(data);
            break;
          }
        } else {
          const data = ev.dataTransfer.getData(i);
          if (data) {
            includes?.[i as keyof typeof includes]?.(JSON.parse(data));
            break;
          }
        }
      }
    }
  };

  useEffect(() => {
    const allowTypes = getAllowTypes();

    const unsubscribe1 = observableDragOver.subscribe((ev: DragEvent) => {
      ev.preventDefault();
      const types = ev.dataTransfer?.types || [];

      const check = _.findIndex(allowTypes, (el) => _.includes(types, el));

      if (check !== -1) {
        setType(allowTypes[check]);
        setOpenImmediately(true);
      }
      return true;
    });
    const unsubscribe2 = observableDrop.subscribe((ev: DragEvent) => {
      if (checkRef.current) {
        checkRef.current = false;
        onDrop(ev);
        return false;
      }
    });

    const unsubscribe5 = observableDrop.alway((ev: DragEvent) => {
      setOpen(false);
      checkRef.current = false;
    });
    const unsubscribe3 = observableDragLeave.subscribe(() => {
      setOpen(false);
      checkRef.current = false;
    });

    const unsubscribe4 = props.isGlobal
      ? observableDrop.subscribe((ev: DragEvent) => {
          ev.preventDefault();
          onDrop(ev);
          return false;
        })
      : null;

    return () => {
      unsubscribe1();
      unsubscribe2();
      unsubscribe3();
      unsubscribe4?.();
      unsubscribe5();
    };
  }, []);
  return (
    <div className={cn("relative", className)}>
      {children}
      {open && (
        <div
          onDrop={() => {
            checkRef.current = true;
          }}
          className={cn(
            "absolute top-0 left-0 w-full h-full  dark:text-white bg-black !bg-opacity-60 flex items-center justify-center text-white font-bold text-xl",
            props.backdropClassName
          )}
        >
          {props?.title?.[type as keyof DropFileType] ||
            props.content ||
            "Thả tệp tại đây"}
        </div>
      )}
    </div>
  );
};
