import * as fs from 'fs';

import { config, namespace } from './config';

let data: string;
let isDuplicate: boolean = false;
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
  console.error('fail, you have duplicate id 😱');
} else {
  fs.writeFile('./src/intl.js', data, function(err) {
    if (err) {
      console.log(err);
    }
    console.log('write success 😀');
  });
}
