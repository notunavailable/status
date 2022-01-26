let ORIGIN;

if (process.env.NODE_ENV === 'development') {
    ORIGIN = "http://localhost:5000";
}
else {
    ORIGIN = "http://sometimesaurora.com"
}

//user related endpoints
export const CREATE_USER = () => `${ORIGIN}/api/v1/user/register`;
export const GET_USER_EMAIL = (email) => `${ORIGIN}/api/v1/user/get/id${email}`;
export const EDIT_USER_ID = (id) => `${ORIGIN}/api/v1/user/get/id${id}`;
export const DELETE_USER_ID = (id) => `${ORIGIN}/api/v1/user/delete/id${id}`;

//skill related endpoints
export const CREATE_SKILL = () => `${ORIGIN}/api/v1/skill/create`;
export const GET_SKILL_ID = (id) => `${ORIGIN}/api/v1/skill/get/id${id}`;
export const GET_ALL_SKILLS = () => `${ORIGIN}/api/v1/skill/get/all`;
export const EDIT_SKILL_ID = (id) => `${ORIGIN}/api/v1/skill/edit/id${id}`;
export const DELETE_SKILL_ID = (id) => `${ORIGIN}/api/v1/skill/delete/id${id}`;

//attribute related endpoints
export const CREATE_ATTRIBUTE = () => `${ORIGIN}/api/v1/attribute/create`;
export const GET_ATTRIBUTE_ID = (id) => `${ORIGIN}/api/v1/attribute/get/id${id}`;
export const GET_ATTRIBUTE_NAME = (name) => `${ORIGIN}/api/v1/attribute/get/name${name}`;
export const GET_ALL_ATTRIBUTES = () => `${ORIGIN}/api/v1/attribute/get/all`;
export const EDIT_ATTRIBUTE_ID = (id) => `${ORIGIN}/api/v1/attribute/edit/id${id}`;
export const DELETE_ATTRIBUTE_ID = (id) => `${ORIGIN}/api/v1/attribute/delete/id${id}`;

//level related endpoints
export const CREATE_LEVEL = () => `${ORIGIN}/api/v1/level/create`;
export const GET_LEVEL_ID = (id) => `${ORIGIN}/api/v1/level/get/id${id}`; 
export const EDIT_LEVEL_ID = (id) => `${ORIGIN}/api/v1/level/edit/id${id}`;
export const DELETE_LEVEL_ID = (id) => `${ORIGIN}/api/v1/level/delete/id${id}`;

//levelProgression related endpoints
export const CREATE_LEVELPROGRESSION = () => `${ORIGIN}/api/v1/levelProgression/create`;
export const GET_LEVEL_LEVEL = (level) => `${ORIGIN}/api/v1/level/get/level${level}`;