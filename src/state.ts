import {
  atom, MutableSnapshot, UnwrapRecoilValue,
} from 'recoil';

const example = atom({
  key: 'example',
  default: {},
});

const state = {
  example,
};

const stateKeys = Object.keys(state);

export type InitialState = {
  [k in keyof typeof state]?: UnwrapRecoilValue<typeof state[k]>;
}

export const setInitialState = (initialState: InitialState) => ({ set }: MutableSnapshot) => {
  Object.keys(initialState).forEach((k) => {
    if (stateKeys.includes(k)) {
      const value = initialState[k as keyof typeof state];
      const currAtom = state[k as keyof typeof state];
      set(currAtom as Parameters<typeof set>[0], value);
    }
  });
};

export default state;
