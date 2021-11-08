# Combination with your own coding

Lasca does not control entire our project. It is incrementally adoptable.

You can choose to automate the front-end using the lasca tag or code it ourselves in various ways.

For each Vue.js or React compoment, you can choose to use lasca tag or code it yourself.

Example below is Vue.js:

**sample_A.vue: Using lasca tag**

``` js
<template>
  <lasca component="component_nameA"></lasca>
</template>

<script>
export default {
  data: {
    count: 1,
  },
}
</script>
```

**sample_B.vue: Not using lasca tag**

``` js
<template>
  <div class="own-coding">This is our own coding.</div>
</template>

<script>
export default {
  data: {
    count: 1,
  },
}
</script>
```

For each Vue.js or React compoment, you can combine lasca tag and our own coding.

Example below is Vue.js:

``` js
<template>
  <header>header</header>
  <div>
    <lasca component="component_nameA"></lasca>
  </div>
  <footer>footer</footer>
</template>

<script>
export default {
  data: {
    count: 1,
  },
}
</script>
```

## Design

The content so far shows that you can export Figma designs in the following ways.

- Export the entire screen
- Export some elements in the screen (you can write codes the rest yourself)

### The entire screen

You can automate front-end coding for an entire screen with Lasca.

In this case, you use the lasca tag for the Vue.js component that represents the entire screen.

![Figma screens](/image/screenshot_figma_screens.jpg)

### Some elements in the screen

You can also automate the front-end coding of some elements in the screen with Lasca, and write codes the rest of the elements yourself.

In this case, you use the lasca tag for the Vue.js component that represents some elements in the screen or combine lasca tag and our own coding in template tag.

![Figma elements](/image/screenshot_figma_elements.jpg)