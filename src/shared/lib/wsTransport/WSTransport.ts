import { WSMessage, WSTransportProps } from '@/shared/lib/wsTransport/types.ts';
import EventBus from '@/shared/lib/eventBus/EventBus.ts';
import store from '@/shared/lib/store/Store.ts';
import { WS_DEFAULT_PATH } from '@/shared/constants/api.ts';

export class WSTransport extends EventBus {
  static EVENTS = {
    OPEN: 'open',
    CLOSE: 'close',
    ERROR: 'error',
    MESSAGE: 'message',
  };

  private readonly _socket: WebSocket;
  private _checkInterval: NodeJS.Timeout | null = null;

  constructor(props: WSTransportProps) {
    const { userId, token, chatId } = props;
    super();

    this._socket = new WebSocket(
      WS_DEFAULT_PATH + `/${userId}/${chatId}/${token}`,
    );
  }

  connect() {
    this.subscribe(this._socket);
    this.checkPing();

    return new Promise((resolve, reject) => {
      this.on(WSTransport.EVENTS.ERROR, reject);
      this.on(WSTransport.EVENTS.OPEN, resolve);
    });
  }

  private subscribe(socket: WebSocket): void {
    socket.addEventListener('open', () => {
      this.emit(WSTransport.EVENTS.OPEN);
    });
    socket.addEventListener('close', () => {
      this.emit(WSTransport.EVENTS.CLOSE);
    });

    socket.addEventListener('error', (e) => {
      console.log('Ошибка', e);
      this.emit(WSTransport.EVENTS.ERROR, e);
    });

    socket.addEventListener('message', (message) => {
      try {
        const data = JSON.parse(message.data);

        if (data.type === 'message' || !data?.type) {
          this.emit(WSTransport.EVENTS.MESSAGE, data);
        }
      } catch (e) {
        if (e instanceof Error) {
          store.setState('clientError', e.message);
        }
      }
    });
  }

  send(message: string | WSMessage) {
    if (!this._socket) {
      throw new Error('WebSocket connection is not open');
    }

    this._socket.send(
      JSON.stringify(
        typeof message === 'string'
          ? {
              type: 'message',
              content: message,
            }
          : message,
      ),
    );
  }

  checkPing() {
    this._checkInterval = setInterval(() => {
      this.send({ type: 'ping' });
    }, 15000);

    this.on(WSTransport.EVENTS.CLOSE, () => {
      if (this._checkInterval) {
        clearInterval(this._checkInterval);
      }

      this._checkInterval = null;
    });
  }

  close() {
    this._socket.close();
  }
}
