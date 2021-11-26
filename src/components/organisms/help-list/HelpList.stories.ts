import Help from './HelpList.vue';
import { Meta, Story } from '@storybook/vue3';
import helpFirst from '@/assets/sample.png';
import helpSecond from '@/assets/sample2.png';

export default {
  title: 'Organisms/HelpList',
  component: Help,
  args: { label: 'HelpList' },
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
      [
        {
          img: helpFirst,
          title: 'サンプルタイトル1',
          text:
            'サンプルテキストサンプル\nサンプルテキストサンプル\nサンプルテキストサンプル',
        },
        {
          img: helpSecond,
          title: 'サンプルタイトル2',
          text:
            'サンプルテキストサンプル\nサンプルテキストサンプル\nサンプルテキストサンプル',
        },
      ],
      [
        {
          img: helpFirst,
          title: 'サンプルタイトル3',
          text:
            'サンプルテキストサンプル\nサンプルテキストサンプル\nサンプルテキストサンプル',
        },
        {
          img: helpSecond,
          title: 'サンプルタイトル4',
          text:
            'サンプルテキストサンプル\nサンプルテキストサンプル\nサンプルテキストサンプル',
        },
      ],
    ];

    return {
      args,
      sample,
    };
  },
  template: '<help @onClick="onClick" v-bind="args" :helpList="sample"/>',
});
