import { render } from '../../devtools';
import Example from './Example';

describe('Example', () => {
  it('render', () => {
    const { asFragment } = render(<Example />);
    expect(asFragment()).toMatchSnapshot();
  });
});
