import StyleDictionary from "style-dictionary";

// ── 빌드 설정 ──
const sd = new StyleDictionary({
  source: ["tokens/**/*.json"],
  platforms: {
    // CSS 출력 (React용)
    css: {
      transformGroup: "css",
      buildPath: "src/tokens/",
      files: [
        {
          destination: "colors.css",
          format: "css/variables",
          filter: (token) => token.path[0] === "color",
          options: {
            outputReferences: true, // var(--xxx) 참조 구조 유지
          },
        },
        {
          destination: "spacing.css",
          format: "css/variables",
          filter: (token) => token.path[0] === "spacing",
          options: {
            outputReferences: true, // var(--xxx) 참조 구조 유지
          },
        },
        {
          destination: "typography.css",
          format: "css/variables",
          filter: (token) => token.path[0] === "font",
          options: {
            outputReferences: true,
          },
        },
        {
          destination: "elevation.css",
          format: "css/variables",
          filter: (token) => token.path[0] === "elevation",
          options: {
            outputReferences: true,
          },
        },
        {
          destination: "radius.css",
          format: "css/variables",
          filter: (token) => token.path[0] === "radius",
          options: {
            outputReferences: true,
          },
        },
      ],
    },
  },
});

await sd.buildAllPlatforms();
console.log("\n✅ Style Dictionary 빌드 완료");
console.log(
  "   CSS → src/tokens/colors.css, spacing.css, typography.css, elevation.css, radius.css",
);
