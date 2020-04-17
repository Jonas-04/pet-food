import request from 'umi-request';

const baseUrl = 'http://go-charr-drupal.c60795b656a25414792b17fae115d4da1.cn-hangzhou.alicontainer.com/jsonapi'

export function getNewsList() {
  return request(`${baseUrl}/node/article?include=field_image`, {
    method: 'GET'
  });
}

export function getNewsDteail(id) {
  return request(`${baseUrl}/node/article/${id}`, {
    method: 'GET'
  });
}