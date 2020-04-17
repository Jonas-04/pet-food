import request from 'umi-request';

export function getNewsList() {
  return request('/api/node/article', {
    method: 'GET'
  });
}