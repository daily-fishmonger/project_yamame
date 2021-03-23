import CloseIcon from './CloseIcon.vue';
import { Meta, Story } from '@storybook/vue3';

export default {
  title: 'Atoms/icon/close',
  component: CloseIcon,
  args: { label: 'CloseIcon' },
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium'] },
    },
    white: {
      control: { type: 'select', options: [true, false] },
    },
  },
} as Meta;

const template: Story = (args) => ({
  components: { CloseIcon },
  setup() {
    return { args };
  },
  template: '<close-icon @onClick="onClick" v-bind="args" />',
});

export const Basic = template.bind({});
