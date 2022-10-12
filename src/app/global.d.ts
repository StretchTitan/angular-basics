declare type Maybe<T> = T | null;
declare type InputMaybe<T> = Maybe<T>;
declare type Exact<T extends Record<string, unknown>> = { [K in keyof T]: T[K] };
declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
