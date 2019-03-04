/**
 * @license
 * Copyright FabricElements. All Rights Reserved.
 */

/**
 * Check if URl is valid and format
 *
 * @param {string} url
 * @returns {string} {boolean}
 */
export const validate = (url: string | null): string | boolean => {
  const baseURL = !!url ? String(url) : "";
  const cleanUrl = baseURL.replace(/\s+/g, "");
  const isURL = new RegExp("^(https|http):\/\/(w{3}.)?([a-zA-Z0-9.]+)");
  if (!isURL.test(cleanUrl)) {
    return false;
  }
  return cleanUrl;
};