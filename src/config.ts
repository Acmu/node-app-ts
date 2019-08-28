/**
 * @file 国际化工具方法
 * @author MinYuan
 */

interface Intl {
  dir: string | string[];
  data: [string, string][];
}

const namespace = 'tag-config-panel';

const config: Intl[] = [
  {
    dir: 'BasicInfoConfig',
    data: [
      ['input_err', '填写有误'],
      ['tag_name', '标签名称'],
      ['tag_id', '标签 ID'],
      ['group', '分组'],
      ['update_way', '更新方式'],
      ['remark', '备注'],
      ['group_name', '分群名称'],
      ['group_id', '分群 ID'],
      ['update2', '更新方式'],
      ['push_setting', '推送设置'],
      ['remark2', '备注'],
      ['input_tag_name', '请填写标签名'],
      ['input_group_name', '请填写分群名'],
      ['select_group', '选择分组'],
      ['routine', '例行'],
      ['manual', '手动'],
      ['with', '按'],
      ['day', '天'],
      ['compute', '计算'],
      ['group_update', '标签每日凌晨更新'],
      ['select_push_setting', '选择推送配置'],
      ['push_config', '推送配置'],
    ],
  },
  {
    dir: 'SQLRule',
    data: [
      // this is a problem
      // ['default_tips', '---'],
      ['str', '字符串'],
      ['str_demo', '字符串，如:"abc"'],
      ['bool', '布尔'],
      ['num', '数值'],
      ['num2', '数值'],
      ['time', '时间'],
      ['timestamp', '时间戳，如:1597786534000'],
      ['set', '集合'],
      ['set_demo', '使用"\\\\n"分割的字符串，如:"手机\\\\n电脑\\\\n相机"'],
      ['tag_type', '标签数据类型'],
      ['more_rules', '更多规则'],
      ['sql_template', 'SQL 模板'],
      ['sql_return', 'SQL 语句中第三列返回值为'],
      ['now_time', '当前基准时间'],
      ['input_table', '输入表名搜索'],
    ],
  },
  {
    dir: 'UserGroupRule',
    data: [['desc', '在全部用户中，将满足以下条件的用户保存为用户分群']],
  },
  {
    dir: 'UserTagRule',
    data: [
      ['d1', '在全部用户中，将满足以下条件的用户分为'],
      ['layout', '个分层'],
      [
        'd2',
        '系统会按照以下自定义分层的顺序进行用户匹配，同一用户会被优先匹配在顺序靠前的分层中',
      ],
    ],
  },
  {
    dir: 'src',
    data: [
      ['tag', '标签'],
      ['layout_1', '分层1'],
      ['layout_2', '分层2'],
      ['group', '分群'],
      ['last_res', '更新最近一次结果'],
      ['use_new_rule', '使用新规则，重新计算最近一次计算结果'],
      ['next_new_rule', '下次计算时使用新规则'],
      ['old_res', '保留旧规则的计算结果，下次计算时使用新规则计算'],
      ['set_basic', '设置基础信息'],
      ['set', '设置'],
      ['rule', '规则'],
      ['name_not_empty', '名称不可为空'],
      ['name_again', '该名称已被占用，请重新命名'],
      ['layout_no_repeat', '分层名称不可重复'],
      ['layout_no_empty', '分层名称不能为空'],
      ['lay', '分层'],
      ['previous', '上一步'],
      ['next', '下一步'],
      ['edit_user', '编辑用户'],
      ['create_user', '创建用户'],
      ['this', '该'],
      ['computing', '正在计算中，暂时无法修改'],
      ['cancel', '取消'],
      ['person', '预估人数'],
      ['copy', '复制规则创建新'],
      ['hope', '对于已完成计算的历史结果，您希望'],
      ['sure', '确定'],
      ['cancel2', '取消'],
      ['update', '更新'],
      ['cre', '创建'],
      ['upd', '更新'],
    ],
  },
  // {
  //   dir: 'src',
  //   data: [
  //     ['tag', '标签'],
  //   ]
  // },
];

export { config, namespace, Intl };
