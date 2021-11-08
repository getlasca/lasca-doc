# UI logics

Lasca allows us to configure the following UI logics that are essential to web applications.

::: v-pre
- Condition (if statement, v-if in Vue.js)
- Loop (for statement, v-for in Vue.js)
- Variable ({{ }} statement in Vue.js, {} statement in React)
- Event (e.g. click, hover, etc)
:::

## API key

To set UI logics, API key must be set up as environment variable `LASCA_API_TOKEN`.

Get API key from [API key page](https://lasca.app/api_keys) (login required)

``` sh
export LASCA_API_TOKEN=<YOUR_API_TOKEN>
```

## UI logics setting

Create a `lasca/components` directory directly under the target project and place the UI logics definition files for each Lasca component under it.

```
└ lasca
  └ components
    ├ component_nameA.json  // The file name must match the Lasca component name.
		├ component_nameB.json
    :
```

**component_nameA.json**

``` json
{
  "conditions": [
    "items.length > 0",
    "items.length === 0"
  ],
  "loops": [
    {
      "expression": "items",
      "itemVariable": "item",
      "itemIndex": "index",
      "key": "item.id"
    }
  ],
  "variables": [
    "item.name"
  ],
  "events": [
    "add",
    "() => remove(index)"
  ]
}
```

### conditions

Boolean javascript expression should be configured. The expressions set up in this array will be converted to the contents of `v-if` in Vue.js or `if` in React.

### loops

Loop setting object should be configured. The expressions set up in this array will be converted to the contents of `v-for` in Vue.js or `map` method in React.

Loop setting object definition:

- `expression` (required): Javascript array expression should be configured. This array will be looped.
- `itemVariable` (required): Loop item variable name. This variable will be used inside the element loop set up.
- `itemIndex` (optional): Loop index variable name.  This variable will be used inside the element loop set up.
- `key` (required): Loop key variable name. This variable will be used as `key` property of Vue.js and React.

This loop object will be converted as below:

**Lasca json setting**

``` json
"loops": [
  {
    "expression": "items",
    "itemVariable": "item.name",
    "itemIndex": "index",
    "key": "item.id"
  }
],
```

**Vue.js**

``` js
<div v-for="(item, index) in items" :key="item.id">
  <span>{{ index }} : {{ item.name }}</span>
</div>
```

**React**

``` js
{
  items.map((item, index) => {
    <div key={item.id}>
      <span>{{ index }} : {{ item }}</span>
    </div>
  }
}
```

### variables

::: v-pre
String or number javascript expression should be configured. The expressions set up in this array will be converted to the contents of `{{ }}` in Vue.js or `{ }` in React. Variables are also configured as `link URL` or `dynamic image URL`.
:::

### events

Javascript method expression should be configured. The expressions set up in this array will be converted to the contents of `v-on:click` in Vue.js or `onClick` in React.

## Push

With `lasca push` command, uou can push UI logic setting to Lasca so that you can setup visual programing logic like variables, condition, loop, event through web console.

``` sh
yarn lasca push
```

Then, you can select variable set and event set in the UI logics select box.

![Scaffold](/image/screenshot_push.jpg)

## Front-end coding

conditions, loops, variables and events set in a json file can be passed to the Lasca component.

**Vue.js**

``` js
<template>
  <lasca component="component_nameA"></lasca>
</template>

<script>
export default {
  data: {
    items: [
      { id: 1, name: "name_A" },
      { id: 2, name: "name_B" }
    ]
  },
  methods: {
    add: function() {
      console.log("add")
    },
    remove: function(index) {
      console.log(index)
    },
  },
}
</script>
```

**React**

``` js
const App = () => {
  const [items, setItems] = useState([{ id: 1, name: "name_A" }]);

  const add = () => {
    console.log("add")
  };

  const remove = (index) => {
    console.log(index)
  };

  return <lasca component="component_nameA"></lasca>;
};
```