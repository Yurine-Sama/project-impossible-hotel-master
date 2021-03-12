<template>
  <v-app>
    <!-- <Pageload /> -->
    <nav>
      <v-card class="overflow-hidden">
        <v-app-bar
          app
          clipped-left
          flat
          color="grey darken-3"
          overlay
          dark
          height="70px"
        >
          <v-app-bar-nav-icon
            v-if="!permanent"
            @click="drawer = true"
          ></v-app-bar-nav-icon>

          <v-toolbar-title class="mr-2">Impossible Hotel</v-toolbar-title
          ><v-list-item-icon>
            <v-icon>mdi-domain</v-icon>
          </v-list-item-icon>
          <v-spacer></v-spacer>

          <span>Sigh Out</span>

          <v-btn icon>
            <v-icon>mdi-export</v-icon>
          </v-btn>
        </v-app-bar>

        <v-navigation-drawer
          app
          clipped
          flat
          dark
          expand-on-hover
          temporary
          v-model="drawer"
          :permanent="permanent"
          src="https://i.pinimg.com/originals/29/ca/de/29cadec616d01965d0274e4cf2bb0c15.gif"
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
          <router-view style="margin-top: none" />
        </v-main>
        <template>
          <v-footer dark padless>
            <v-card class="flex" flat tile>
              <v-card-title class="indigo">
                <strong class="subheading"
                  >Get connected with us on social networks!</strong
                >

                <v-spacer></v-spacer>

                <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
                  <v-icon size="24px">
                    {{ icon }}
                  </v-icon>
                </v-btn>
              </v-card-title>

              <v-card-text class="py-2 white--text text-center">
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
              </v-card-text>
            </v-card>
          </v-footer>
        </template>
      </v-card>
    </nav>
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
      ["mdi-account-tie", "Admin only", "#"],
      ["mdi-calendar", "Date", "/cDate"]
    ],
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],

    drawer: false
  }),
  components: {
    // Pageload
  }
};
</script>
