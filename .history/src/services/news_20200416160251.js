import request from 'umi-request';

export function getNewsList(params) {
  return request('/api/login/account', {
    method: 'POST',
    data: params,
  });
}