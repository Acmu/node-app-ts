/**
 * @file 国际化工具方法
 * @author MinYuan
 */

import * as fs from 'fs';

import { config, namespace, Intl } from './config';

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

function getDataItem({ namespace, uniqueKey, msg }) {
  return `  ${uniqueKey}: {
    id: '${namespace}:${uniqueKey}',
    defaultMessage: '${msg}'
  },
`;
}

function getData(config: Intl[], namespace: string) {
  return config
    .map(v => {
      const { dir, data } = v;
      return data
        .map(dataItem => {
          const [id, msg] = dataItem;
          const uniqueKey = `${dir}__${id}`;
          if (keySet.has(uniqueKey)) {
            isDuplicate = true;
            duplicateId = uniqueKey;
          }
          keySet.add(uniqueKey);
          return getDataItem({ namespace, uniqueKey, msg });
        })
        .join('');
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
