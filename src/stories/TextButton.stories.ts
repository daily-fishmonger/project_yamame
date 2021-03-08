import TextButton from '../components/atoms/TextButton.vue';
import { Meta, Story } from '@storybook/vue3';

export default {
  title: 'Atoms/TextButton',
  component: TextButton,
  argTypes: {},
} as Meta;

const Template: Story = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TextButton },
  template: '<text-button @onClick="onClick" v-bind="$props" />',
});

export const Normal = Template.bind({});
Normal.args = {
  label: 'ボタンテキスト',
};
