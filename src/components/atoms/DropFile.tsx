import { useDebounce } from "@hooks/useDebounce";
import { cn } from "@utils";
import _ from "lodash";
import { useEffect, useState } from "react";

interface DropFileProps {
  children: any;
  content?: any;
  includes?: { [k in keyof DropFileType]?: (value: DropFileType[k]) => void };
  title?: { [k in keyof DropFileType]?: string };
  hideBackdrop?: boolean;
  backdropClassName?: string;
}

export const setDropFileData = <T extends keyof DropFileType>(
  ev: React.DragEvent<any>,
  type: T,
  data: DropFileType[T]
) => {
  ev.stopPropagation();
  ev.dataTransfer.clearData();
  ev.dataTransfer.setData(type, JSON.stringify(data));
};

export const getDropFileData = <T extends keyof DropFileType>(
  ev: React.DragEvent<any>,
  type: T
): DropFileType[T] => {
  return ev.dataTransfer.getData(type) as DropFileType[T];
};

const defaultMap: {
  [k: string]: {
    types: string[];
    handler(ev: React.DragEvent<HTMLDivElement>): any;
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
      return Array.from(ev.dataTransfer?.files);
    },
  },
};

export const DropFile: Atom<DropFileProps> = ({
  children,
  className,
  includes,
  hideBackdrop,
  ...props
}) => {
  const [open, setOpen, setOpenImmediately] = useDebounce(false, 10);

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
  useEffect(() => {
    const allowTypes = getAllowTypes();

    const onDragOver = (ev: DragEvent) => {
      ev.preventDefault();
      const types = ev.dataTransfer?.types || [];

      // console.log(allowTypes, types);
      const check = _.findIndex(allowTypes, (el) => _.includes(types, el));

      if (check !== -1) {
        setType(allowTypes[check]);
        setOpenImmediately(true);
      }
    };
    const onDrop = (ev: DragEvent): void => {
      ev.preventDefault();
      setOpen(false);
    };
    const onDragLeave = (): void => {
      setOpen(false);
      // setCurrentType("");
    };

    // const onDragEnd = () => {
    //   dragStartEvent = null;
    //   url = undefined;
    // };
    // window.addEventListener("dragend", onDragEnd);
    window.addEventListener("dragover", onDragOver);
    window.addEventListener("drop", onDrop);
    window.addEventListener("dragleave", onDragLeave);
    return () => {
      window.removeEventListener("dragover", onDragOver);
      window.removeEventListener("drop", onDrop);
      window.removeEventListener("dragleave", onDragLeave);
      // window.removeEventListener("dragstart", onDragStart);
      // window.removeEventListener("dragend", onDragEnd);
    };
  }, []);
  return (
    <div className={cn("relative", className)}>
      {children}
      {open && (
        <div
          // onDragOver={(ev) => {
          //   // ev.preventDefault();
          //   // ev.stopPropagation();
          // }}
          onDrop={async (ev) => {
            ev.preventDefault();
            // ev.stopPropagation();
            const types = ev.dataTransfer.types;
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
          }}
          className={cn(
            "absolute top-0 left-0 w-full h-full  dark:text-white bg-black !bg-opacity-60 flex items-center justify-center text-white font-bold text-xl",
            {
              "opacity-0": hideBackdrop,
            },
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
