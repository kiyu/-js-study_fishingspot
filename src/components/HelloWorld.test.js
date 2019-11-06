import { shallowMount } from "@vue/test-utils";
import HelloWorld from "./HelloWorld";

describe("HelloWorld.vue", () => {
  it("メッセージが入るか", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
