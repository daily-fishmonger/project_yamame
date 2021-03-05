import Timer from "./Timer.vue";

export default {
  title: "Atoms/Timer",
  component: Timer,
};

export const Basic = () => ({
  components: { Timer },
  template: "<timer />",
});
