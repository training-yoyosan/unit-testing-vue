/**
 * How to test a parent component without triggering a child's axios request?
 * Child has module dependencies we don't want to test?
 *
 * You created a stub(placeholder or fake) that you substitute.
 */

import MessageContainer from '@/components/MessageContainer'
import { mount } from '@vue/test-utils'

describe('MessageContainer', () => {
  it('Wraps MessageDisplay component', () => {
    const wrapper = mount(MessageContainer, {
      global: {
        stubs: {
          MessageDisplay: {
            template: `<p data-testid="message">Hello from the db!</p>`,
          },
        },
      },
    })

    const message = wrapper.find('[data-testid="message"]').text()
    expect(message).toEqual('Hello from the db!')
  })
})
