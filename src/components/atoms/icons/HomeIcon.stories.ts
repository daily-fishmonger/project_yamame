import HomeIcon from './HomeIcon.vue';
import { Meta, Story } from '@storybook/vue3';

export default {
  title: 'Atoms/icon/home',
  component: HomeIcon,
  args: { label: 'HomeIcon' },
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium'] },
    },
  },
} as Meta;

const template: Story = (args) => ({
  components: { HomeIcon },
  setup() {
    return { args };
  },
  template: '<home-icon @onClick="onClick" v-bind="args" />',
});

export const Small = template.bind({});
Small.args = {
  size: 'small',
  label: 'HomeIcon',
};

export const Medium = template.bind({});
Medium.args = {
  size: 'medium',
  label: 'HomeIcon',
};
