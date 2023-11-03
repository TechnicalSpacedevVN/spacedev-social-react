/* eslint-disable react-refresh/only-export-components */
import {
  FC,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Socket, io } from 'socket.io-client';

interface SocketNamespace {
  socket: Socket;
  namespace: string;
}

export interface SocketProviderProp {
  sockets: SocketNamespace[];
  setSockets: (sockets: SocketNamespace[]) => void;
}

const SocketContext = createContext({} as SocketProviderProp);

export const SocketProvider: FC<{ children: any }> = ({ children }) => {
  const [sockets, setSockets] = useState<SocketProviderProp['sockets']>([]);
  useEffect(() => {}, []);

  return (
    <SocketContext.Provider value={{ sockets, setSockets }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = (namespace = '') => {
  const { sockets, setSockets } = useContext(SocketContext);
  const socket = useMemo(() => {
    const result = sockets.find((e) => e.namespace === namespace);
    if (!result) {
      console.log(namespace);
      const socket = io(`${import.meta.env.VITE_SOCKET_API}/${namespace}`);
      socket.on('connect', () => {
        console.log(socket.id);
      });
      setSockets([...sockets, { namespace, socket }]);

      return socket;
    }
    return result.socket;
  }, [sockets]);

  return socket;
};

export interface SocketOnOptions {
  namespace?: string;
  dependencies?: any[];
}

export const useSocketOn = (
  eventName: string,
  cb: (...args: any[]) => void,
  opts?: SocketOnOptions,
) => {
  const socket = useSocket(opts?.namespace);
  useEffect(() => {
    socket.on(eventName, cb);
    return () => {
      socket.off(eventName, cb);
    };
  }, [socket, eventName, ...(opts?.dependencies || [])]);
};
