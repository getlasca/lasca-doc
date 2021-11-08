# Rendering

Imported Figma designs are rendered with `lasca` tag. Converted HTML & CSS code is inserted into the place of `lasca` tag through webpack build.

## Vue.js (Nuxt.js）

`component`  attribute represents component name. The component name must correspond to the one you set in the web console.

You can bind the data objects to the HTML in the `template` tag, just like the normal Vue.js way. These data objects are used for UI logics such as condition, loop and variable.

You can also handle events (e.g. click, hover) from `lasca` tag. `methods` attribute specifies the function that will fire when an event such as a click occurs.

How to set up UI logics is [here](/development/ui_logics.md).

``` js
<template lang="lasca">
  // component attribute must correspond to the one you set in the web console.
  <lasca component="items"></lasca>
</template>

<script>
export default {
  // bind data objects to lasca tag
  data() {
    return {
      items: [1],
    };
  },
  // handle events from lasca tag
  methods: {
    add: function () {
      this.items.push(this.items.length == 0 ? 1 : Math.max(...this.items) + 1);
    },
    remove: function (index) {
      this.items.splice(index, 1);
    },
  },
};
</script>

<style>
.dummy {
  color: red;
}
</style>
```

::: warning Caution
`.vue` files must contain `<style>` tag and at least one css selector even if it is dummy .

If you do not need to specify a css selector, this rule may be annoying. In a future release, this rule will be removed.
:::

``` js
<template>
  <lasca component="home"></lasca>
</template>

<script>
export default {}
</script>

<style>
// At least one css selector is necessary.
.dummy {
  color: red;
}
</style>
```

## React (Next.js)

`component`  attribute represents component name. The component name must correspond to the one you set in the web console.

You can bind the state objects to the JSX tag, just like the normal React way. These state objects are used for UI logic such as condition, loop and variable.

You can also handle events (e.g. click, hover) from `lasca` tag. Function within React component will fire when an event such as a click occurs.

How to set up UI logics is [here](/development/ui_logics.md).

``` js
const App = () => {
  // bind state objects to lasca tag
	const [items, setItems] = useState([1]);

  // handle events from lasca tag
  const add = () => {
    setItems([...items, items.length == 0 ? 1 : Math.max(...items) + 1]);
  };

  const remove = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return <lasca component="component_1"></lasca>;
};
```