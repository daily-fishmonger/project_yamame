import Timer from './Timer.vue';
import { Meta } from '@storybook/vue3';

export default {
  title: 'Atoms/Timer',
  component: Timer,
} as Meta;

export const Basic = () => ({
  components: { Timer },
  template: '<timer />',
});
