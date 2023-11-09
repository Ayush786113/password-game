import adapter from '@sveltejs/adapter-vercel';

const config = {
	kit: {
		adapter: adapter({
			runtime: "nodejs18.x"
		})
	}
};

export default config;
