<template>
  <div class="location location__container">
    <div class="location__inner">
      <div class="location-title">OUR BRANCHES</div>
      <div
        class="location__branch"
        v-for="(item, index) in locations"
        :key="index"
      >
        <h1 class="location-name">{{ item.name }}</h1>
        <div class="location-address">Address : {{ item.address }}</div>
        <div class="location-phone">Contact no : {{ item.contact }}</div>
        <div class="location-location">
          Location : <span>{{ item.location }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "location",
  data() {
    return {
      locations: [
        {
          name: "Kathmandu Branch",
          address: "Boudha , Tushal",
          contact: "9851-328-564",
          location: "Google Map",
        },
        {
          name: "Kathmandu Branch",
          address: "Ganabahal , Kichapokhari , New Road, Arniko Complex",
          contact: "9851-213-596",
          location: "Google Map",
        },
        {
          name: "Pokhara Branch",
          address: "Boudha , Tushal",
          contact: "9851-328-564",
          location: "Google Map",
        },
        {
          name: "Butwal Branch",
          address: "Tinkune Chow, Srijana Mart",
          contact: "9811-927-397",
          location: "Google Map",
        },
        {
          name: "Chitwan Branch",
          address: "Chitwan, Pragatipath",
          contact: "056-53348",
          location: "Google Map",
        },
        {
          name: "Itahari Branch",
          address: "Itahari , Sky plaza",
          contact: "9827-023-489",
          location: "Google Map",
        },
        {
          name: "Dharan Branch",
          address: "Putali Line, Maskey complex, Next to Vinayak Digital",
          contact: "9819-358-689",
          location: "Google Map",
        },
      ],
    };
  },
};
</script>

<style></style>
