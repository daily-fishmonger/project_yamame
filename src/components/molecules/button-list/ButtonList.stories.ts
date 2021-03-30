import ButtonList from './ButtonList.vue';
import { Meta, Story } from '@storybook/vue3';

export default {
  title: 'Molecules/ButtonList',
  component: ButtonList,
  argTypes: {
    place: {
      control: {
        type: 'select',
        options: ['modal', 'result'],
      },
    },
  },
} as Meta;

export const Basic: Story = () => ({
  components: { ButtonList },
  template: '<button-list />',
});
