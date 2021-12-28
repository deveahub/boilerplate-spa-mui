import { render as tRender } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import { InitialState, setInitialState } from '../src/state';
import { ThemeProvider } from '../src/theme';

type TRenderParams = Parameters<typeof tRender>;

type RenderProps = {
  initialState?: InitialState
}

const render = (
  node: TRenderParams[0],
  props?: TRenderParams[1],
  renderProps?: RenderProps,
) => {
  const { initialState = {} } = renderProps || {};
  const enhancedNode = (
    <RecoilRoot initializeState={setInitialState(initialState)}>
      <ThemeProvider>
        {node}
      </ThemeProvider>
    </RecoilRoot>
  );

  return tRender(enhancedNode, props);
};

export default render;
