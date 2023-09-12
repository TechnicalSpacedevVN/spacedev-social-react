import { Observable as ObservableR } from "rxjs";

export interface EmitOpts {
  inverse?: boolean;
}

export type Handler = (...args: any[]) => void | boolean;
export class Observable<T> {
  private handlers: Handler[] = [];
  private always: Handler[] = [];
  constructor(ob?: ObservableR<T>, opts?: EmitOpts) {
    ob?.subscribe((...args) => {
      this.emit(args, opts);
    });
  }

  subscribe(handler: Handler) {
    this.handlers.push(handler);

    return () => {
      this.handlers = this.handlers.filter((e) => e !== handler);
    };
  }

  alway(handler: Handler) {
    this.always.push(handler);

    return () => {
      this.always = this.always.filter((e) => e !== handler);
    };
  }

  emit(args: any[], opts?: EmitOpts): void {
    let handlers = opts?.inverse ? this.handlers.reverse() : this.handlers;

    for (let i = 0; i < handlers.length; i++) {
      let check = handlers[i](...args);
      if (check === false) {
        break;
      }
    }

    for (let i = 0; i < this.always.length; i++) {
      this.always[i](...args);
    }
  }
}
