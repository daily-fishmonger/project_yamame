import Playing from './Playing.vue';
import { Meta, Story } from '@storybook/vue3';

export default {
  title: 'Templates/Playing',
  component: Playing,
  args: {},
} as Meta;

export const Basic: Story = (args) => ({
  components: { Playing },
  setup() {
    return { args };
  },
  template: '<playing v-bind="args" />',
});
