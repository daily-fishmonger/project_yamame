<template>
  <svg
    :class="classes"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
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
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed, PropType, SetupContext } from 'vue';
import { Size } from '../story';

export default defineComponent({
  name: 'CloseIcon',

  props: {
    label: {
      type: String,
      required: true,
    },
    white: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<Size>,
      default: 'medium',
    },
  },

  emits: ['onClick'],

  setup(props, context: SetupContext) {
    const classes = computed(() => {
      return {
        'close-icon--white': props.white,
        'close-icon--black': !props.white,
        [`close-icon--${props.size}`]: true,
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
.close-icon--black {
  fill: #000;
}
.close-icon--white {
  fill: #fff;
}
.close-icon--small {
  width: 14px;
  height: 14px;
}
.close-icon--medium {
  width: 20px;
  height: 20px;
}
</style>
