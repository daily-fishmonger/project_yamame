import PauseIcon from './PauseIcon.vue';
import { Meta, Story } from '@storybook/vue3';

export default {
  title: 'Atoms/icon/pause',
  component: PauseIcon,
  args: { label: 'PauseIcon' },
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
  components: { PauseIcon },
  setup() {
    return { args };
  },
  template: '<pause-icon @onClick="onClick" v-bind="args" />',
});

export const Basic = template.bind({});
