export interface IInputFields {
  name: string;
  type?: string;
  value?: string;
  placeholder?: string;
  autocomplete?: string;
}

export interface IButtonFields {
  title: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: EventListener;
}
