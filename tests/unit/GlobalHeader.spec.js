import { shallowMount } from "@vue/test-utils";
import GlobalHeader from "@/components/particle/GlobalHeader.vue";

describe("GlobalHeader.vue", () => {
  it("renders props.mode1 when passed", () => {
    const mode = "detail";
    const success = "潮汐詳細";
    const wrapper = shallowMount(GlobalHeader, {
      stubs: ['router-link', 'router-view'],
      propsData: { mode }
    });
    expect(wrapper.text()).toMatch(success);
  });
});
