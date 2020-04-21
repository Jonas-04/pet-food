import request from 'umi-request';
import {baseUrl} from '../config/config';

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