import StartFinishBase from './StartFinishBase.vue';
import { Meta, Story } from '@storybook/vue3';

export default {
  title: 'Templates/StartFinishBase',
  component: StartFinishBase,
} as Meta;

const Basic: Story = (args) => ({
  components: { StartFinishBase },
  setup() {
    return { args };
  },
  template: '<start-finish-base v-bind="args" />',
});

export const Start = Basic.bind({});
Start.args = {
  page: 'start',
};

export const Result = Basic.bind({});
Result.args = {
  page: 'result',
};
