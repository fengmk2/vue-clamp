declare const __VUE_CLAMP_BENCH_TARGET__: {
  entry: string;
  specifier: string;
  version: string;
};

declare const __VUE_CLAMP_BENCH_SAMPLING__: {
  maxScenarioMs?: number;
  maxRuns?: number;
  minRuns?: number;
  minScenarioMs?: number;
  mode?: string;
  warmupRuns?: number;
};

declare module "vue-clamp" {
  import type { Component } from "vue";

  export const InlineClamp: Component;
  export const LineClamp: Component;
  export const RichLineClamp: Component;
  export const WrapClamp: Component;
}

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, unknown>;
  export default component;
}
