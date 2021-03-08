<template>
  <span :class="classes"></span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

type Classes = {
  [key: string]: boolean;
};

export default defineComponent({
  name: 'CarouselDot',
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes(): Classes {
      return {
        'carousel-dot': true,
        'carousel-dot--active': this.isActive,
        'carousel-dot--inactive': !this.isActive,
      };
    },
  },
});
</script>

<style scoped>
.carousel-dot {
  height: 10px;
  width: 10px;
  display: inline-block;
  border-radius: 50%;
}
.carousel-dot--active {
  background-color: #5151e3;
}
.carousel-dot--inactive {
  background-color: #c4c4c4;
}
</style>
