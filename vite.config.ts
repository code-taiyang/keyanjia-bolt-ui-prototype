import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import unusedCodePlugin from "vite-plugin-unused-code";

export default defineConfig({
  plugins: [
    react(),
     unusedCodePlugin({
      // 指定要检查的文件模式
      patterns: [
        "src/**/*.js",
        "src/**/*.jsx",
        "src/**/*.ts",
        "src/**/*.tsx",
        "src/**/*.css",
        "src/**/*.scss",
        "src/**/*.less",
      ],
      // 排除的文件
      exclude: [
        "node_modules/**",
        "src/**/*.d.ts",
        "src/**/*.test.*",
        "src/**/*.spec.*",
        "src/vite-env.d.ts",
        "src/**/types/*.ts",
        "src/**/type/*.ts",
        "src/**/types.ts",
        "src/**/type.ts",
      ],
      // 检测未使用的文件
      detectUnusedFiles: true,
      // 检测未使用的导出
      detectUnusedExport: false, // 目前有报错，暂时关闭
      // 日志级别：'all' | 'unused' | 'none'
      log: "unused",
      // 导出 JSON 报告，可以是 boolean 或文件路径字符串
      exportJSON: ".unused",
      // 发现未使用代码时是否报错
      failOnHint: false,
    }),
  ],
  optimizeDeps: {
    exclude: ["lucide-react"],
    include: ["@monaco-editor/react"],
  },
  resolve: {
    alias: {
      "monaco-editor": "monaco-editor/esm/vs/editor/editor.api",
    },
  },
  server: {
    fs: {
      strict: true,
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "monaco-editor": ["monaco-editor"],
        },
      },
    },
  },
  worker: {
    format: "es",
  },
});
