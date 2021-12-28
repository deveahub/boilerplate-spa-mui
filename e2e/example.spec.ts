import { fixture, Selector, test } from 'testcafe';

fixture`Booking MVP landing`.page`http://localhost:3000/?lang=es`;
test('Must show the packages page', async (t) => {
  await t.expect(Selector('p').withText('Example¡Hola Roberto!').exists).ok();
});
