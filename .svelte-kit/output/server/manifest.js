export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "doughculator/_app",
	assets: new Set(["favicon.svg","icon-192.png","icon-512.png","manifest.webmanifest","robots.txt"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".webmanifest":"application/manifest+json",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.DimcYo4h.js",app:"_app/immutable/entry/app.CYYSYhBu.js",imports:["_app/immutable/entry/start.DimcYo4h.js","_app/immutable/chunks/D261t3C1.js","_app/immutable/chunks/B2UYS7St.js","_app/immutable/chunks/C6QUrsPh.js","_app/immutable/chunks/B_yX-9Rv.js","_app/immutable/entry/app.CYYSYhBu.js","_app/immutable/chunks/B2UYS7St.js","_app/immutable/chunks/BC3JPxVa.js","_app/immutable/chunks/C8fZcAY7.js","_app/immutable/chunks/B_yX-9Rv.js","_app/immutable/chunks/CUEP25rK.js","_app/immutable/chunks/BtEaFJWA.js","_app/immutable/chunks/C6QUrsPh.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
