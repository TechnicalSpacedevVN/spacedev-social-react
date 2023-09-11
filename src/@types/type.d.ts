interface ApiErrorResponse {
  error: string;
  message: string;
}

interface DefaultProps {
  className?: string;
  style?: React.CSSProperties;
}
type Atom<T = {}> = React.FC<T & DefaultProps>;

interface DropFileType {
  img: string;
  post: {
    id: string;
    url: {
      link: string;
      title: string;
      image: string;
    };
    content: string;
    user: string;
  };
  text: string;
  files: File[];
  url: string;
}
