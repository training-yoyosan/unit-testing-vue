import LoginForm from '@/components/LoginForm'
import { mount } from '@vue/test-utils'

describe('LoginForm', () => {
  test('emits an event with a user data payload', () => {
    const wrapper = mount(LoginForm)

    // 1. Find text input
    const input = wrapper.find('[data-test-id="name-input"]')
    // 2. Set value for text input
    input.setValue('Gigi Bigi')
    // 3. Simulate form submission
    wrapper.trigger('submit')
    // 4. Assert event has been emitted
    const formSubmittedCalls = wrapper.emitted('formSubmitted')
    // 5. Assert payload is correct
    expect(formSubmittedCalls).toHaveLength(1)
    expect(formSubmittedCalls[0]).toStrictEqual([{ name: 'Gigi Bigi' }])
  })
})
