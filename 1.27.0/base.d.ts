/** @noSelfInFile */

// ====================
// ==== BASE TYPES ====
// ====================

type Option<T> = T | undefined;

declare type real = number & { readonly __real: never; }
declare type integer = number & { readonly __integer: never; }
declare type handle = number & { readonly __handle: never; }
declare type code = () => void;
declare type boolexpr = () => boolean;
declare type conditionfunc = () => boolean;
declare type filterfunc = () => boolean;
