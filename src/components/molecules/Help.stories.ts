import Help from './Help.vue';
import { Meta, Story } from '@storybook/vue3';

export default {
  title: 'Molecules/help',
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
        img: 'sample.png',
        title: 'サンプルタイトル',
        text:
          'サンプルテキストサンプル\nサンプルテキストサンプル\nサンプルテキストサンプル',
      },
      {
        img: 'sample.png',
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
