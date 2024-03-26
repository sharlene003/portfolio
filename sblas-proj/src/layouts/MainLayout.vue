<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          class="menu"
          @click="toggleLeftDrawer"
        />
        <q-space />
        <a href="https://www.linkedin.com/in/sharlene-blas-479a33184">
          <q-btn flat round dense class="q-mr-xs">
            <q-img src="../../src/assets/linkedin_logo.png" />
          </q-btn>
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=blas.sharlene@gmail.com&su=SUBJECT&body=BODY"
        >
          <q-btn flat round dense class="q-mr-xs">
            <q-img src="../../src/assets/gmail_logo.png" />
          </q-btn>
        </a>

        <!-- <q-toolbar-title>
          Quasar App
        </q-toolbar-title> -->

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list class="q-mt-5">
        <div class="text-center q-mt-md q-mb-xl">
          <q-avatar size="100px">
            <img src="/icons/sblas.jpg" />
          </q-avatar>
        </div>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
        <div class="q-mx-md">
          © Copyright 2024 All rights reserved. Made with
          <q-icon name="favorite" style="height: 10px" /> by sblas
        </div>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Home",
    // caption: 'quasar.dev',
    icon: "home",
    link: "content1",
  },
  {
    title: "About",
    // caption: 'github.com/quasarframework',
    icon: "info",
    link: "content2",
  },
  // {
  //   title: 'Services',
  //   // caption: 'chat.quasar.dev',
  //   icon: 'manage_accounts',
  //   link: 'content3'
  // },
  {
    title: "Skills",
    // caption: 'forum.quasar.dev',
    icon: "psychology",
    link: "content3",
  },
  {
    title: "Experience",
    // caption: '@QuasarFramework',
    icon: "engineering",
    link: "content4",
  },
  {
    title: "Project",
    // caption: 'Community Quasar projects',
    icon: "work",
    link: "content5",
  },
  // {
  //   title: "Blog",
  //   // caption: 'Community Quasar projects',
  //   icon: "favorite",
  //   link: "https://awesome.quasar.dev",
  // },
  // {
  //   title: "Contact",
  //   // caption: 'Community Quasar projects',
  //   icon: "contact_page",
  //   link: "https://awesome.quasar.dev",
  // },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
<style scoped>
@media screen and (max-width: 1023px) {
  .menu {
    display: none;
  }
}
</style>
