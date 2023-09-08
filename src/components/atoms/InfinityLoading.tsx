import { IconSpin } from "@components/Icon/IconSpin";
import { forwardRef } from "react";
import { FixedSizeList as List } from "react-window";

export interface InfinityLoadingProps extends DefaultProps {
  placement?: "top" | "bottom";
  children?: any;
  loading?: boolean;
  haveNext?: boolean;
  offset?: number;
  onNext?: () => void;
  virtualized?: {
    itemSize: number;
    itemCount: number;
    data: any;
  };
}

const Row = ({ index, style, children, ...props }: any) => {
  console.log(props);
  return <div style={style}>{children}</div>;
};

export const InfinityLoading = forwardRef<HTMLDivElement, InfinityLoadingProps>(
  (
    {
      placement = "bottom",
      children,
      loading,
      offset = 50,
      virtualized,
      ...props
    },
    ref
  ) => {
    let _children = children;
    // if (virtualized) {
    //   _children = (
    //     <List
    //       height={226}
    //       width={184}
    //       itemCount={virtualized.itemCount}
    //       itemSize={virtualized.itemSize}
    //       itemData={virtualized.data}
    //     >
    //       {Row}
    //     </List>
    //   );
    // }

    return (
      <div
        ref={ref}
        className={props.className}
        onScroll={(ev) => {
          let ele = ev.currentTarget;
          let _offset = 0;
          if (placement === "top") {
            _offset = ele.scrollTop;
          } else {
            _offset = ele.scrollHeight - ele.scrollTop - ele.offsetHeight;
          }

          if (_offset < offset && props.haveNext) {
            props.onNext?.();
          }
        }}
      >
        {loading && placement === "top" && (
          <div className="flex justify-center my-3">
            <IconSpin />
          </div>
        )}

        {_children}
        {loading && placement === "bottom" && (
          <div className="flex justify-center my-3">
            <IconSpin />
          </div>
        )}
      </div>
    );
  }
);
