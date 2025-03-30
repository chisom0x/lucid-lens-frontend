declare module "framer-motion" {
  export const motion: any
  export function useAnimation(): any
  export interface AnimationControls {
    start: (variant: string) => Promise<any>
  }
}

