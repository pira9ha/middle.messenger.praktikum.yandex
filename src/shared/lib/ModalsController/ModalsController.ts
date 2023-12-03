import { Modal, TModalProps } from '@/features/modal';
import { render } from '@/shared/lib/utils/renderDOM.ts';

class ModalsController {
  private static _instance: ModalsController;
  private _currentModal: Modal | null = null;
  private _appModalPortal = '#portal';

  constructor() {
    if (ModalsController._instance) {
      return ModalsController._instance;
    }

    ModalsController._instance = this;
  }

  openModal(modalContent: TModalProps) {
    if (!this._currentModal) {
      // store.setState('modal', true);

      this._currentModal = new Modal(modalContent);
      render(this._appModalPortal, this._currentModal);
      return;
    }
  }

  closeModal() {
    if (this._currentModal) {
      // store.setState('modal', false);

      this._currentModal.hide();
      this._currentModal.getContent()?.remove();
      this._currentModal = null;
    }
  }
}

export default new ModalsController();
