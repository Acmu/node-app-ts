/**
 * @file 国际化工具方法
 * @author MinYuan
 */

interface Intl {
  dir: string,
  data: [string, string][]
}

const namespace = 'config-function';

const config: Intl[] = [
  {
    dir: 'Demo',
    data: [
      [ 'dict_equal', '等于' ],
      [ 'dict_equal2', '等于' ],
    ]
  },
  {
    dir: 'Demo',
    data: [
      [ 'dict_equal3545', '等于' ],
      [ 'dict_equal2er', '等于' ],
    ]
  },
];

export { config, namespace, Intl };
