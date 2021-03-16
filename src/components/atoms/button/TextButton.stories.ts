import TextButton from './TextButton.vue';
import { Meta, Story } from '@storybook/vue3';

export default {
  title: 'Atoms/TextButton',
  component: TextButton,
  args: {
    label: 'ボタンテキスト',
  },
} as Meta;

export const Basic: Story = (args) => ({
  components: { TextButton },
  setup() {
    return { args };
  },
  template: '<text-button @onClick="onClick" v-bind="args" />',
});
