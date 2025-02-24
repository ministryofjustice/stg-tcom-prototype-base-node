import { defineConfig, loadEnv } from "vite";
import httpAuth from "vite-plugin-http-basic-auth"
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  // httpAuth plugin expects env variables at vite build time
  // - need to ensure these are in place in pipeline
  // & maybe k8s config map for cloud platform deployments
  return ({
    server: {
      host: "::",
      port: 3000,
    },
    plugins: [
      react(),
      mode === 'development' &&
      componentTagger(),
      httpAuth([{
        username: env.VITE_AUTH_USERNAME_1,
        password: env.VITE_AUTH_PASSWORD_1
      }], {
          realm: env.VITE_AUTH_REALM,
          useInServer: true,   // True by default
          useInPreview: true,  // True by default
      })
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  })
});
