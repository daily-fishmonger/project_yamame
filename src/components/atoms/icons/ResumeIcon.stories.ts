import ResumeIcon from './ResumeIcon.vue';
import { Meta, Story } from '@storybook/vue3';

export default {
  title: 'Atoms/icon/resume',
  component: ResumeIcon,
  args: { label: 'ResumeIcon' },
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium'] },
    },
  },
} as Meta;

const template: Story = (args) => ({
  components: { ResumeIcon },
  setup() {
    return { args };
  },
  template: '<resume-icon @onClick="onClick" v-bind="args" />',
});

export const Small = template.bind({});
Small.args = {
  size: 'small',
  label: 'ResumeIcon',
};

export const Medium = template.bind({});
Medium.args = {
  size: 'medium',
  label: 'ResumeIcon',
};
