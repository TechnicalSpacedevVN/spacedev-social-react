import { cn } from "../../utils";
export const BorderGradient: Atom<{ children: any; size?: number }> = ({
  size = 2,
  ...props
}) => {
  return (
    <div
      className={cn(
        "bg-gradient-to-tl from-[#ff105d]  via-[#d300c5] to-[#ffc700]",
        props.className
      )}
      style={{ padding: size }}
    >
      {props.children}
    </div>
  );
};
