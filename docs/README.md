# Get started

## Quick start

The fastest way to try Lasca is to use a prepared sample Vue.js or React project [create-lasca-app](https://github.com/getlasca/create-lasca-app), which will help scaffold the basic structure of building a web applications using Lasca.

To use it, open up your terminal in the desired directory and run the following command:

``` sh
yarn create lasca-app
```

Then, the command will interactively give you following simple steps:

``` sh
cd lasca-app
yarn install
export LASCA_API_TOKEN=<YOUR_API_TOKEN>  ( Get your API token from https://lasca.app/signup )
yarn lasca pull
yarn webpack serve
```

After finishing the above steps, go to [http://localhost:8080](http://localhost:8080) ( [http://localhost:3000](http://localhost:3000) if you choose Nuxt.js or Next.js) and you will see the following page.

![Scaffold](/image/screenshot_scaffold.jpg)

Explore the page and you will see that **it has dynamic features such as condition or click event**, but **it's created without writing even a single line of HTML and CSS**, just an export of the Figma design!

To automate front-end coding in your own projects, refer to the more detailed documentation below.

## Going further

### UI logics & interaction with API

Lasca allows us to configure UI logics (condition, loop, variable, event) and interaction with API. They are essential to web applications. We recommend the following articles about UI logics and interaction with API.

- [UI logics](/development/ui_logics.md)
- [Interaction with API](/development/interaction_with_api.md)

### Combination with your own coding

Lasca does not control entire our Vue.js or React project. It is incrementally adoptable. You can choose to automate the front-end using the lasca tag or code it yourself in various ways.

See [Combination with your own coding](/development/combination_with_coding.md) chapter.

### For more details

For more information on how to use Lasca, please click here.

- [Export your Figma design](/design/figma_export.md) - how to export your Figma design using Figma plugin
- [Rendering](/development/rendering.md) - how to render imported Figma to web
- [Build](/development/build.md) -  how to build with webpack
- [UI logics](/development/ui_logics.md) - how to configure UI logics (condition, loop, variable, event)
- [Interaction with API](/development/interaction_with_api.md) - how to interact with API
- [Combination with your own coding](/development/combination_with_coding.md) - how to combine with own coding

**Is Lasca missing something you need?** To automate front-end coding, we’re launching more features. You can check our [Product Roadmap](https://vigorous-quicksand-2c8.notion.site/Product-Roadmap-e2affbbbb31f42bd94bd936620a1bc3e).

## Pricing

Lasca is free while in beta. Please feel free to use as much as you want!