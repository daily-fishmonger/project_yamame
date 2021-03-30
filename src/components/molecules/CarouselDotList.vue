<template>
  <div>
    <carousel-dot
      v-for="n in countRange"
      :key="n"
      :is-active="n === activeCount"
      class="carousel-dot"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import CarouselDot from '../atoms/CarouselDot.vue';

export default defineComponent({
  name: 'CarouselDotList',
  components: {
    CarouselDot,
  },
  props: {
    totalCount: {
      type: Number,
      required: true,
    },
    activeCount: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const countRange = [...Array(props.totalCount).keys()].map((i) => i + 1);
    return {
      countRange,
    };
  },
});
</script>

<style scoped>
.carousel-dot {
  margin: 8px;
}
</style>
