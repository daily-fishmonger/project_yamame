import CloseIcon from './CloseIcon.vue';
import HomeIcon from './HomeIcon.vue';
import PauseIcon from './PauseIcon.vue';
import RestartIcon from './RestartIcon.vue';
import ResumeIcon from './ResumeIcon.vue';
import TwitterIcon from './TwitterIcon.vue';
import { Meta, Story } from '@storybook/vue3';

export default {
  title: 'Atoms/IconList',
  component: CloseIcon,
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium'] },
    },
    white: {
      control: { type: 'select', options: [true, false] },
    },
  },
} as Meta;

export const IconList: Story = (args) => ({
  components: {
    CloseIcon,
    HomeIcon,
    PauseIcon,
    RestartIcon,
    ResumeIcon,
    TwitterIcon,
  },
  setup() {
    return {
      args,
    };
  },
  template: `
  <div style="display: grid; gap: 12px;">
    <close-icon @onClick="onClick" v-bind="args" />
    <home-icon @onClick="onClick" v-bind="args" />
    <pause-icon @onClick="onClick" v-bind="args" />
    <restart-icon @onClick="onClick" v-bind="args" />
    <resume-icon @onClick="onClick" v-bind="args" />
    <twitter-icon @onClick="onClick" v-bind="args" />
  </div>
  `,
});
