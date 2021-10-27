type OmitChipsType = 'children' | 'style' | 'color' | 'onChange';

export type KeysOfHTMLSelectElement = {
  [K in keyof HTMLSelectElement]?: HTMLSelectElement[K];
};

export type HTMLSelectElementT = Omit<KeysOfHTMLSelectElement, OmitChipsType>;

export type KeysOfHTMLFormElement = {
  [K in keyof HTMLFormElement]?: HTMLFormElement[K];
};

export type HTMLFormElementT = Omit<KeysOfHTMLFormElement, OmitChipsType>;

export type HTMLFieldSetElementT = Omit<
  React.DetailedHTMLProps<
    React.FieldsetHTMLAttributes<HTMLFieldSetElement>,
    HTMLFieldSetElement
  >,
  OmitChipsType
>;
