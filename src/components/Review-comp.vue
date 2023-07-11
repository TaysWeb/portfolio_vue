<template>

  <div v-for="p in review" :key="p.id">
    <p>{{ p.name }}</p>
    <p>{{ p.review }}</p>
  </div>

</template>

<script>
export default {
  props:['review']

}
</script>
