export const ENDPOINTS = {
  // GraphQL
  ADMIN_GRAPHQL: "/admin/graphql",

  // Rest API
  VIDEOS: "/videos",
  VIDEO: (id: number | string) => `/videos/${id}`,
  SETTINGS: "/settings",
  CAMPAIGNS: "/campaigns",
  CAMPAIGN: (id: number | string) => `/campaigns/${id}`,
  CAMPAIGN_SEARCH: (query: string) => `/campaigns${query ? `?${query}` : ""}`,

  // Tiktok endpoints
  TIKTOK_VIDEOS: "/tiktok/videos",
  TIKTOK_VIDEO: "/tiktok/video",
  TIKTOK_IMPORT_REMOTE: "/tiktok/import_remote",
  TIKTOK_IMPORT_REMOTE_STATUS: (taskId: number | string) =>
    `/tiktok/import_remote/${taskId}`,
  TIKTOK_IMPORT: (campaignId: number | string) =>
    `/campaigns/${campaignId}/import_tiktok`,

  // Instagram endpoints
  INSTAGRAM_REELS: "/instagram/reels",
  INSTAGRAM_VIDEO: "/instagram/video",
  INSTAGRAM_IMPORT_REMOTE: "/instagram/import_remote",
  INSTAGRAM_IMPORT_REMOTE_STATUS: (taskId: number | string) =>
    `/instagram/import_remote/${taskId}`,
} as const;
