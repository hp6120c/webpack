<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{#router}}
    <router-view/>
    {{else}}
    <index/>
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}
import index from './components/index'

{{/unless}}
export default {
  name: 'App'{{#router}}{{else}},
  components: {
    index
  }{{/router}}
}
</script>

<style>

</style>
