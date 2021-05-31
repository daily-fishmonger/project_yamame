import StartResultBase from './StartResultBase.vue';
import { Meta, Story } from '@storybook/vue3';

export default {
  title: 'Templates/StartResultBase',
  component: StartResultBase,
} as Meta;

const Basic: Story = (args) => ({
  components: { StartResultBase },
  setup() {
    return { args };
  },
  template: '<start-result-base v-bind="args" />',
});

export const Start = Basic.bind({});
Start.args = {
  page: 'start',
};

export const Result = Basic.bind({});
Result.args = {
  page: 'result',
};
