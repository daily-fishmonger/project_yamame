import TextButton from './TextButton.vue';
import { Meta, Story } from '@storybook/vue3';
import { TextButtonColor } from '@/components/story';

export default {
  title: 'Atoms/TextButton',
  component: TextButton,
  args: {
    label: 'ボタンテキスト',
  },
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['blue', 'purple'] as TextButtonColor[],
      },
    },
  },
} as Meta;

export const Basic: Story = (args) => ({
  components: { TextButton },
  setup() {
    return { args };
  },
  template: '<text-button @onClick="onClick" v-bind="args" />',
});
