import CarouselDotList from './CarouselDotList.vue';
import { Meta, Story } from '@storybook/vue3';

export default {
  title: 'Molecules/CarouselDotList',
  component: CarouselDotList,
  args: {
    totalCount: 3,
  },
} as Meta;

const Basic: Story = (args) => ({
  components: { CarouselDotList },
  setup() {
    return { args };
  },
  template: '<carousel-dot-list v-bind="args" />',
});

export const First = Basic.bind({});
First.args = {
  activeCount: 1,
};

export const Second = Basic.bind({});
Second.args = {
  activeCount: 2,
};

export const Third = Basic.bind({});
Third.args = {
  activeCount: 3,
};
