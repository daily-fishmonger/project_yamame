<template>
  <span :class="classes"></span>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

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
  setup(props) {
    const classes = computed(
      (): Classes => {
        return {
          'carousel-dot': true,
          'carousel-dot--active': props.isActive,
          'carousel-dot--inactive': !props.isActive,
        };
      }
    );
    return {
      classes,
    };
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
