# Build

Build process with webpack loader is necessary to render template and CSS.

## API key

API key is necessary to build. API key must be set up as environment variable `LASCA_API_TOKEN`.

Get API key from [API key page](https://lasca.app/apikeys) (login required)

``` sh
export LASCA_API_TOKEN=<YOUR_API_TOKEN>
```

## webpack configuration

### Vue.js

Both `lasca-loader` and `LascaLoaderVuePlugin` should be configured.

**webpack.config.js**

``` js
const LascaLoader = require('lasca-loader')

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      // ... other rules
      {
        test: /\.(lasca|css)$/,
        loader: 'lasca-loader'
      },
    ]
  },
	plugins: [
    new LascaLoader.LascaLoaderVuePlugin(),
    new VueLoaderPlugin(),
  ]
}
```

### Nuxt.js

Both `lasca-loader` and `LascaLoaderVuePlugin` should be configured.

**nuxt.config.js**

``` js
const LascaLoader = require('lasca-loader')

export default {
  build: {
    extend(config) {
      if (!config.module) return;
      config.module.rules.push({
        test: /\.(lasca|css)$/,
        loader: "lasca-loader"
      });
      config.plugins.unshift(new LascaLoader.LascaLoaderVuePlugin())
    }
  }
}
```

### React

`lasca-loader` should be configured.

**webpack.config.js**

``` js
module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      // ... other rules
      {
        test: /\.jsx$/,
        loader: "lasca-loader",
      },
    ]
  }
}
```

### Next.js

**next.config.js**

``` js
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.jsx$/,
      loader: "lasca-loader",
    });
    return config;
  },
};
```

## Pull & build

By `lasca pull` command,  converted HTML + CSS code is stored at `~/lasca/code.json` file.

It's recommended to include this file in the git repository to share the configuration in your team.

``` sh
yarn lasca pull
```

``` json
[
  {
    "name": "sample",
    "template": "<div><div class=\"breakpoint-1\"><div class=\"class-1\"><div class=\"class-2\"></div><div class=\"class-3\"><span class=\"class-4\"><span class=\"class-4-1\">To use Lasca, click the verification button in the email we sent to </span><span class=\"class-4-2\">ueda1023@gmail.com</span><span class=\"class-4-1\">.\nThis helps keep your account secure.\n\nNo email in your inbox or spam folder? </span><span class=\"class-4-3\">Let’s resend it.\n\n</span><span class=\"class-4-1\">Wrong address? </span><span class=\"class-4-3\">Log out</span><span class=\"class-4-1\"> to sign in with a different email.\nIf you mistyped your email when signing up, create a new account.</span></span><span class=\"class-5\">Verify your email</span></div><div class=\"class-6\"><div class=\"class-7\"></div><div class=\"class-8\"></div></div></div></div></div>",
    "css": ".class-1 { background-color: rgba(255,255,255,1); overflow: hidden; }.class-2 {  border-radius: 50%; position: absolute; top: 1510px; height: 786px; left: 1568px; width: 786px; }.class-3 { width: 500px; height: 187px; } .class-4 { text-align: center; white-space: pre; font-size: 12px; letter-spacing: -0.005em; line-height: 18px; position: absolute; top: 368px; height: auto; left: 390px; width: auto; } .class-4-1 {  color: rgba(33,33,33,1); font-weight: 400; font-family: 'Inter', sans-serif; } .class-4-2 {  color: rgba(33,33,33,1); font-weight: 700; font-family: 'Inter', sans-serif; } .class-4-3 {  color: rgba(0,150,245,1); font-weight: 400; font-family: 'Inter', sans-serif; } .class-5 { text-align: center; white-space: pre; font-size: 36px; color: rgba(33,33,33,1); font-weight: 700; font-family: 'Inter', sans-serif; letter-spacing: -0.005em; line-height: 45px; position: absolute; top: 307px; height: auto; left: 494px; width: auto; }.class-6 { width: 1280px; height: 64px; } .class-7 { background-color: rgba(255,255,255,1); position: absolute; top: 0px; height: 64px; left: 0px; width: 1280px; } .class-8 { background: no-repeat center center url(https://assets.staging-lasca.click/node_images/node-2004-798-7f84e6af-34e0-46b5-ade4-2d9bd2ccc968.png);background-size: cover; position: absolute; top: 20px; height: 24px; left: 24px; width: 100px; }"
  }
]
```

Then, build with webpack. Converted HTML + CSS code is inserted at the position of `lasca` tag.

### Vue.js or React

``` sh
yarn webpack
```

### Nuxt.js

``` sh
nuxt  # dev server

or

nuxt build  # build
```

### Next.js

``` sh
next dev # dev server

or

next build  # build
```