<template>
  <div class="product product__container">
    <div class="product__inner">
      <div class="product__inner-top">
        <div class="product-img">
          <img :src="getGlasses.img" alt="" />
        </div>
        <div class="product__data">
          <div class="product__name">
            {{ getGlasses.name }}
          </div>
          <div class="product__price">
            {{ getGlasses.price }}
          </div>
          <div class="product__add-to-cart">
            <div class="product__add-to-cart-inner">
              <div class="product__add-to-cart-count">
                <button @click="count++">+</button>
                <input v-model="count" min="0" type="number" />
                <button @click="count > 0 ? count-- : (count = count)">
                  -
                </button>
              </div>
              <div class="product__add-to-cart-heart">
                <img src="/src/assets/icons/heart.png" alt="" />
              </div>
              <div class="product__add-to-cart-cart">
                <img src="/src/assets/icons/cart.svg" alt="" />
              </div>
            </div>
            <div class="product__description">
              <h1 class="product__description-title">Description</h1>
              <p class="product__description-text">
                Using advanced edging technology and high-quality materials, our
                premium sunglasses have a luxurious feel with subtly curved
                lenses. Made with lightweight TR90 plastic, these large square
                sunglasses have a striking layered design. The matte translucent
                front rim features a dark tortoiseshell overlay and dark
                tortoiseshell temple arms. A metal brow bar adds a modern touch.
                Please note, the actual pattern on eyeglasses may vary slightly
                from the one pictured.
              </p>
              <div class="product__description-block">
                <div>Available: <span>Yes</span></div>
                <div>Model No: <span>1116615</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product__inner-bottom">
        <h1 class="product__description-title">More Info</h1>
        <div class="inner-bottom__row">
          <div class="inner-bottom__row-item">
            <div class="inner-bottom__row-item-title">SPECIFICATIONS</div>
            <div class="row-item__data">
              <div>
                <span>PD Range: 55-75 </span>
                <span>Prescription Range: -6.00 ~ +2.00 </span>
                <span>Available as</span>
                <span>Progressive / Bifocal : No </span>
                <span>Readers: No </span>
              </div>
              <div>
                <span>Rim: Full Rim</span>
                <span>Shape: Square</span>
                <span>Material: TR</span>
                <span>Feature: Custom engraving , Lightweight</span>
              </div>
            </div>
          </div>
          <div class="inner-bottom__row-item">
            <div class="inner-bottom__row-item-title">FRAME SIZE</div>
            <div class="row-item__data">
              <div>
                <span> Frame Width: 146 mm</span>
                <span> Lens Width: 52 mm</span>
                <span> Bridge: 20 mm</span>
              </div>
              <div>
                <span> Temple Length: 142 mm</span>
                <span> Lens Height: 46 mm</span>
                <span> Frame Weight: 17 grams</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      count: 1,
    };
  },
  computed: {
    ...mapState({
      sunglasses: (state) => state.sunglasses,
      protectiveeyeware: (state) => state.protectiveeyeware,
      prescriptionframes: (state) => state.prescriptionframes,
    }),
    getGlasses() {
      try {
        return [
          this.sunglasses,
          this.protectiveeyeware,
          this.prescriptionframes,
        ]
          .flat()
          .find((item) => item.name === this.$route.params.id);
      } catch (err) {}
    },
  },
};
</script>

<style></style>
