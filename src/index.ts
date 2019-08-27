import * as fs from 'fs';

import { config, Intl, namespace } from './config';

let data: string;

data = `import { getIntl, defineMessages } from '@sc/intl';
const intl = getIntl();

const messages = defineMessages({
`;

data += getData(config, namespace);

data += `});

const intlMsg = id => intl.formatMessage(messages[id]);

export { intlMsg };
`;

function getData(config: Intl[], namespace: string) {
  return config.map(v => {
    return `  ${v.id}: {
    id: '${namespace}:${v.id}',
    defaultMessage: '${v.msg}'
  },
`;
  }).join('');
}

fs.writeFile('./src/intl.js', data, function(err) {
  if (err) {
    console.log(err);
  }
  console.log('write success 😀');
});
