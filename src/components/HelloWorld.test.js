import { mount } from "@vue/test-utils";
import HelloWorld from "./HelloWorld";

describe("HelloWorld.vue", () => {
  test("メッセージが入るか", () => {
    const msg = "new message";
    const wrapper = mount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
