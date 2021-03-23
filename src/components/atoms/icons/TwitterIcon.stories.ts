import TwitterIcon from './TwitterIcon.vue';
import { Meta, Story } from '@storybook/vue3';

export default {
  title: 'Atoms/icon/twitter',
  component: TwitterIcon,
  args: { label: 'TwitterIcon' },
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
  components: { TwitterIcon },
  setup() {
    return { args };
  },
  template: '<twitter-icon @onClick="onClick" v-bind="args" />',
});

export const Basic = template.bind({});
