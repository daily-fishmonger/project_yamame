<template>
  <svg
    :class="classes"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
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
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed, PropType, SetupContext } from 'vue';
import { Size } from '@/components/story';

export default defineComponent({
  name: 'ResumeIcon',

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
        'resume-icon--white': props.white,
        'resume-icon--black': !props.white,
        [`resume-icon--${props.size}`]: true,
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
.resume-icon--black {
  fill: #000;
}
.resume-icon--white {
  fill: #fff;
}
.resume-icon--small {
  width: 14px;
  height: 14px;
}
.resume-icon--medium {
  width: 20px;
  height: 20px;
}
</style>
