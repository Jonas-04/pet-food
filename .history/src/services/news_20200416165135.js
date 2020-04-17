import request from 'umi-request';

export function getNewsList() {
  return request('/api/node/article?include=field_image', {
    method: 'GET'
  });
}

export function getNewsDteail(id) {
  return request(`/api/node/article/${id}`, {
    method: 'GET'
  });
}