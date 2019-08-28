/**
 * @file 国际化工具方法
 * @author MinYuan
 */

const namespace = 'config-function';

const config: [string, string][] = [
  [ 'dict_equal', '等于' ],
  [ 'dict_notEqual', '不等于' ],
  [ 'dict_isSet', '有值' ],
  [ 'dict_notSet', '没值' ],
  [ 'number_equal', '等于' ],
  [ 'number_notEqual', '不等于' ],
  [ 'number_less', '小于' ],
  [ 'number_greater', '大于' ],
  [ 'number_between', '区间' ],
  [ 'number_isSet', '有值' ],
  [ 'number_notSet', '没值' ],
  [ 'string_equal', '等于' ],
  [ 'string_notEqual', '不等于' ],
  [ 'string_contain', '包含' ],
  [ 'string_notContain', '不包含' ],
  [ 'string_isSet', '有值' ],
  [ 'string_notSet', '没值' ],
  [ 'string_isEmpty', '为空' ],
  [ 'string_isNotEmpty', '不为空' ],
  [ 'string_rlike', '正则匹配' ],
  [ 'string_notrlike', '正则不匹配' ],
  [ 'list_in', '包含' ],
  [ 'list_notInclude', '不包含' ],
  [ 'list_isEmpty', '为空' ],
  [ 'list_isNotEmpty', '不为空' ],
  [ 'list_isSet', '有值' ],
  [ 'list_notSet', '没值' ],
  [ 'date_absolute_between', '绝对时间' ],
  [ 'date_relative', '相对当前时间点' ],
  [ 'date_relative_between', '相对当前时间区间' ],
  [ 'date_isSet', '有值' ],
  [ 'date_notSet', '没值' ],
  [ 'datetime_absolute_between', '绝对时间' ],
  [ 'datetime_relative', '相对当前时间点' ],
  [ 'datetime_relative_between', '相对当前时间区间' ],
  [ 'datetime_isSet', '有值' ],
  [ 'datetime_notSet', '没值' ],
  [ 'bool_isTrue', '为真' ],
  [ 'bool_isFalse', '为假' ],
  [ 'bool_isSet', '有值' ],
  [ 'bool_notSet', '没值' ],
];

export { config, namespace };
