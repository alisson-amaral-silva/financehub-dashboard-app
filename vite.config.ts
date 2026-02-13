import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import path from "path";

// MFE Configuration
const MFE_NAME = "mfeDashboard";
const MFE_PORT = 3001;

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),

    federation({
      name: MFE_NAME,
      filename: "remoteEntry.js",

      // Components this MFE exposes to the Shell
      exposes: {
        "./Dashboard": "./src/components/Dashboard",
        "./BalanceCards": "./src/components/BalanceCards",
        "./QuickActions": "./src/components/QuickActions",
        "./RecentTransactions": "./src/components/RecentTransactions",
      },

      shared: ["react", "react-dom", "zustand", "lucide-react"],
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    port: MFE_PORT,
    strictPort: true,
    host: true,
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },

  preview: {
    port: MFE_PORT,
    strictPort: true,
    host: true,
    cors: true,
  },

  build: {
    target: "esnext",
    minify: true,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        // Ensure consistent chunk names for MF
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },

  define: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  },
});
