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
		client: {start:"_app/immutable/entry/start.Dkv-ZMCo.js",app:"_app/immutable/entry/app.nJKA9kbK.js",imports:["_app/immutable/entry/start.Dkv-ZMCo.js","_app/immutable/chunks/Ccl78y3P.js","_app/immutable/chunks/DFsOIFjc.js","_app/immutable/chunks/CN6viUaN.js","_app/immutable/chunks/BoNhPPLb.js","_app/immutable/entry/app.nJKA9kbK.js","_app/immutable/chunks/DFsOIFjc.js","_app/immutable/chunks/i838lc2D.js","_app/immutable/chunks/J8oFtxkL.js","_app/immutable/chunks/BoNhPPLb.js","_app/immutable/chunks/Bb_E6xp5.js","_app/immutable/chunks/CJFUsGGI.js","_app/immutable/chunks/CN6viUaN.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
