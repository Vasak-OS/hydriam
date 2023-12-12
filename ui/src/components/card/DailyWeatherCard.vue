<script lang="ts">
import { defineComponent } from 'vue';
import WeatherIcon from '@/components/icon/WeatherIcon.vue';

export default defineComponent({
  name: 'DailyWeatherCard',
  props: {
    min: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    },
    units: {
      type: Object,
      required: true
    },
    dayOrNight: {
      type: String,
      required: true
    },
    weatherCode: {
      type: Number,
      required: true
    }
  },
  components: {
    WeatherIcon
  }
});
</script>
<template>
  <div class="col text-center">
    <div class="col-12">
      <WeatherIcon :code="weatherCode" :dayOrNight="dayOrNight" />
    </div>
    <div class="col-12 temp-text">{{ max }}</div>
    <div class="col-12 temp-text">{{ min }}</div>
  </div>
</template>
