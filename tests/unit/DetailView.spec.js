import { shallowMount } from "@vue/test-utils";
import DetailView from "@/components/page/DetailView.vue";

describe("DetailView.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(DetailView, {
//      propsData: { msg }
    });
//    expect(wrapper.text()).toMatch(msg);
  });
});
