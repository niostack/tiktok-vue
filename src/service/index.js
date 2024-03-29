import request, { post } from '../utils/request'
import * as util from '../utils'
import api from '../api'
export function auth({ password }) {
  return request({
    method: 'post',
    url: api.auth,
    data: {
      password
    }
  })
}

export function logout() {
  util.delCookie('password')
}
export function get_devices() {
  return request({
    method: 'get',
    url: api.device,
  })
}


export function install(formData) {
  return request({
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    url: api.install,
    data: formData
  })
}


export function script({ script, serial = "", args = [] }) {
  let params = { script };
  if (serial) {
    params.serial = serial
  }

  if (args.length > 0) {
    params.args = args.join(',')
  }

  return request({
    method: 'get',
    url: api.script,
    params
  })
}

export function get_materials_byused({ used }) {
  return request({
    method: 'get',
    url: api.material,
    params: { used }
  })
}
export function get_materials() {
  return request({
    method: 'get',
    url: api.material,
  })
}
export function get_material_count({ used, group_id }) {
  return request({
    method: 'get',
    url: api.material_count,
    params: { used, group_id }
  })
}

export function upload_material(formData,) {
  return post({
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    url: api.material,
    data: formData
  })
}
export function upload_to_virtualHost(formData) {
  return post({
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    url: api.upload_to_virtualHost,
    baseURL: `http://${window.location.hostname}:${import.meta.env.VITE_AGENT_PORT}`,
    data: formData
  })
}
export function upload_video(baseURL, formData) {
  return post({
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    url: api.upload_video,
    baseURL,
    data: formData
  })
}

export function delete_material({ id }) {
  return request({
    method: 'delete',
    url: api.material,
    params: { id }
  })
}
export function get_accounts() {
  return request({
    method: 'get',
    url: api.account,
  })
}
export function get_publish_jobs() {
  return request({
    method: 'get',
    url: api.publish_job,
  })
}
export function add_account({ email, pwd, fans, device, group_id, username }) {
  return request({
    method: 'post',
    url: api.account,
    data: { email, pwd, fans, device, group_id, username }
  })
}
export function update_account({ id, email, pwd, fans, device, group_id, username }) {
  return request({
    method: 'put',
    url: api.account,
    data: { id, email, pwd, fans, device, group_id, username }
  })
}
export function delete_account({ id }) {
  return request({
    method: 'delete',
    url: api.account,
    params: { id }
  })
}
export function get_proxys() {
  return request({
    method: 'get',
    url: api.proxy,
  })
}
export function add_proxys({ urls }) {
  return request({
    method: 'post',
    url: api.proxy,
    data: { urls }
  })
}
export function test_speed({ name }) {
  return request({
    method: 'get',
    url: api.proxy_delay,
    params: { name }
  })
}

export function get_train_jobs() {
  return request({
    method: 'get',
    url: api.train_job,
  })
}
export function delete_train_job({ id }) {
  return request({
    method: 'delete',
    url: api.train_job,
    params: { id }
  })
}
export function update_train_job({ id, status }) {
  return request({
    method: 'put',
    url: api.train_job,
    data: { id, status }
  })
}
export function delete_publish_job({ id }) {
  return request({
    method: 'delete',
    url: api.publish_job,
    params: { id }
  })
}
export function update_publish_job({ id, status, publish_type }) {
  return request({
    method: 'put',
    url: api.publish_job,
    data: { id, status, publish_type }
  })
}
export function shell({ serial, cmd }) {
  return request({
    method: 'post',
    url: api.shell,
    data: { serial, cmd }
  })
}
//repair
export function init({ serial, init }) {
  return request({
    method: 'get',
    url: api.init,
    params: { serial, init }
  })
}
export function get_groups() {
  return request({
    method: 'get',
    url: api.group,
  })
}
export function add_group({ name, auto_train, auto_publish, publish_start_time,
  train_start_time, title, publish_type, product_link, floow_probable, like_probable,
  collect_probable, train_duration }) {
  return request({
    method: 'post',
    url: api.group,
    data: {
      name, auto_train, auto_publish, publish_start_time,
      train_start_time, title, publish_type, product_link, floow_probable, like_probable,
      collect_probable, train_duration
    }
  })
}
export function update_group({ id, name, auto_train, auto_publish, publish_start_time,
  train_start_time, title, publish_type, product_link, floow_probable, like_probable,
  collect_probable, train_duration }) {
  return request({
    method: 'put',
    url: api.group,
    data: {
      id, name, auto_train, auto_publish, publish_start_time,
      train_start_time, title, publish_type, product_link, floow_probable, like_probable,
      collect_probable, train_duration
    }
  })
}
export function delete_group({ id }) {
  return request({
    method: 'delete',
    url: api.group,
    params: { id }
  })
}
export function get_musics() {
  return request({
    method: 'get',
    url: api.music,
  })
}
export function add_music({ release_name, artist_name }) {
  return request({
    method: 'post',
    url: api.music,
    data: { release_name, artist_name }
  })
}
export function update_music({ id, release_name, artist_name }) {
  return request({
    method: 'put',
    url: api.music,
    data: { id, release_name, artist_name }
  })
}
export function delete_music({ id }) {
  return request({
    method: 'delete',
    url: api.music,
    params: { id }
  })
}

export function get_watchers() {
  return request({
    method: 'get',
    url: api.watcher,
  })
}
export function add_watcher({ name, conditions, action, status }) {
  return request({
    method: 'post',
    url: api.watcher,
    data: { name, conditions, action, status }
  })
}
export function update_watcher({ id, name, conditions, action, status }) {
  return request({
    method: 'put',
    url: api.watcher,
    data: { id, name, conditions, action, status }
  })
}
export function delete_watcher({ id }) {
  return request({
    method: 'delete',
    url: api.watcher,
    params: { id }
  })
}

export function get_settings() {
  return request({
    method: 'get',
    url: api.settings,
  })
}
export function update_settings({ proxy_url, server_url, timezone, wifi_name, wifi_password, adb_mode, version, openai_api_key, email_suffix, password }) {
  return request({
    method: 'put',
    url: api.settings,
    data: { proxy_url, server_url, timezone, wifi_name, wifi_password, adb_mode, version, openai_api_key, email_suffix, password }
  })
}
export function get_task_status({ serial }) {
  return request({
    method: 'get',
    url: api.task_status,
    params: { serial }
  })
}
export function get_license() {
  return request({
    method: 'get',
    url: api.get_license,
  })
}
export function add_license({ key }) {
  return request({
    method: 'post',
    url: api.add_license,
    data: { key }
  })
}
export function get_avatars() {
  return request({
    method: 'get',
    url: api.avatar,
  })
}
export function upload_avatar(formData) {
  return post({
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    url: api.avatar,
    data: formData
  })
}
export function delete_avatar({ id }) {
  return request({
    method: 'delete',
    url: api.avatar,

    params: { id }
  })
}
export function count_train_job_by_status() {
  return request({
    method: 'get',
    url: api.count_train_job_by_status,
  })
}
export function count_publish_job_by_status() {
  return request({
    method: 'get',
    url: api.count_publish_job_by_status,
  })
}
export function count_online_device() {
  return request({
    method: 'get',
    url: api.count_online_device,
  })
}
export function count_all_account() {
  return request({
    method: 'get',
    url: api.count_all_account,
  })
}
export function count_account_by_group_id({ group_id }) {
  return request({
    method: 'get',
    url: api.count_account_by_group_id,
    params: { group_id }
  })
}
export function retry_all_failed_train_job() {
  return request({
    method: 'get',
    url: api.retry_all_failed_train_job,
  })
}
export function retry_all_failed_publish_job() {
  return request({
    method: 'get',
    url: api.retry_all_failed_publish_job,
  })
}
export function add_post_comment({ post_url }) {
  return request({
    method: 'post',
    url: api.post_comment,
    data: { post_url }
  })
}
export function get_post_comments() {
  return request({
    method: 'get',
    url: api.post_comment,
  })
}
export function gen_topic_comments({ content, account_count }) {
  return request({
    method: 'post',
    url: api.gen_topic_comments,
    data: { content, account_count }
  })
}
export function add_post_comment_topic(post_comment_topic) {
  return request({
    method: 'post',
    url: api.post_comment_topic,
    data: post_comment_topic
  })
}
export function add_comment({ account_id, content, no, parent_no }) {
  return request({
    method: 'post',
    url: api.comment,
    data: { account_id, content, no, parent_no }
  })
}
export function read_clipboard({ baseURL, serial }) {
  return request({
    baseURL,
    method: 'get',
    url: api.read_clipboard,
    params: { serial }
  })
}
export function count_comment_job_by_status() {
  return request({
    method: 'get',
    url: api.count_comment_job_by_status,
  })
}
export function delete_all_materials() {
  return request({
    method: 'delete',
    url: api.delete_all_materials,
  })
}
export function delete_all_train_jobs() {
  return request({
    method: 'delete',
    url: api.delete_all_train_jobs,
  })
}
export function delete_all_publish_jobs() {
  return request({
    method: 'delete',
    url: api.delete_all_publish_jobs,
  })
}
export function delete_all_post_comments() {
  return request({
    method: 'delete',
    url: api.delete_all_post_comments,
  })
}
export function get_ip({ serial, agent_ip }) {
  return request({
    method: 'get',
    baseURL: `http://${agent_ip}:${import.meta.env.VITE_AGENT_PORT}`,
    url: api.get_ip,
    params: { serial }
  })
}
export function enable_proxy_rule({ serial, ip }) {
  return request({
    method: 'put',
    url: api.proxy_rule,
    data: { serial, ip }
  })
}
export function get_analytics() {
  return request({
    method: 'get',
    url: api.analytics,
  })
}
export function get_virtualHosts() {
  return request({
    baseURL: `http://${window.location.hostname}:${import.meta.env.VITE_AGENT_PORT}`,
    method: 'get',
    url: api.virtualHosts,
  })
}
export function add_or_update_virtualHost(virtualHosts) {
  return request({
    baseURL: `http://${window.location.hostname}:${import.meta.env.VITE_AGENT_PORT}`,
    method: 'post',
    url: api.virtualHosts,
    data: virtualHosts
  })
}
export function init_virtualHost({ ids }) {
  return request({
    baseURL: `http://${window.location.hostname}:${import.meta.env.VITE_AGENT_PORT}`,
    method: 'get',
    params: { ids },
    url: api.init_virtualHost,
  })

}
export function delete_virtualHost({ id }) {
  return request({
    baseURL: `http://${window.location.hostname}:${import.meta.env.VITE_AGENT_PORT}`,
    method: 'delete',
    params: { id },
    url: api.virtualHosts,
  })
}
export function get_post_bot_status({ id }) {
  return request({
    baseURL: `http://${window.location.hostname}:${import.meta.env.VITE_AGENT_PORT}`,
    method: 'get',
    params: { id },
    url: api.get_post_bot_status,
  })
}
export function start_post_bot({ ids }) {
  return request({
    baseURL: `http://${window.location.hostname}:${import.meta.env.VITE_AGENT_PORT}`,
    method: 'get',
    params: { ids },
    url: api.start_post_bot,
  })
}
export function stop_post_bot({ ids }) {
  return request({
    baseURL: `http://${window.location.hostname}:${import.meta.env.VITE_AGENT_PORT}`,
    method: 'get',
    params: { ids },
    url: api.stop_post_bot,
  })
}
export function start_edit_bot({ ids }) {
  return request({
    baseURL: `http://${window.location.hostname}:${import.meta.env.VITE_AGENT_PORT}`,
    method: 'get',
    params: { ids },
    url: api.start_edit_bot,
  })
}
export function stop_edit_bot({ ids }) {
  return request({
    baseURL: `http://${window.location.hostname}:${import.meta.env.VITE_AGENT_PORT}`,
    method: 'get',
    params: { ids },
    url: api.stop_edit_bot,
  })
}
export function clear_edit_bot({ id, dir }) {
  return request({
    baseURL: `http://${window.location.hostname}:${import.meta.env.VITE_AGENT_PORT}`,
    method: 'get',
    params: { id, dir },
    url: api.clear_edit_bot,
  })
}