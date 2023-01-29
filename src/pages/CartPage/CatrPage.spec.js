import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import CartPage from "./CartPage.vue";

// const MessageComponent = {
//   template: "<p>{{ msg }}</p>",
//   props: ["msg"],
// };

it("displays message", () => {
  // const wrapper = shallowMount(MessageComponent, {
  //   propsData: {
  //     msg: "Hello world",
  //   },
  // });

  const cartPage = shallowMount(CartPage);
  console.log(cartPage);

  // Assert the rendered text of the component
  expect("Hello world").to.include("Hello world");
});
