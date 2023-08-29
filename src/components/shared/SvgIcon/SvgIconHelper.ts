const ICON_TYPE = [
  "arrow",
  "bitbucket",
  "bubble",
  "css",
  "dashed",
  "download",
  "github",
  "html",
  "jest",
  "js",
  "linkedin",
  "logo",
  "mail",
  "plane",
  "redirect",
  "rxjs",
  "sass",
  "ts",
  "vue",
] as const;

export type IconType = (typeof ICON_TYPE)[number];

export const ICON_TYPE_MAP: Record<IconType, string> = {
  arrow: "Arrow",
  bitbucket: "Bitbucket",
  bubble: "Bubble",
  css: "Css",
  dashed: "DashedArrow",
  download: "Download",
  github: "Github",
  html: "Html",
  jest: "Jest",
  js: "JavaScript",
  linkedin: "Linkedin",
  logo: "Logo",
  mail: "Mail",
  plane: "PaperPlane",
  redirect: "Redirect",
  rxjs: "RxJs",
  sass: "Sass",
  ts: "TypeScript",
  vue: "Vue",
};

const ICON_COLOR = ["currentColor", "white", "black"] as const;

export type IconColor = (typeof ICON_COLOR)[number];

const ICON_COLOR_MAP: Record<IconColor, string> = {
  currentColor: "currentColor",
  white: "#FFF",
  black: "#000",
};

export interface SvgIconDefaultSettings {
  color?: IconColor;
  colorProperty: "fill" | "stroke";
  width?: number;
  height?: number;
}

export interface SvgIconTranslate {
  x?: number;
  y?: number;
  unit?: "px";
}

export interface SvgIconSize {
  width?: number;
  height?: number;
  unit?: "px";
}

export interface SvgIconTransformedProps {
  width: string;
  height: string;
  viewBox: string;
  style: {
    display: "block";
    fill?: IconColor;
    stroke?: IconColor;
    translate?: string;
  };
}

export const SVG_ICON_DEFAULT_SETTINGS: Record<
  IconType,
  Required<SvgIconDefaultSettings>
> = {
  arrow: {
    color: "currentColor",
    colorProperty: "fill",
    width: 15,
    height: 10,
  },
  bitbucket: {
    color: "currentColor",
    colorProperty: "fill",
    width: 20,
    height: 20,
  },
  bubble: {
    color: "currentColor",
    colorProperty: "fill",
    width: 270,
    height: 270,
  },
  css: {
    color: "currentColor",
    colorProperty: "fill",
    width: 20,
    height: 20,
  },
  dashed: {
    color: "currentColor",
    colorProperty: "stroke",
    width: 205,
    height: 150,
  },
  download: {
    color: "currentColor",
    colorProperty: "stroke",
    width: 25,
    height: 25,
  },
  html: {
    color: "currentColor",
    colorProperty: "fill",
    width: 20,
    height: 20,
  },
  github: {
    color: "currentColor",
    colorProperty: "stroke",
    width: 25,
    height: 25,
  },
  jest: {
    color: "currentColor",
    colorProperty: "fill",
    width: 20,
    height: 20,
  },
  js: {
    color: "currentColor",
    colorProperty: "fill",
    width: 20,
    height: 20,
  },
  linkedin: {
    color: "currentColor",
    colorProperty: "fill",
    width: 25,
    height: 25,
  },
  logo: {
    color: "currentColor",
    colorProperty: "stroke",
    width: 70,
    height: 45,
  },
  mail: {
    color: "currentColor",
    colorProperty: "stroke",
    width: 24,
    height: 24,
  },
  plane: {
    color: "currentColor",
    colorProperty: "stroke",
    width: 25,
    height: 25,
  },
  redirect: {
    color: "currentColor",
    colorProperty: "stroke",
    width: 25,
    height: 25,
  },
  rxjs: {
    color: "currentColor",
    colorProperty: "fill",
    width: 20,
    height: 20,
  },
  sass: {
    color: "currentColor",
    colorProperty: "fill",
    width: 20,
    height: 20,
  },
  ts: {
    color: "currentColor",
    colorProperty: "fill",
    width: 20,
    height: 20,
  },
  vue: {
    color: "currentColor",
    colorProperty: "fill",
    width: 20,
    height: 20,
  },
};

export function transformSvgPropsFormat(
  name: IconType,
  color?: IconColor,
  size?: SvgIconSize,
  translate?: SvgIconTranslate
): SvgIconTransformedProps {
  const defaultSettings = SVG_ICON_DEFAULT_SETTINGS[name];
  const width = size?.width ?? defaultSettings.width;
  const height = size?.height ?? defaultSettings.height;
  const unit = translate?.unit ?? "px";
  const x = translate?.x ?? 0;
  const y = translate?.y ?? 0;
  const translateStyle =
    x || y ? { translate: `${x}${unit} ${y}${unit}` } : undefined;
  const style = {
    [defaultSettings.colorProperty]:
      ICON_COLOR_MAP[color ?? defaultSettings.color],
    ...(!!translateStyle && translateStyle),
    display: "block" as const,
  };

  return {
    width: width ? `${width}px` : " 100%",
    height: width ? `${height}px` : " 100%",
    viewBox: ` 0 0 ${defaultSettings.width} ${defaultSettings.width}`,
    style,
  };
}
