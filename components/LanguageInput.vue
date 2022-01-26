<template>
  <div class="lang-dropdown">

    <b-form-select v-model="$i18n.locale">
      <option
        v-for="lang in $i18n.locales"
        :key="lang.code"
        :value="lang.code"
        >{{ lang.name }}</option>
    </b-form-select >
  </div>
</template>
<script>
export default {
}
</script>