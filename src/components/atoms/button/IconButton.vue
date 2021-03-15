<template>
  <button type="button" :class="classes" @click="onClick"></button>
</template>

<script lang="ts">
import { defineComponent, SetupContext, PropType, computed } from 'vue';

type Classes = {
  [key: string]: boolean;
};

type IconButtonSize = 'small' | 'medium';

type IconButtonColor = 'primary' | 'secondary' | 'orange';

export default defineComponent({
  name: 'IconButton',
  props: {
    size: {
      type: String as PropType<IconButtonSize>,
      default: 'medium',
    },
    color: {
      type: String as PropType<IconButtonColor>,
      default: 'primary',
    },
  },
  emits: ['onClick'],
  setup(props, context: SetupContext) {
    const classes = computed(
      (): Classes => {
        return {
          'icon-btn': true,
          [`icon-btn--${props.size}`]: true,
          [`icon-btn--${props.color}`]: true,
        };
      }
    );
    const onClick = () => {
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
.icon-btn {
  border-radius: 50%;
  align-items: center;
  outline: none;
  border: 0;
  cursor: pointer;
}
.icon-btn--primary {
  background-color: #5151e3;
}
.icon-btn--secondary {
  background-color: #96c3ed;
}
.icon-btn--orange {
  background-color: #f9a441;
}
.icon-btn--small {
  height: 30px;
  width: 30px;
}
.icon-btn--medium {
  height: 40px;
  width: 40px;
}
</style>
