import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HelloWorld from "./HelloWorld.vue";

describe("Basic Test", () => {
  it("1+1=2", () => {
    expect(1 + 1).toBe(2);
  });
});

describe("Hellow World", () => {
  it("renders props.msg when passed", async () => {
    const wrapper = mount(HelloWorld);
    expect(wrapper.text()).toContain("會員");
  });
});
