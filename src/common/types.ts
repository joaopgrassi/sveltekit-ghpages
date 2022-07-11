export class Language {
  lang: Lang;
  signals: Signal[]
}

export class Signal {
  type: SignalType;
  apps: Sample[];
}

export class Sample {
  type: AppType;
  dependencies: Dependency[];
  source: string;
  recipeFile: string;
}

export class Dependency {
  id: string;
  version: string;
}

export enum AppType {
  console,
  api,
  webapp
}

export enum SignalType {
  trace,
  metric,
  log
}

export enum Lang {
  csharp,
  js,
  go,
  java,
  python
}