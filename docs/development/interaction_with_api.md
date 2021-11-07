# Interaction with API

Lasca allows us to interact with API in the familiar Vue.js way. About interaction API, you need to learn almost nothing new about Lasca.

You can interact with the API in the way you see in the [UI logics](/development/ui_logics.md) chapter.

## Fetch data from API

In this example, the data variable `info` is bound to lasca component, and this variable is replaced with the data fetched from the API

This data from API can be used as condition, loop, and variable. It is same as what you see in the [UI logics](/development/ui_logics.md) chapter.

Example below is Vue.js:

``` js
<template>
  <lasca component="home"></lasca>
</template>

<script>
export default {
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response.data.disclaimer))
  }
}
</script>
```

## Post data to API

In this example, the data variable count is sent to server via API in the event handling method `add`. There is no limit to what can be implemented in the event handling methods.

You see how to configure events in the [UI logics](/development/ui_logics.md) chapter.

Example below is Vue.js:

``` js
<template>
  <lasca component="home"></lasca>
</template>

<script>
export default {
  data: {
	  count: 1,
  },
  methods: {
    add: function($event) {
      this.count++;
      axios.post("https://xxxx.app/api/count", this.count)
        .then(response => console.log(response));
    },
  },
}
</script>
```