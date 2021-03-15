import RestartIcon from './RestartIcon.vue';
import { Meta, Story } from '@storybook/vue3';

export default {
  title: 'Atoms/icon/restart',
  component: RestartIcon,
  args: { label: 'RestartIcon' },
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium'] },
    },
  },
} as Meta;

const template: Story = (args) => ({
  components: { RestartIcon },
  setup() {
    return { args };
  },
  template: '<restart-icon @onClick="onClick" v-bind="args" />',
});

export const Small = template.bind({});
Small.args = {
  size: 'small',
  label: 'RestartIcon',
};

export const Medium = template.bind({});
Medium.args = {
  size: 'medium',
  label: 'RestartIcon',
};
