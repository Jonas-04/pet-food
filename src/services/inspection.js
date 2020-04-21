import request from 'umi-request';
import {baseUrl} from '../config/config';


//获取产品分类
export function getFoodCategory() {
  return request(`${baseUrl}/taxonomy_term/food_category/`, {
    method: 'GET'
  });
}

//获取产品质检报告
export function getLicenseCategory() {
  return request(`${baseUrl}/node/license_category/`, {
    method: 'GET'
  });
}

export function getLicenseCategoryId(id) {
  return request(`${baseUrl}/node/license_category/${id}`, {
    method: 'GET'
  });
}

export function getLicenseCategoryImageId(id) {
  return request(`${baseUrl}/node/license_category/${id}?include=field_images`, {
    method: 'GET'
  });
}