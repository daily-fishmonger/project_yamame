<template>
  <icon-base :label="HomeIcon" :size="size" :white="white">
    <path
      d="M6.42857 20H2.14286C0.959821 20 0 19.0402 0 17.8571V2.14286C0 0.959821 0.959821 0 2.14286 0H6.42857C7.61161 0 8.57143 0.959821 8.57143 2.14286V17.8571C8.57143 19.0402 7.61161 20 6.42857 20ZM20 17.8571V2.14286C20 0.959821 19.0402 0 17.8571 0H13.5714C12.3884 0 11.4286 0.959821 11.4286 2.14286V17.8571C11.4286 19.0402 12.3884 20 13.5714 20H17.8571C19.0402 20 20 19.0402 20 17.8571Z"
    />
  </icon-base>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import IconBase from './IconBase.vue';
import { Props } from '@/components/story';

export default defineComponent({
  name: 'PauseIcon',
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
