export const ENVIRONMENTS: Record<Config.env, Config.env> = {
  local: 'local',
  develop: 'develop',
  preproduction: 'preproduction',
  production: 'production',
} as const;
