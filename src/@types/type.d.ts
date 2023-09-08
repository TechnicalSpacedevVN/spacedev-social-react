interface ApiErrorResponse {
  error: string;
  message: string;
}

interface DefaultProps {
  className?: string;
  style?: React.CSSProperties;
}
interface Atom<T = {}> extends React.FC<T & DefaultProps> {}
