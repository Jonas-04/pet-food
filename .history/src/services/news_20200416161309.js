import request from 'umi-request';

export function getNewsList(params) {
  return request('/api/node/article', {
    method: 'POST',
    data: params,
  });
}