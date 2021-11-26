import Help from './Help.vue';
import { Meta, Story } from '@storybook/vue3';
import helpFirst from '@/assets/sample.png';
import helpSecond from '@/assets/sample2.png';

export default {
  title: 'Molecules/Help',
  component: Help,
  args: { label: 'Help' },
  argTypes: {
    imgsTexts: {
      control: { type: 'object' },
    },
  },
} as Meta;

export const template: Story = (args) => ({
  components: { Help },
  setup() {
    const sample = [
      {
        img: helpFirst,
        title: 'サンプルタイトル',
        text:
          'サンプルテキストサンプル\nサンプルテキストサンプル\nサンプルテキストサンプル',
      },
      {
        img: helpSecond,
        title: 'サンプルタイトル',
        text:
          'サンプルテキストサンプル\nサンプルテキストサンプル\nサンプルテキストサンプル',
      },
    ];

    return {
      args,
      sample,
    };
  },
  template: '<help @onClick="onClick" v-bind="args" :helpContents="sample"/>',
});
