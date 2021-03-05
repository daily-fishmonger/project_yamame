import TextButton from '../components/atoms/TextButton.vue';

export default {
  title: 'Atoms/TextButton',
  component: TextButton,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TextButton },
  template: '<text-button @onClick="onClick" v-bind="$props" />',
});

export const Sample = Template.bind({});
Sample.args = {
  label: 'ボタンテキスト',
};
