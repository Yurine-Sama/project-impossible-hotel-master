<template>
  <v-container>
    <div style="margin-top: 10px">
      <h1 class="text-center display-2">เลือกเวลาเข้าพัก</h1>
      <v-from id="">
        <v-row>
          <v-col cols="12" sm="6">
            <v-date-picker v-model="dates" range></v-date-picker>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="dateRangeText"
              label="Date range"
              prepend-icon="mid-calendar"
              readonly
            ></v-text-field>
            model: {{ dates }}
          </v-col>
        </v-row>
        <v-btn>Sumit</v-btn>
      </v-from>
    </div>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    dates: ["2019-09-10", "2019-09-20"]
  }),
  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ");
    }
  }
};
</script>
