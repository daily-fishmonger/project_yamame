<template>
  <svg :class="classes" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <slot />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed, PropType, SetupContext } from 'vue';
import { Props, Classes } from '@/components/story';

export default defineComponent({
  name: 'IconBase',

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
    const classes = computed(
      (): Classes => {
        return {
          'icon--white': props.white,
          'icon--black': !props.white,
          [`icon--${props.size}`]: true,
        };
      }
    );

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
.icon--black {
  fill: #000;
}
.icon--white {
  fill: #fff;
}
.icon--small {
  width: 14px;
  height: 14px;
}
.icon--medium {
  width: 20px;
  height: 20px;
}
</style>
