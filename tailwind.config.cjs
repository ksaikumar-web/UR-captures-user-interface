module.exports = {
  content: [
    "./index.html",
    "./src/**/*.ts",
    "./src/**/*.tsx",
    "./src/**/*.js",
    "./src/**/*.jsx",
  ],
  safelist: [
    // add any classes that might be dynamically generated or missed
    'bg-blue-600','bg-blue-700','bg-white','bg-gray-100','text-white','rounded-2xl','shadow-lg','w-96'
  ],
  theme: { extend: {} },
  plugins: [],
}