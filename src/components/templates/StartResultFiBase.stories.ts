import StartResultBase from './StartResultBase.vue';
import { Meta, Story } from '@storybook/vue3';
import { Pages } from '../story';

export default {
  title: 'Templates/StartResultBase',
  component: StartResultBase,
  argTypes: {
    page: {
      control: {
        type: 'select',
        options: ['start', 'result'] as Pages[],
      },
    },
  },
} as Meta;

export const Basic: Story = (args) => ({
  components: { StartResultBase },
  setup() {
    return { args };
  },
  template: '<start-result-base v-bind="args" />',
});
