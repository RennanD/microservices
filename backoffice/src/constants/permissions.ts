export const ROLES = ['ROOT', 'ADMIN', 'CONTROL'] as const;

export const PERMISSIONS = ['CREATE', 'READ', 'UPDATE', 'DELETE'] as const;

export type RolesDTO = typeof ROLES[number];

export type PermissionsDTO = typeof PERMISSIONS[number];
