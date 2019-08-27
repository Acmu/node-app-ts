interface Intl {
  id: string;
  msg: string;
}

const config: Intl[] = [
  {
    id: 'at',
    msg: '在'
  },
  {
    id: 'done',
    msg: '做过'
  },

  {
    id: 'add_event',
    msg: '添加事件'
  },


];

const namespace = 'event-series';

export { config, Intl, namespace };
