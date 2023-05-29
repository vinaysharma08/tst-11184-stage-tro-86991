import axios from "axios"
const tststagetroAPI = axios.create({
  baseURL: "https://tst-11184-stage-tro-86991.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_login_create(payload) {
  return tststagetroAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return tststagetroAPI.post(`/api/v1/signup/`, payload.data)
}
function api_v1_trophos_list(payload) {
  return tststagetroAPI.get(`/api/v1/trophos/`)
}
function api_v1_trophos_create(payload) {
  return tststagetroAPI.post(`/api/v1/trophos/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return tststagetroAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return tststagetroAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return tststagetroAPI.patch(`/rest-auth/user/`, payload.data)
}
function api_docs_schema_retrieve(payload) {
  return tststagetroAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function rest_auth_login_create(payload) {
  return tststagetroAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return tststagetroAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return tststagetroAPI.post(`/rest-auth/logout/`)
}
function api_v1_trophos_retrieve(payload) {
  return tststagetroAPI.get(`/api/v1/trophos/${payload.id}/`)
}
function api_v1_trophos_update(payload) {
  return tststagetroAPI.put(`/api/v1/trophos/${payload.id}/`, payload.data)
}
function api_v1_trophos_partial_update(payload) {
  return tststagetroAPI.patch(`/api/v1/trophos/${payload.id}/`, payload.data)
}
function api_v1_trophos_destroy(payload) {
  return tststagetroAPI.delete(`/api/v1/trophos/${payload.id}/`)
}
function rest_auth_registration_create(payload) {
  return tststagetroAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return tststagetroAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return tststagetroAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return tststagetroAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return tststagetroAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
export const apiService = {
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_trophos_list,
  api_v1_trophos_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  api_v1_trophos_retrieve,
  api_v1_trophos_update,
  api_v1_trophos_partial_update,
  api_v1_trophos_destroy,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_verify_email_create
}
