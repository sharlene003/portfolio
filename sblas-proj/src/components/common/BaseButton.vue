<template>
  <q-btn
    no-caps
    :type="type"
    :color="disabled ? 'grey-5' : color"
    :icon="icon"
    :icon-right="iconRight"
    :text-color="textColor"
    :disable="disabled"
    :loading="loading"
    :label="label"
    :class="`${btnClass} font-weight-700`"
    :to="redirectTo"
    @click="emit('click')"
  />
</template>
<script setup>
defineProps({
  type: {
    type: String,
    default: "submit",
  },
  label: {
    type: String,
  },
  icon: String,
  iconRight: String,
  btnClass: {
    type: String,
    default: "full-width",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: "primary",
  },
  textColor: {
    type: String,
    default: "white",
  },
  redirectTo: {
    type: [Object, String],
    default: undefined,
  },
});

const emit = defineEmits(["click"]);
</script>
<style lang="scss"></style>
