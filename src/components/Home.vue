<template lang="html">

  <section class="home">
    <other-component></other-component>
    <h1>home Component</h1>
  </section>

</template>

<script lang="js">
import OtherComponent from './OtherComponent/OtherComponent.vue';
  export default {
    name: 'home',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    },
    components: {
      OtherComponent
    }
}
</script>

<style scoped lang="scss">
  .home {

  }
</style>
