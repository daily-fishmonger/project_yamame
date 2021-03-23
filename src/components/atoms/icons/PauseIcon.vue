<template>
  <svg
    :class="classes"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.42857 20H2.14286C0.959821 20 0 19.0402 0 17.8571V2.14286C0 0.959821 0.959821 0 2.14286 0H6.42857C7.61161 0 8.57143 0.959821 8.57143 2.14286V17.8571C8.57143 19.0402 7.61161 20 6.42857 20ZM20 17.8571V2.14286C20 0.959821 19.0402 0 17.8571 0H13.5714C12.3884 0 11.4286 0.959821 11.4286 2.14286V17.8571C11.4286 19.0402 12.3884 20 13.5714 20H17.8571C19.0402 20 20 19.0402 20 17.8571Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed, PropType, SetupContext } from 'vue';
import { Props } from '@/components/story';

export default defineComponent({
  name: 'PauseIcon',

  props: {
    label: {
      type: String as PropType<Props['label']>,
      required: true,
    },
    white: {
      type: Boolean as PropType<Props['isWhite']>,
      default: true,
    },
    size: {
      type: String as PropType<Props['size']>,
      default: 'medium',
    },
  },

  emits: ['onClick'],

  setup(props, context: SetupContext) {
    const classes = computed(() => {
      return {
        'pause-icon--white': props.white,
        'pause-icon--black': !props.white,
        [`pause-icon--${props.size}`]: true,
      };
    });

    const onClick = (): void => {
      context.emit('onClick');
    };

    return {
      classes,
      onClick,
    };
  },
});
</script>

<style scoped>
.pause-icon--black {
  fill: #000;
}
.pause-icon--white {
  fill: #fff;
}
.pause-icon--small {
  width: 14px;
  height: 14px;
}
.pause-icon--medium {
  width: 20px;
  height: 20px;
}
</style>
