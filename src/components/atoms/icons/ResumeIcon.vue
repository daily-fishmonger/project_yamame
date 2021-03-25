<template>
  <icon-base :label="ResumeIcon" :size="size" :white="white">
    <g clip-path="url(#clip0)">
      <path
        d="M18.0781 8.38669L4.32813 0.257781C3.21094 -0.402375 1.5 0.23825 1.5 1.87106V18.125C1.5 19.5898 3.08984 20.4726 4.32813 19.7382L18.0781 11.6132C19.3047 10.8906 19.3086 9.10934 18.0781 8.38669Z"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </icon-base>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import IconBase from './IconBase.vue';
import { Props } from '@/components/story';

export default defineComponent({
  name: 'ResumeIcon',
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
