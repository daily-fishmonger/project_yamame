<template>
  <div class="carousel-dot-wrapper">
    <carousel-dot
      v-for="n in countRange"
      :key="n"
      :is-active="n === activeCount"
      class="carousel-dot"
      @click="updateActiveCount(n)"
    />
  </div>
</template>

<script lang="ts">
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
  emits: ['updateActiveCount'],
  setup(props, { emit }) {
    const countRange = [...Array(props.totalCount)].map((_, i) => ++i);
    const updateActiveCount = (n: number) => {
      emit('updateActiveCount', n);
    };
    return {
      countRange,
      updateActiveCount,
    };
  },
});
</script>

<style scoped>
.carousel-dot-wrapper {
  width: 270px;
  display: flex;
  justify-content: center;
}
.carousel-dot {
  margin: 0 4px;
}
</style>
