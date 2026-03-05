export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "doughculator/_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.BYxVMR5K.js",app:"_app/immutable/entry/app.DDCdWMQG.js",imports:["_app/immutable/entry/start.BYxVMR5K.js","_app/immutable/chunks/8b3zSe0m.js","_app/immutable/chunks/DVTqjnb2.js","_app/immutable/chunks/Ctxl8vun.js","_app/immutable/chunks/CZRs6Hsp.js","_app/immutable/entry/app.DDCdWMQG.js","_app/immutable/chunks/DVTqjnb2.js","_app/immutable/chunks/CoGka9Rx.js","_app/immutable/chunks/BRC7wqI9.js","_app/immutable/chunks/CZRs6Hsp.js","_app/immutable/chunks/jC_ysh_7.js","_app/immutable/chunks/_7JcwmiN.js","_app/immutable/chunks/Ctxl8vun.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
