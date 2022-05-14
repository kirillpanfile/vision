<template>
  <app-slider @next="next" @prev="prev">
    <app-slide
      v-for="(slide, index) in slides"
      :key="index"
      :index="index"
      :visibleSlide="visibleSlide"
      :direction="direction"
    >
      <img :src="slide" alt="" />
      <div v-if="index === 0" class="slideText1">
        Glasses for everybody <br />
        Get 15% discount!
      </div>
      <div v-if="index === 1" class="slideText2">
        “Fashion is what you buy. <br />
        <span>Style</span> is what you do with it”.
        <div class="slideTextAuthor">-Nicky hilton</div>
      </div>
      <div v-if="index === 2" class="slideTag">
        <img src="/src/assets/carousel/tag.png" alt="" />
      </div>
      <div v-if="index === 3" class="slideText3">
        Upto 30% off <br />
        For specially-abled pEOPLE Only in vision <br />
        <span>Only in vision</span>
      </div>
    </app-slide>
    <div class="dots">
      <div
        class="dot"
        v-for="(dot, index) in slides"
        :class="{ 'dot-active': visibleSlide === index }"
        :key="index"
        @click="changeSlideByDot(index)"
      ></div>
    </div>
  </app-slider>
  <appProductContainer name="SUNGLASSES">
    <app-product
      v-for="(item, index) in sunglasses"
      :key="index"
      :img="item.img"
      :name="item.name"
      :price="item.price"
    >
    </app-product>
  </appProductContainer>
  <appProductContainer name="PRESCRIPTION FRAMES">
    <app-product
      v-for="(item, index) in prescriptionframes"
      :key="index"
      :img="item.img"
      :name="item.name"
      :price="item.price"
    >
    </app-product>
  </appProductContainer>
  <appProductContainer name="PROTECTIVE EYEWARE">
    <app-product
      v-for="(item, index) in protectiveeyeware"
      :key="index"
      :img="item.img"
      :name="item.name"
      :price="item.price"
    >
    </app-product>
  </appProductContainer>
</template>

<script>
import appSlide from "../components/appSlide.vue";
import appProductContainer from "../components/appProductContainer.vue";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    appSlide,
    appProductContainer,
  },
  computed: {
    ...mapState({
      sunglasses: (state) => state.sunglasses,
      protectiveeyeware: (state) => state.protectiveeyeware,
      prescriptionframes: (state) => state.prescriptionframes,
    }),
  },
  mounted() {
    this.autoPlay();
  },
  data() {
    return {
      slides: [
        "/src/assets/carousel/cat.png",
        "/src/assets/carousel/women.png",
        "/src/assets/carousel/aviator.png",
        "/src/assets/carousel/darkness.png",
      ],
      visibleSlide: 0,
      direction: "left",
    };
  },
  methods: {
    next() {
      this.direction = "left";
      if (this.visibleSlide >= this.slides.length - 1) this.visibleSlide = 0;
      else this.visibleSlide++;
    },
    prev() {
      this.direction = "right";

      if (this.visibleSlide <= 0) this.visibleSlide = this.slides.length - 1;
      else this.visibleSlide--;
    },
    autoPlay() {
      setInterval(() => {
        this.next();
      }, 4000);
    },
    changeSlideByDot(index) {
      if (index > this.visibleSlide) {
        this.direction = "left";
      } else {
        this.direction = "right";
      }
      this.visibleSlide = index;
    },
  },
};
</script>

<style scoped>
.dots {
  position: absolute;
  bottom: 20px;
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 27px;
}
.dot {
  width: 20px;
  height: 20px;
  border-radius: 100px;
  background: rgba(252, 252, 252, 0.5);
  border: 1px solid #000000;
  cursor: pointer;
}
.dot-active {
  background: #000;
  border: 4px solid rgba(252, 252, 252, 0.5);
}
</style>
