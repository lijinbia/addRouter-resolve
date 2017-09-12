# vueaddrouter

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

resolve =>() require(['@component/route'],resolve);
let routes = [
	{
		path:'/route1',
		component:resolve=>() require(['@component/route1'],resolve),
		name:'route1',
		mate:'route1',

	}
	,
	{
		path:'/route2',
		component :resolve =>()require(['@component/route2'],resolve),
		children:[
			{
				path:'/detail',
				component:resolve => require(['@component/detail'],resolve),
			}
		]

	}
]
this.$router.addRoutes(routes);










For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
