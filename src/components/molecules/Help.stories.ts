import Help from './Help.vue';
import { Meta, Story } from '@storybook/vue3';

export default {
  title: 'Molecules/help',
  component: Help,
  args: { label: 'Help' },
  argTypes: {
    imgsTexts: {
      control: { type: 'object' },
    },
  },
} as Meta;

export const template: Story = (args) => ({
  components: { Help },
  setup() {
    return { args };
  },
  template: '<help @onClick="onClick" v-bind="args" />',
});
