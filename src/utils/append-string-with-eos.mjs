import os from 'node:os';

/**
 * concat two strings and appends EOL in the end
 * 
 * @param {string} str 
 * @param {str} data 
 * @returns {string}
 */
export const appendStringWithEOS = (str, data) => `${str}${data}${os.EOL}`;
