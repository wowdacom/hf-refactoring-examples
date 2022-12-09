import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import component from "./FakeComponent.vue";
import { nextTick } from "vue";

test("snapshot", async () => {
  const wrapper = mount(component, {
    props: {
      customer: "公館陳柏霖",
    },
  });
  await nextTick();
  expect(wrapper.find('[data-test="target"]').html()).toContain(395);
});

test("snapshot", async () => {
  const wrapper = mount(component, {
    props: {
      customer: "公館陳柏霖",
    },
  });
  await nextTick();
  expect(wrapper.find('[data-test="target"]').html()).toMatchSnapshot();
});
