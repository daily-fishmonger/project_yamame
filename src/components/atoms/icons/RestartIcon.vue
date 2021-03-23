<template>
  <icon-base :label="RestartIcon" :size="size" :white="white">
    <path
      d="M9.98223 0.312455C7.39359 0.317103 5.04324 1.33718 3.30801 2.99546L1.91293 1.60038C1.3223 1.00976 0.3125 1.42804 0.3125 2.26328V7.49996C0.3125 8.01773 0.732227 8.43746 1.25 8.43746H6.48668C7.32191 8.43746 7.7402 7.42765 7.14961 6.83703L5.51875 5.20617C6.72437 4.0773 8.28441 3.45199 9.9418 3.43769C13.5511 3.40652 16.5935 6.32742 16.5623 10.0565C16.5327 13.5941 13.6647 16.5625 10 16.5625C8.39348 16.5625 6.87512 15.9891 5.67852 14.9392C5.49324 14.7766 5.21344 14.7865 5.03914 14.9608L3.48984 16.5101C3.29953 16.7004 3.30895 17.0107 3.50867 17.191C5.22648 18.7427 7.50289 19.6875 10 19.6875C15.3502 19.6875 19.6875 15.3502 19.6875 10C19.6875 4.65593 15.3263 0.302884 9.98223 0.312455Z"
    />
  </icon-base>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import IconBase from './IconBase.vue';
import { Props } from '@/components/story';

export default defineComponent({
  name: 'RestartIcon',
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
