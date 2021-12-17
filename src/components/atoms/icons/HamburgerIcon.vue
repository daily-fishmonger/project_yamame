<template>
  <icon-base :label="HamburgerIcon" :size="size" :white="white">
    <path d="M2 2H18" stroke-width="4" stroke-linecap="round" />
    <path d="M2 10H18" stroke-width="4" stroke-linecap="round" />
    <path d="M2 18H18" stroke-width="4" stroke-linecap="round" />
  </icon-base>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import IconBase from './IconBase.vue';
import { Props } from '@/components/story';

export default defineComponent({
  name: 'HamburgerIcon',
  components: { IconBase },
  props: {
    white: {
      type: Boolean as PropType<Props['isWhite']>,
      default: true,
    },
    size: {
      type: String as PropType<Props['size']>,
      default: 'medium',
    },
  },
});
</script>
