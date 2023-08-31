import { FC } from "react";

interface ApiErrorResponse {
  error: string;
  message: string;
}

interface DefaultProps {
  className?: string;
}
interface Atom<T = {}> extends FC<T & DefaultProps> {}
