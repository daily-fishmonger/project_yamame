import IconButton from './IconButton.vue';
import { Meta, Story } from '@storybook/vue3';
import { IconButtonColor, IconType, Props } from '../../story';

export default {
  title: 'Atoms/IconButton',
  component: IconButton,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium'] as Props['size'][],
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'orange'] as IconButtonColor[],
      },
    },
  },
} as Meta;

export const IconButtonList: Story = (args) => ({
  components: { IconButton },
  setup() {
    const iconTypeList: IconType[] = [
      'close',
      'home',
      'pause',
      'restart',
      'resume',
      'twitter',
    ];
    return {
      args,
      iconTypeList,
    };
  },
  template: `
  <div v-for="icon in iconTypeList">
    <icon-button @onClick="onClick" v-bind="args" :iconType="icon" />
  </div>
  `,
});
