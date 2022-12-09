import { describe, it, expect, test } from "vitest";
import { nextTick } from "vue";
import { mount } from "@vue/test-utils";
import HelloWorld from "./HelloWorld.vue";

//確認可以執行測試
describe("Basic Test", () => {
  it("1+1=2", () => {
    expect(1 + 1).toBe(2);
  });
});

test("total", async () => {
  const wrapper = mount(HelloWorld, {
    props: {
      customer: "廣東粥",
    },
  });
  await nextTick();

  expect(wrapper.find('[data-test="target"]').html()).toContain("5,000");
});

test("discount", async () => {
  const wrapper = mount(HelloWorld, {
    props: {
      customer: "廣東粥",
    },
  });
  await nextTick();

  expect(wrapper.find('[data-test="target"]').html()).toContain("500");
});

// describe("Hellow World", () => {
//   it("Hellow World", async () => {
//     const wrapper = mount(HelloWorld, {
//       props: {
//         customer: "東區桂綸鎂",
//       },
//     });
//     await nextTick();
//     expect(wrapper.text()).toContain("東區桂綸鎂");
//   });
// });

//注意 render 的順序

//參考資料：
// ShawnL https://ithelp.ithome.com.tw/articles/10303784
// Mike https://ithelp.ithome.com.tw/articles/10282236?sc=iThomeR

//設計我要做的測試，確定修改後不會壞掉

// describe("確認算出來的數字正確", () => {
//   it("Hellow World", async () => {
//     const wrapper = mount(HelloWorld, {
//       props: {
//         customer: "公館陳柏霖",
//       },
//     });
//     await nextTick();
//     expect(wrapper.text()).toContain("395");
//   });
// });

// test("snapshot", async () => {
//   const wrapper = mount(HelloWorld, {
//     props: {
//       customer: "公館陳柏霖",
//     },
//   });
//   await nextTick();
//   expect(wrapper.find('[data-test="target"]').html()).toMatchSnapshot();
// });

//分解 Statement 函式

//移除 play 變數

// 取出 volume credit

// 移除 format 變數

// 移除總 volume credit

// 狀態：有許多內嵌的函示

//將計算階段與格式化階段拆開

// 狀態：拆成兩個檔案(與階段)

//用類型辨識計算 /建立 Performance 計算器 /將函式移入 calculator /讓 performance calculator 是多型的

// 狀態：用多型的 claculator 建立資料

// 小結論
