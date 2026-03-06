export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "doughculator/_app",
	assets: new Set(["favicon.svg","robots.txt"]),
	mimeTypes: {".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.CiUa7-AV.js",app:"_app/immutable/entry/app.D5C4QZQl.js",imports:["_app/immutable/entry/start.CiUa7-AV.js","_app/immutable/chunks/CDhFNs7Y.js","_app/immutable/chunks/BL6YA9ew.js","_app/immutable/chunks/oRnSefnY.js","_app/immutable/chunks/vH7urwBu.js","_app/immutable/entry/app.D5C4QZQl.js","_app/immutable/chunks/BL6YA9ew.js","_app/immutable/chunks/DOSRN90_.js","_app/immutable/chunks/BrogzO-e.js","_app/immutable/chunks/vH7urwBu.js","_app/immutable/chunks/nHT0CA0i.js","_app/immutable/chunks/Ca8BCUAG.js","_app/immutable/chunks/oRnSefnY.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
