<template>
  <div id="HomeComponent">
    <v-parallax
      dark
      transition="slide-x-transition"
      src="https://wallpaperaccess.com/full/2568998.jpg"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 subheading mb-4 hotal-title ">
            Welcome
          </h1>
          <h3 class="font-weight-thin hotal-title">
            <span>
              <div>
                to Impossible Hotel
              </div>
            </span>
          </h3>
        </v-col>
      </v-row>
    </v-parallax>
    <v-container>
      <h1 class="mt-2 mb-4" style="color: gray">Small Rooms</h1>
      <v-row align="center" justify="center">
        <v-col cols="12" md="4" v-for="crad in SmallRoom" :key="crad.title">
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              max-width="400"
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
              outlined
              shaped
            >
              <v-img
                class="white--text align-end"
                height="200px"
                :src="crad.src"
              >
                <!-- <v-card-title
                ><h4 class="red--text">
                  {{ crad.title }}
                </h4></v-card-title
              > -->
              </v-img>

              <v-card-subtitle class="pb-0 blue--text">
                {{ crad.title }}
              </v-card-subtitle>

              <v-card-text class="red--text">
                <h4>{{ crad.text }}</h4>
              </v-card-text>

              <v-card-actions>
                <v-btn color="orange" text>
                  Book
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <v-container>
        <h1 class="mt-2 mb-4" style="color: gray">Big Rooms</h1>
        <v-row align="center" justify="center">
          <v-col cols="12" md="4" v-for="crad in BigRoom" :key="crad.title">
            <v-hover v-slot:default="{ hover }">
              <v-card
                class="mx-auto"
                max-width="400"
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
                outlined
                shaped
              >
                <v-img
                  class="white--text align-end"
                  height="200px"
                  :src="crad.src"
                >
                  <!-- <v-card-title
                  ><h4 class="red--text">
                    {{ crad.title }}
                  </h4></v-card-title
                > -->
                </v-img>

                <v-card-subtitle class="pb-0 blue--text">
                  {{ crad.title }}
                </v-card-subtitle>

                <v-card-text class="red--text">
                  <h4>{{ crad.text }}</h4>
                </v-card-text>

                <v-card-actions>
                  <v-btn color="orange" text>
                    Book
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      SmallRoom: [
        {
          id: 101,
          title: "Japan style",
          src: "https://www.forfur.com/img/I53/l_5234_14484298912116161592.jpg",
          text: "เตียงนอน 1 มีวิวติดทะเลให้ดู"
        },
        {
          id: 102,
          title: "Kawaii style",
          src: "https://www.forfur.com/img/I66/l_6536_1499244363235188519.jpg",
          text: "เตียงติดหน้าต่าง ตื่นมาพร้อมดูวิว"
        },
        {
          id: 103,
          title: "Relax style",
          src:
            "https://www.chillpainai.com/src/wewakeup/scoop/img_scoop/scoop/KredNoi/Bedroom/SingleBeddedRoom01.jpg",
          text: "ห้องนอนเล็กๆ เหมาะสำหรับคนโสด"
        },
        {
          id: 104,
          title: "Best airlines",
          src:
            "http://ungsriwong.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2016/11/14094625/Gracery_001.jpg",
          text: "เตียงสำหรับ 1 คน พร้อมโต๊ะสำหรับทำงาน"
        },
        {
          id: 105,
          title: "Best Tofu",
          src:
            "http://ungsriwong.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2015/12/02074521/ShinjukuPrince_02.jpg",
          text: "เตียงสำหรับ 1 คน มีโซฟาให้พร้อม"
        },
        {
          id: 106,
          title: "Sotetsu Fresa",
          src:
            "https://4.bp.blogspot.com/-RzKu-RkI7Dg/WUnbNKgxwLI/AAAAAAAAJUA/LMWGTCkIwvASHlQORVTo_N_vkCsa9f4swCLcBGAs/s1600/SotetsuFresa-Tokyo-Toyocho-11.jpg",
          text: "เตียงสำหรับ 2 คน มี ทีวี พร้อมกับเฟอร์นิเจอร์ที่ครบเครื่อง"
        }
      ],
      BigRoom: [
        {
          id: 201,
          title: "Japan style",
          src:
            "https://cf.bstatic.com/images/hotel/max1024x768/228/228042008.jpg",
          text: "เตียงนอน 2 มีวิวติดทะเลให้ดู"
        },
        {
          id: 202,
          title: "Kawaii style",
          src:
            "https://cf.bstatic.com/images/hotel/max1280x900/228/228029997.jpg",
          text: "เตียงติดหน้าต่าง ตื่นมาพร้อมดูวิว"
        },
        {
          id: 203,
          title: "Relax style",
          src:
            "https://pix10.agoda.net/hotelImages/594/5944987/5944987_19031415030072998779.jpg",
          text: "ห้องนอนใหญ่ เหมาะสำหรับครอบครัว"
        },
        {
          id: 204,
          title: "Best airlines",
          src:
            "http://www.bloggang.com/data/h/happy2trips/picture/1490765573.jpg",
          text: "เตียงใหญ่สำหรับ 2 คน พร้อมทีวี"
        },
        {
          id: 205,
          title: "Best Tofu",
          src: "https://www.forfur.com/img/I32/l_3107_1372162984311073507.jpg",
          text: "ห้องพักหร้อมกับธรรมชาติ"
        },
        {
          id: 206,
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

<style scope="this api replaced by slot-scope in 2.5.0+">
.hotal-title {
  color: #2196f3;
  font-size: 52px;
  margin: 1px;
  font-weight: 700;
  text-transform: uppercase;
}
.hotal-title span {
  color: #01579b;
  font-weight: 900;
  font-style: italic;
  font-family: cursive;
  text-transform: uppercase;
}
.v-card {
  transition: opacity 0.4s ease-in-out;
}
</style>
