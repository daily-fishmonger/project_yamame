<template>
  <button type="button" :class="classes" :style="style" @click="onClick">
    {{ label }}
  </button>
</template>

<script lang="ts">
import './button.css';

type Classes = {
  [key: string]: boolean;
};

type Style = {
  backgroundColor: string;
};

export default {
  name: 'MyButton',

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'medium',
      validator: function (value: string): boolean {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
      default: '',
    },
  },

  emits: ['onClick'],

  computed: {
    classes(): Classes {
      return {
        'storybook-button': true,
        'storybook-button--primary': this.primary,
        'storybook-button--secondary': !this.primary,
        [`storybook-button--${this.size}`]: true,
      };
    },
    style(): Style {
      return {
        backgroundColor: this.backgroundColor,
      };
    },
  },

  methods: {
    onClick(): void {
      this.$emit('onClick');
    },
  },
};
</script>
