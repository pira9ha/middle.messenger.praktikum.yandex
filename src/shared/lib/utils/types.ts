export type Indexed<T = unknown> = {
  [key in string]: T;
};

export type SymbolsIndexed<T = unknown> = {
  [key in symbol]: T;
};
