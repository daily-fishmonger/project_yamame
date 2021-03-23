<template>
  <icon-base :label="CloseIcon" :size="[size]" :white="[white]">
    <g clip-path="url(#clip0)">
      <path
        d="M13.7909 10L19.4767 4.3142C20.1744 3.61648 20.1744 2.48523 19.4767 1.78693L18.2131 0.523295C17.5153 -0.174432 16.3841 -0.174432 15.6858 0.523295L10 6.20909L4.3142 0.523295C3.61648 -0.174432 2.48523 -0.174432 1.78693 0.523295L0.523295 1.78693C-0.174432 2.48466 -0.174432 3.61591 0.523295 4.3142L6.20909 10L0.523295 15.6858C-0.174432 16.3835 -0.174432 17.5148 0.523295 18.2131L1.78693 19.4767C2.48466 20.1744 3.61648 20.1744 4.3142 19.4767L10 13.7909L15.6858 19.4767C16.3835 20.1744 17.5153 20.1744 18.2131 19.4767L19.4767 18.2131C20.1744 17.5153 20.1744 16.3841 19.4767 15.6858L13.7909 10Z"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="20" height="20" />
      </clipPath>
    </defs>
  </icon-base>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import IconBase from './IconBase.vue';
import { Props } from '@/components/story';

export default defineComponent({
  name: 'CloseIcon',
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
