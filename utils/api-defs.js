let ORIGIN;

if (process.env.NODE_ENV === 'development') {
    ORIGIN = "http://localhost:5000";
}
else {
    ORIGIN = "http://sometimesaurora.com"
}

//user related endpoints
export const CREATE_USER = () => `${ORIGIN}/api/v1/user/register`;
export const GET_USER = (email) => `${ORIGIN}/api/v1/user/get/${email}`;
export const EDIT_USER = (id) => `${ORIGIN}/api/v1/user/get/${id}`;
export const DELETE_USER = (id) => `${ORIGIN}/api/v1/user/delete/${id}`;

//skill related endpoints
export const CREATE_SKILL = () => `${ORIGIN}/api/v1/skill/create`;
export const GET_SKILL = (id) => `${ORIGIN}/api/v1/skill/get/${id}`;
export const GET_ALL_SKILLS = () => `${ORIGIN}/api/v1/skill/get/all`;
export const EDIT_SKILL = (id) => `${ORIGIN}/api/v1/skill/edit/${id}`;
export const DELETE_SKILL = (id) => `${ORIGIN}/api/v1/skill/delete/${id}`;

//attribute related endpoints
export const CREATE_ATTRIBUTE = () => `${ORIGIN}/api/v1/attribute/create`;
export const GET_ATTRIBUTE = (id) => `${ORIGIN}/api/v1/attribute/get/${id}`;
export const GET_ALL_ATTRIBUTES = () => `${ORIGIN}/api/v1/attribute/get/all`;
export const EDIT_ATTRIBUTE = (id) => `${ORIGIN}/api/v1/attribute/edit/${id}`;
export const DELETE_ATTRIBUTE = (id) => `${ORIGIN}/api/v1/attribute/delete/${id}`;

//level related endpoints
export const CREATE_LEVEL = () => `${ORIGIN}/api/v1/level/create`;
export const GET_LEVEL = (id) => `${ORIGIN}/api/v1/level/get/${id}`; 
export const EDIT_LEVEL = (id) => `${ORIGIN}/api/v1/level/edit/${id}`;
export const DELETE_LEVEL = (id) => `${ORIGIN}/api/v1/level/delete/${id}`;