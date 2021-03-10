<template>
  <v-app>
    <!-- <Pageload /> -->
    <v-card class="overflow-hidden">
      <v-app-bar
        absolute
        color="#43a047"
        overlay
        dark
        src="https://picsum.photos/1920/1080?random"
        fade-img-on-scroll
        scroll-target="#scrolling-techniques-4"
      >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title class="mr-2">Impossible Hotel</v-toolbar-title
        ><v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        class="blue lighten-2"
      >
        <v-list nav dense>
          <v-list-item-group
            v-for="([icon, text, goto], i) in items"
            :key="i"
            link
            v-model="group"
            active-class="white--text text--accent-4"
          >
            <v-list-item :to="goto">
              <v-list-item-icon>
                <v-icon>{{ icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ text }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <router-view style="margin-top: 50px" />
      </v-main>
    </v-card>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
// import Pageload from "./components/PageLoad";

export default {
  name: "App",

  data: () => ({
    items: [
      ["mdi-home", "Home", "/"],
      ["mdi-account", "Register", "/cReg"],
      ["mdi-account", "Admin only", "#"]
    ],
    drawer: false
  }),
  components: {
    // Pageload
  }
};
</script>
