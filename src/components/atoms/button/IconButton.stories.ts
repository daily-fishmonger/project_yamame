import IconButton from './IconButton.vue';
import { Meta, Story } from '@storybook/vue3';

export default {
  title: 'Atoms/IconButton',
  component: IconButton,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'orange'],
      },
    },
  },
} as Meta;

const Basic: Story = (args) => ({
  components: { IconButton },
  setup() {
    return { args };
  },
  template: '<icon-button @onClick="onClick" v-bind="args" />',
});

export const Small = Basic.bind({});
Small.args = {
  size: 'small',
};

export const Medium = Basic.bind({});
Medium.args = {
  size: 'medium',
};

export const Primary = Basic.bind({});
Primary.args = {
  color: 'primary',
};

export const Secondary = Basic.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Orange = Basic.bind({});
Orange.args = {
  color: 'orange',
};
