/// <reference types="@google/model-viewer" />

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          poster?: string;
          "ios-src"?: string;
          alt?: string;
          ar?: boolean;
          "ar-modes"?: string;
          "ar-scale"?: string;
          "ar-placement"?: string;
          "camera-controls"?: boolean;
          "touch-action"?: string;
          "auto-rotate"?: boolean;
          "auto-rotate-delay"?: number;
          "rotation-per-second"?: string;
          "shadow-intensity"?: string;
          "shadow-softness"?: string;
          exposure?: string;
          "environment-image"?: string;
          "skybox-image"?: string;
          "field-of-view"?: string;
          "min-camera-orbit"?: string;
          "max-camera-orbit"?: string;
          "camera-orbit"?: string;
          "camera-target"?: string;
          loading?: "auto" | "lazy" | "eager";
          reveal?: "auto" | "manual";
          "interaction-prompt"?: "auto" | "none" | "when-focused";
          "interaction-prompt-style"?: "basic" | "wiggle";
          "interaction-prompt-threshold"?: number;
          style?: React.CSSProperties;
          className?: string;
          ref?: React.Ref<HTMLElement>;
          slot?: string;
        },
        HTMLElement
      >;
    }
  }
}

export {};
