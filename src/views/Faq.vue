<template>
  <div class="faq faq__container">
    <div class="faq__inner">
      <section
        class="faq__section"
        v-for="(section, index) in sections"
        :key="index"
      >
        <div class="faq__section-title">{{ section.name }}</div>
        <div
          class="faq__section-inner"
          v-for="(questions, index) in section.questions"
          :key="index"
        >
          <div class="section-quest">{{ questions.quest }}</div>
          <div class="section-ans">{{ questions.ans }}</div>
        </div>
      </section>
      <div class="faq-cash">Outside valley cash on delivery services :</div>
      <div class="faq-cash-list" v-for="item in cash" :key="item">
        <span>
          {{ item }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "faq",
  data() {
    return {
      sections: [
        {
          name: "DELIVERY",
          questions: [
            {
              quest: "Is the delivery free for all over Nepal?",
              ans: "Yes delivery is free all over Nepal.",
            },
            {
              quest: "When will I receive the product?",
              ans: "The products are only delivered on business days from Sunday to Friday.",
            },
            {
              quest: "When will I receive the product?",
              ans: "Products will be delivered within 2 day s from the date of order inside Kathmandu Valley . For outside Kathmandu Valley the time may vary depending upon you location.",
            },
          ],
        },
        {
          name: "EXCHANGE AND RETURN",
          questions: [
            {
              quest: "What is vision.com exchange and return Policy ?",
              ans: "Vision.com’s exchange and return Policy offers 5 days of exchange and return from the date of your purchase. (e.g.: if you purchased your product of Jan 1st you can exchange and return it until Jan 5th)",
            },
            {
              quest: "How does Vision.com exchange and return Policy work ?",
              ans: "Vision.com’s 5 day exchange and return policy gives you the option to exchange or return the product you have purchased.However, the state and condition of the item must be same at the time of purchase. You can try on the item, although do so with special care.Once the item is returned to us it will go through our quality check and after if passes the test we will refund the amount to you.",
            },
            {
              quest: "Will there be extra charge for product I exchange?",
              ans: "No, there is no extra charge.",
            },
          ],
        },
        {
          name: "CANCELLATION",
          questions: [
            {
              quest: "How can I cancel my order?",
              ans: "SMS or call us at 9851200990 . We will cancel your order within 24 hours.",
            },
          ],
        },
        {
          name: "PAYMENT",
          questions: [
            {
              quest:
                "How do I pay for products if I am located outside Kathmandu Valley ?",
              ans: "You will need to deposit the the amount of the product to our bank account , IME or esewa. After verifying the amount your product will be dispatched to your location. Delivery time may range from 2 days or more.",
            },
            {
              quest: "Can I use cheque to pay for the items I purchased?",
              ans: "No, we only accept hand cash.",
            },
            {
              quest: "What payment methods do we accept?",
              ans: "Currently we accept only cash on delivery and esewa , bank payments and IME.",
            },
          ],
        },
      ],
      cash: ["Butwal", "Chitwan", "Dharan", "Pokhara", "Hetuda", "Itahari"],
    };
  },
};
</script>

<style></style>
