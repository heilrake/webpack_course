export type BuildMode = "development" | "production";
export type BuildPlatform = "mobile" | "desktop";

export interface BuildPaths {
  entry: string;
  html: string;
  public: string;
  output: string;
  src: string;
}
export interface BuildOptions {
  port: number;
  paths: BuildPaths;
  mode: BuildMode;
  analyzer?: boolean;
  platform: BuildPlatform;
}
