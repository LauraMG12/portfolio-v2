<script setup lang="ts">
import { computed } from "vue";
import { isSmallDevice } from "@/state/AppState";

import SvgIcon from "./shared/SvgIcon/SvgIcon.vue";

import { footer } from "../content/Footer";

const mobileIconSize = computed(() =>
  isSmallDevice.value ? { width: 55, height: 35 } : undefined
);
</script>

<template>
  <div id="footer">
    <SvgIcon name="logo" :size="mobileIconSize" color="white" />
    <p class="name">{{ footer.name }}</p>
    <div class="contact">
      <p class="footer-contact">
        <a
          aria-label="Open LinkedIn profile"
          unselectable="on"
          href="https://www.linkedin.com/in/laura-ma%C3%B1ogil-gonz%C3%A1lez-30489b14a/"
          target="_blank"
          >{{ footer.linkedIn }}</a
        >
      </p>
      <p class="footer-contact">
        <a
          aria-label="Open email composer"
          unselectable="on"
          :href="`mailto:${footer.professionalEmail}`"
          >{{ footer.professionalEmail }}</a
        >
      </p>
      <p class="footer-contact">
        <a
          aria-label="Open GitHub profile"
          unselectable="on"
          href="https://github.com/LauraMG12"
          target="_blank"
          >{{ footer.gitHub }}</a
        >
      </p>
    </div>
    <p class="authory">@ <span>Laura Mañogil</span> Portfolio 2023</p>
  </div>
</template>

<style scoped lang="scss">
#footer {
  width: 100vw;
  height: 15rem;
  background-color: $black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  gap: 10px;
  color: $white;
  margin-top: 10rem;
  @media screen and (max-width: $breackpoint-medium) {
    height: 14rem;
  }
  .name {
    font-size: 1.3rem;
    font-weight: 700;
  }
  .contact {
    margin-top: 20px;
    display: flex;
    width: 70%;
    justify-content: space-around;
    color: #bbb;

    @media screen and (max-width: $breackpoint-small) {
      width: 100%;
      padding: 0 5px;
    }
    & > .footer-contact {
      cursor: pointer;
      font-size: $font-size-small;
      &:hover {
        @media (hover: hover) {
          color: $white;
        }
      }
      @media screen and (max-width: $breackpoint-medium) {
        font-size: $font-size-smallest;
      }
    }
  }
  & .authory {
    position: absolute;
    bottom: 0;
    margin-bottom: 10px;

    font-size: 0.8rem;
    font-weight: 600;
    cursor: default;
    & span {
      color: $blue-dark;
    }
  }
}
</style>
