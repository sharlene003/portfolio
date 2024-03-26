<template>
  <div class="text-weight-bold text-h5 text-primary q-mb-xl">
    WORK EXPERIENCE
  </div>
  <div class="q-px-lg q-py-md">
    <q-timeline color="secondary">
      <q-timeline-entry
        title="Yondu Inc."
        subtitle="November 2020 - Present"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :body="position1"
      />

      <q-timeline-entry
        title="BigDish Plc."
        subtitle="February 2020 to November 2020"
        icon="apartment"
        :body="position2"
      />

      <q-timeline-entry
        title="Infotouch Inc."
        subtitle="June 2018 - October 2019"
        icon="apartment"
        :body="position3"
      />
    </q-timeline>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      position1: "Software Engineer",
      position2: "Frontend Web Developer",
      position3: "Fullstack Web Developer",
    };
  },
};
</script>
<style scoped>
body {
  color: #fff;
}
</style>
