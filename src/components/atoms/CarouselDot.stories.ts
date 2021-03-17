import CarouselDot from './CarouselDot.vue';
import { Meta, Story } from '@storybook/vue3';

export default {
  title: 'Atoms/CarouselDot',
  component: CarouselDot,
} as Meta;

export const Basic: Story = (args) => ({
  components: { CarouselDot },
  setup() {
    return { args };
  },
  template: '<carousel-dot v-bind="args" />',
});

export const Active = Basic.bind({});
Active.args = {
  isActive: true,
};

export const Inactive = Basic.bind({});
Inactive.args = {
  isActive: false,
};
