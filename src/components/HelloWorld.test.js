import { shallowMount } from '@vue/test-utils'
import HelloWorld from './HelloWorld';

describe('HelloWorld.vue', () => {
  it('テストケース1', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    // HelloWorldコンポーネント内のテキストを正規表現でチェック(.toMatch(regexp))
    expect(wrapper.text()).toMatch(msg)
  })
})