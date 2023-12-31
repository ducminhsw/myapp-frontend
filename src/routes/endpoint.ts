const BASE_URL = "http://localhost:3000/api/v1";

// authentication
export const REGISTER_URL = `${BASE_URL}/auth/register`;
export const VERIFY_EMAIL_URL = `${BASE_URL}/auth/verifyEmail`;
export const LOGIN_URL = `${BASE_URL}/auth/login`;
export const REFRESH_TOKEN_URL = `${BASE_URL}/auth/refreshToken`;

// user's actions
export const GET_MY_PROFILE_URL = `${BASE_URL}/user/profile/me`;
export const GET_ANOTHER_PROFILE_URL = `${BASE_URL}/user/profile`;
export const GET_MY_ALL_STORY_URL = `${BASE_URL}/user/story/me`;
export const UPLOAD_STORY_URL = `${BASE_URL}/user/story`;

// friend's route
export const GET_FRIEND_STATUS_URL = `${BASE_URL}/friend/status`;
export const POST_REQUEST_FRIEND_URL = `${BASE_URL}/friend/request/:targetUser/3`;
export const POST_REQUEST_UNFRIEND_URL = `${BASE_URL}/friend/request/:targetUser/0`;
export const POST_REQUEST_BLOCK_URL = `${BASE_URL}/friend/request/:targetUser/1`;
export const POST_REQUEST_UNBLOCK_URL = `${BASE_URL}/friend/request/:targetUser/2`;

// conversation's route

// server's route
export const POST_CREATE_SERVER_URL = `${BASE_URL}/server/new`;
export const DELETE_SERVER_URL = `${BASE_URL}/server/delete`;
export const GET_SERVER_INFO_URL = `${BASE_URL}/server/info`;
export const PUT_CREATE_SERVER_URL = `${BASE_URL}/server/put`;
export const POST_REQUEST_JOIN_SERVER_URL = `${BASE_URL}/server/on`;
export const POST_ACCEPT_REQUEST_JOIN_URL = `${BASE_URL}/server/accept`;
export const POST_USER_LEAVE_SERVER_URL = `${BASE_URL}/server/off`;
export const POST_HEAD_OF_SERVER_RESIGN_URL = `${BASE_URL}/server/resign`;
export const DELETE_USER_FROM_SERVER_URL = `${BASE_URL}/server/target`;

// channel's route (pending)
export const POST_CREATE_CHANNEL_URL = `${BASE_URL}/channel/new`;
export const GET_CHANNEL_INFO = `${BASE_URL}/channel/:channelId`;
export const PUT_CHANNEL_INFO = `${BASE_URL}/channel/new`;
export const DELETE_CHANNEL_INFO = `${BASE_URL}/channel/new`;
