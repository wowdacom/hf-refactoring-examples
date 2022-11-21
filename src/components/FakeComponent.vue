<script setup>
import { ref, onMounted } from "vue";
import SINGERS_INVOICES from "../assets/singerInvoice.json";
import SINGERS from "../assets/singerList.json";

defineProps({
  msg: String,
});

const alert = ref("");
const getMemberPerformances = (memberName) =>
  SINGERS_INVOICES.filter((info) => info.customer === memberName)[0]
    .performances;
const singer_statement = (name, singer) => {
  let msg = "";
  let originalTotalAmount = 0;
  let totalAmount = 0;
  let totalDiscount = 0;
  let memberName = name;
  let performances = getMemberPerformances(memberName);

  const calcTickFee = () => {
    for (let ticket of performances) {
      let cost = 0;
      let save = 0;
      let off = 1;
      switch (singer[ticket.playID].type) {
        case "concert":
          off = 0.9;
          cost = ticket.fee * off;
          save = ticket.fee - cost;
          break;
        case "exhibition":
          off = 0.5;
          cost = ticket.fee * off;
          save = ticket.fee - cost;
          break;
        default:
          throw new Error(`unkown type: ${singer[ticket.playID].type}`);
      }

      originalTotalAmount += ticket.fee;
      totalAmount += cost;
      totalDiscount += save;
    }
  };

  calcTickFee();

  msg += `<p>${memberName} 您好：\n本次總票價為 <span style="text-decoration:line-through">${originalTotalAmount.toLocaleString(
    "en-US"
  )}$</span></p><br>`;
  msg += `<p>實際消費為 ${totalAmount.toLocaleString("en-US")}$</p>`;
  msg += `<p>此次會員資格為您節省了 ${totalDiscount.toLocaleString(
    "en-US"
  )}$</p>`;
  return msg;
};

onMounted(() => {
  const message = singer_statement("公館陳柏霖", SINGERS);
  // Try edit me
  console.log(message);

  // Update header text
  alert.value = message;
});
</script>

<template>
  <p class="text-red-500 text-center">
    <span class="text-red-200">✦✦✦✦ </span>2022
    年底前申辦會員，享有演唱會九折優惠，一般展覽一律半價，敬啟把握!<span></span>
    <span class="text-red-200"> ✦✦✦✦</span>
  </p>
  <br />
  <h1 data-test="target" v-html="alert" id="header"></h1>
</template>

<style scoped>
h1 {
  background: transparent;
  color: #fcbe24;
  padding: 0 24px;
  display: flex;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  flex-direction: column;
  white-space: pre-wrap;
}
</style>
