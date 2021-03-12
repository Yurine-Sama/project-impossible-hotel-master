<template v-slot:placeholder>
  <div id="HomeComponent">
    <v-parallax
      dark
      transition="slide-x-transition"
      src="https://cutewallpaper.org/21/black-gif-background/Black-gif-background-3-GIF-Images-Download.gif"
      height="850"
      width="auto"
      fixed
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 subheading mb-4 hotal-title ">
            <div class="v-enter-active" v-if="!isloaded">
              Welcome
            </div>
          </h1>
          <h3 class="font-weight-thin hotal-title">
            <span>
              <div class="v-enter-active" v-if="!isloaded">
                to Impossible Hotel
              </div>
            </span>
          </h3>
          <div class="text-center v-enter-active" v-if="!isloaded">
            <v-btn class="ma-2" outlined color="yellow">Visit My Site</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-parallax>
    <div>
      <v-container>
        <h1 class="mt-2 mb-4 bor text-center sp" style="color: white">
          Small Rooms
        </h1>
        <v-row align="center" justify="center">
          <v-col cols="12" md="4" v-for="crad in SmallRoom" :key="crad.title">
            <v-hover v-slot="{ hover }">
              <v-card
                class="mx-auto  hovereffect"
                max-width="400"
                :elevation="hover ? 12 : 2"
                outlined
                shaped
              >
                <v-img
                  class="white--text align-end img-responsive"
                  :aspect-ratio="16 / 9"
                  height="200px"
                  :src="crad.src"
                >
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                      style="height: 100%;"
                    >
                      {{ crad.price }} $
                    </div>
                  </v-expand-transition>
                </v-img>

                <v-card-subtitle class="pb-0 blue--text">
                  {{ crad.title }}
                </v-card-subtitle>

                <v-card-text class="red--text">
                  <h4>{{ crad.text }}</h4>
                </v-card-text>

                <v-card-actions>
                  <v-bottom-sheet v-model="sheet" inset>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn dark color="orange" v-bind="attrs" v-on="on" text>
                        Book
                      </v-btn>
                    </template>
                    <v-sheet class="text-center" height="200px">
                      <v-btn
                        class="mt-6"
                        text
                        color="error"
                        @click="sheet = !sheet"
                      >
                        close
                      </v-btn>
                      <div class="my-3">
                        This is a bottom sheet using the inset prop
                      </div>
                    </v-sheet>
                  </v-bottom-sheet>
                </v-card-actions>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div id="grey">
      <v-container>
        <div>
          <h1 class="mt-2 mb-4 bor text-center sp" style="color: white">
            Big Rooms
          </h1>
          <v-row align="center" justify="center">
            <v-col cols="12" md="4" v-for="crad in BigRoom" :key="crad.title">
              <v-hover v-slot="{ hover }">
                <v-card
                  class="mx-auto"
                  max-width="400"
                  :elevation="hover ? 12 : 2"
                  outlined
                  shaped
                >
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="crad.src"
                  >
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                        style="height: 100%;"
                      >
                        {{ crad.price }} $
                      </div>
                    </v-expand-transition>
                  </v-img>

                  <v-card-subtitle class="pb-0 blue--text">
                    {{ crad.title }}
                  </v-card-subtitle>

                  <v-card-text class="red--text">
                    <h4>{{ crad.text }}</h4>
                  </v-card-text>

                  <v-card-actions>
                    <v-bottom-sheet v-model="sheet" inset>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          dark
                          color="orange"
                          v-bind="attrs"
                          v-on="on"
                          text
                        >
                          Book
                        </v-btn>
                      </template>
                      <v-sheet class="text-center" height="200px">
                        <v-btn
                          class="mt-6"
                          text
                          color="error"
                          @click="sheet = !sheet"
                        >
                          close
                        </v-btn>
                        <div class="my-3">
                          This is a bottom sheet using the inset prop
                        </div>
                      </v-sheet>
                    </v-bottom-sheet>
                  </v-card-actions>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: () => {
        return {
          isloaded: false,
          sheet: false
        };
      },
      mounted() {
        this.images = true;
        document.onreadystatechange = () => {
          if (document.readyState == "complete") {
            this.isloaded = true;
          }
        };
      },

      SmallRoom: [
        {
          id: 101,
          price: "800",
          title: "Japan style",
          src: "https://www.forfur.com/img/I53/l_5234_14484298912116161592.jpg",
          text: "เตียงนอน 1 มีวิวติดทะเลให้ดู"
        },
        {
          id: 102,
          price: "500",
          title: "Kawaii style",
          src: "https://www.forfur.com/img/I66/l_6536_1499244363235188519.jpg",
          text: "เตียงติดหน้าต่าง ตื่นมาพร้อมดูวิว"
        },
        {
          id: 103,
          price: "555",
          title: "Relax style",
          src:
            "https://www.chillpainai.com/src/wewakeup/scoop/img_scoop/scoop/KredNoi/Bedroom/SingleBeddedRoom01.jpg",
          text: "ห้องนอนเล็กๆ เหมาะสำหรับคนโสด"
        },
        {
          id: 104,
          price: "750",
          title: "Best airlines",
          src:
            "http://ungsriwong.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2016/11/14094625/Gracery_001.jpg",
          text: "เตียงสำหรับ 1 คน พร้อมโต๊ะสำหรับทำงาน"
        },
        {
          id: 105,
          price: "1,000",
          title: "Best Tofu",
          src:
            "http://ungsriwong.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2015/12/02074521/ShinjukuPrince_02.jpg",
          text: "เตียงสำหรับ 1 คน มีโซฟาให้พร้อม"
        },
        {
          id: 106,
          price: "999",
          title: "Sotetsu Fresa",
          src:
            "https://4.bp.blogspot.com/-RzKu-RkI7Dg/WUnbNKgxwLI/AAAAAAAAJUA/LMWGTCkIwvASHlQORVTo_N_vkCsa9f4swCLcBGAs/s1600/SotetsuFresa-Tokyo-Toyocho-11.jpg",
          text: "เตียงสำหรับ 2 คน มี ทีวี พร้อมกับเฟอร์นิเจอร์ที่ครบเครื่อง"
        }
      ],
      BigRoom: [
        {
          id: 201,
          price: "1,500",
          title: "Japan style",
          src:
            "https://cf.bstatic.com/images/hotel/max1024x768/228/228042008.jpg",
          text: "เตียงนอน 2 มีวิวติดทะเลให้ดู"
        },
        {
          id: 202,
          price: "2,500",
          title: "Kawaii style",
          src:
            "https://cf.bstatic.com/images/hotel/max1280x900/228/228029997.jpg",
          text: "เตียงติดหน้าต่าง ตื่นมาพร้อมดูวิว"
        },
        {
          id: 203,
          price: "3,500",
          title: "Relax style",
          src:
            "https://pix10.agoda.net/hotelImages/594/5944987/5944987_19031415030072998779.jpg",
          text: "ห้องนอนใหญ่ เหมาะสำหรับครอบครัว"
        },
        {
          id: 204,
          price: "4,500",
          title: "Best airlines",
          src:
            "http://www.bloggang.com/data/h/happy2trips/picture/1490765573.jpg",
          text: "เตียงใหญ่สำหรับ 2 คน พร้อมทีวี"
        },
        {
          id: 205,
          price: "5,500",
          title: "Best Tofu",
          src: "https://www.forfur.com/img/I32/l_3107_1372162984311073507.jpg",
          text: "ห้องพักหร้อมกับธรรมชาติ"
        },
        {
          id: 206,
          price: "6,500",
          title: "Sotetsu Fresa",
          src:
            "https://www.chillpainai.com/src/wewakeup/scoop/img_scoop/scoop/kat/khaoyai%20beautiful/potibot/room_luxe_suite_1main.jpg",
          text: "ห้องพักสุดหรู พร้อมกับสระว่ายน้ำส่วนตัว"
        }
      ]
    };
  }
};
</script>

<style scoped>
/* @import "./assets/Styles/styles.css"; */
</style>
