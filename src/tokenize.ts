import type { Dot, Lambda, LeftPar, Letter, RightPar, Space } from './char';
import type { TDot, TLambda, TLeftPar, TRightPar, TSpace, TVar } from './token';

export type Tokenize<CS extends string> = CS extends `${infer C}${infer R}`
  ? [
      C extends Letter
        ? TVar<C>
        : C extends Lambda
        ? TLambda
        : C extends LeftPar
        ? TLeftPar
        : C extends RightPar
        ? TRightPar
        : C extends Dot
        ? TDot
        : C extends Space
        ? TSpace
        : never,
      ...Tokenize<R>
    ]
  : [];
