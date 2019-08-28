/**
 * @file 国际化工具方法
 * @author MinYuan
 */

import * as fs from 'fs';

import { config, namespace } from './config';

let data: string;
let isDuplicate: boolean = false;
let duplicateId: string;
const keySet = new Set();

data = `import { getIntl, defineMessages } from '@sc/intl';

const intl = getIntl();

const messages = defineMessages({
`;

data += getData(config, namespace);

data += `});

const intlMsg = id => intl.formatMessage(messages[id]);

export { intlMsg };
`;

function getData(config: [string, string][], namespace: string) {
  return config
    .map(v => {
      const [id, msg] = v;
      if (keySet.has(id)) {
        isDuplicate = true;
        duplicateId = id;
      }
      keySet.add(id);
      return `  ${id}: {
    id: '${namespace}:${id}',
    defaultMessage: '${msg}'
  },
`;
    })
    .join('');
}

if (isDuplicate) {
  console.error(`Failed beacuse of duplicate id '${duplicateId}' 😱`);
} else {
  fs.writeFile('./src/intl.js', data, function(err) {
    if (err) {
      console.log(err);
    }
    console.log('Write success 😀');
  });
}
