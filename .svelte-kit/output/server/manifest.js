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
		client: {start:"_app/immutable/entry/start.Cqv_ElsM.js",app:"_app/immutable/entry/app.BiP5Lkob.js",imports:["_app/immutable/entry/start.Cqv_ElsM.js","_app/immutable/chunks/BeQ_r1GC.js","_app/immutable/chunks/DR0uD8Et.js","_app/immutable/chunks/Czl2UkT8.js","_app/immutable/chunks/Cn_EWvtY.js","_app/immutable/entry/app.BiP5Lkob.js","_app/immutable/chunks/DR0uD8Et.js","_app/immutable/chunks/CgnmxfNJ.js","_app/immutable/chunks/DflGDmGy.js","_app/immutable/chunks/Cn_EWvtY.js","_app/immutable/chunks/Boa7iBs_.js","_app/immutable/chunks/BJKR16Yr.js","_app/immutable/chunks/Czl2UkT8.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
