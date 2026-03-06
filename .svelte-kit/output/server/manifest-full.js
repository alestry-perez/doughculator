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
		client: {start:"_app/immutable/entry/start.CKl-IzMm.js",app:"_app/immutable/entry/app.Btf61vO0.js",imports:["_app/immutable/entry/start.CKl-IzMm.js","_app/immutable/chunks/C5xfne5O.js","_app/immutable/chunks/DFsOIFjc.js","_app/immutable/chunks/CN6viUaN.js","_app/immutable/chunks/BoNhPPLb.js","_app/immutable/entry/app.Btf61vO0.js","_app/immutable/chunks/DFsOIFjc.js","_app/immutable/chunks/i838lc2D.js","_app/immutable/chunks/J8oFtxkL.js","_app/immutable/chunks/BoNhPPLb.js","_app/immutable/chunks/Bb_E6xp5.js","_app/immutable/chunks/CJFUsGGI.js","_app/immutable/chunks/CN6viUaN.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
