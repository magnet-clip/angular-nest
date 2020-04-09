export type AppModuleName = 'Core' | 'Editor';
export function getActionName(module: AppModuleName, action: string) {
  return `[${module}] ${action}`;
}
