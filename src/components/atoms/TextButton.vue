<template>
  <button type="button" :class="classes" @click="onClick">
    {{ label }}
  </button>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from 'vue';

type Classes = {
  [key: string]: boolean;
};

export default defineComponent({
  name: 'TextButton',
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  emits: ['onClick'],
  setup(_, context: SetupContext) {
    const onClick = (): void => {
      context.emit('onClick');
    };
    return {
      onClick,
    };
  },
  computed: {
    classes(): Classes {
      return {
        'text-btn': true,
      };
    },
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
}
.text-btn:hover {
  background-color: #96c3ed;
}
</style>
