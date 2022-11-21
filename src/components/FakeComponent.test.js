import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import component from "./FakeComponent.vue";
import { nextTick } from "vue";

test("snapshot", async () => {
  const wrapper = mount(component);
  await nextTick();
  expect(wrapper.find('[data-test="target"]').html()).toMatchSnapshot();
});
