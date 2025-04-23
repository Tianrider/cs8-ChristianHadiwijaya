import path from "path";
import tailwindcss from "@tailwindcss/vite";
import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	server: {
		allowedHosts: ["localhost", "5860-152-118-231-147.ngrok-free.app"],
	},
});
