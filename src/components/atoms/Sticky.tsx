export interface StickyProps {
  children?: any;
}

export const Sticky: Atom<StickyProps> = ({ children }) => {
  return <div>{children}</div>;
};
