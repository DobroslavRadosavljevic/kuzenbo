export const kbInteractiveTransitionClasses =
  "transition-[color,background-color,border-color,box-shadow,opacity,translate,scale] [transition-duration:var(--kb-motion-base)] [transition-timing-function:var(--kb-ease-standard)] motion-reduce:transition-[color,background-color,border-color,box-shadow,opacity]";

export const kbPressableInteractionClasses =
  "motion-safe:active:[scale:var(--kb-press-scale)] motion-reduce:active:[scale:1]";

export const kbOverlayTransitionClasses =
  "transition-[opacity,scale,translate] [transition-duration:var(--kb-motion-base)] [transition-timing-function:var(--kb-ease-standard)] data-[instant]:transition-none motion-reduce:transition-opacity";

export const kbOverlayTransitionSlowClasses =
  "transition-[opacity,scale,translate] [transition-duration:var(--kb-motion-slow)] [transition-timing-function:var(--kb-ease-standard)] data-[instant]:transition-none motion-reduce:transition-opacity";

export const kbOverlayPositionerTransitionClasses =
  "transition-[top,left,right,bottom,width,height] [transition-duration:var(--kb-motion-slow)] [transition-timing-function:var(--kb-ease-standard)] data-[instant]:transition-none motion-reduce:transition-none";

export const kbOverlaySurfaceStateClasses =
  "data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 motion-safe:data-[starting-style]:scale-[0.98] motion-safe:data-[ending-style]:scale-[0.98] motion-reduce:data-[starting-style]:scale-100 motion-reduce:data-[ending-style]:scale-100";

export const kbOverlayDirectionalStateClasses =
  "motion-safe:[&[data-starting-style][data-side=top]]:translate-y-1 motion-safe:[&[data-ending-style][data-side=top]]:translate-y-1 motion-safe:[&[data-starting-style][data-side=bottom]]:-translate-y-1 motion-safe:[&[data-ending-style][data-side=bottom]]:-translate-y-1 motion-safe:[&[data-starting-style][data-side=left]]:translate-x-1 motion-safe:[&[data-ending-style][data-side=left]]:translate-x-1 motion-safe:[&[data-starting-style][data-side=right]]:-translate-x-1 motion-safe:[&[data-ending-style][data-side=right]]:-translate-x-1 motion-reduce:[&[data-starting-style]]:translate-x-0 motion-reduce:[&[data-ending-style]]:translate-x-0 motion-reduce:[&[data-starting-style]]:translate-y-0 motion-reduce:[&[data-ending-style]]:translate-y-0";

export const kbOverlayBackdropStateClasses =
  "data-[starting-style]:opacity-0 data-[ending-style]:opacity-0";

export const kbStateTransitionClasses =
  "transition-[color,background-color,border-color,opacity,box-shadow] [transition-duration:var(--kb-motion-fast)] [transition-timing-function:var(--kb-ease-standard)]";
