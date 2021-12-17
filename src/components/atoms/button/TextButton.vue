<template>
  <button type="button" :class="classes" @click="onClick">
    {{ label }}
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, SetupContext, PropType } from 'vue';
import { Props, TextButtonColor, Classes } from '@/components/story';

export default defineComponent({
  name: 'TextButton',
  props: {
    label: {
      type: String as PropType<Props['label']>,
      required: true,
    },
    color: {
      type: String as PropType<TextButtonColor>,
      default: 'blue',
    },
  },
  emits: ['onClick'],
  setup(props, context: SetupContext) {
    const classes = computed(
      (): Classes => {
        return {
          'text-btn': true,
          [`text-btn--${props.color}`]: true,
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
.text-btn {
  height: 52px;
  color: #ffffff;
  background-color: #5151e3;
  border-radius: 36px;
  font-size: 16px;
  padding: 12px 20px;
  align-items: center;
  outline: none;
  border: 0;
  cursor: pointer;
  transition: 0.2s;
  user-select: none;
}
.text-btn--blue {
  background-color: #5151e3;
  box-shadow: 0 2px 0 #24246c;
}
.text-btn--purple {
  background-color: #7b7bed;
  box-shadow: 0 2px 0 #5a5a75;
}
.text-btn:hover {
  background-color: #96c3ed;
  box-shadow: none;
  transform: translateY(2px);
}
</style>
