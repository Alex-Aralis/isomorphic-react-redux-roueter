import { constJoin } from 'utilities';
import mapValues from 'lodash/mapValues';

export const listActionFactory = (type) => {
  let actions = {
    append: data => ({ data }),
    insert: (id, data) => ({ id, data }),
    delete: id => ({ id }),
    update: (id, data) => ({ id, data }),
    sort: comparator => ({comparator }),
  };

  return mapValues(actions,
    (action, verb) =>
      (...args) =>
        ({ ...action(...args), type: constJoin(verb, type) })
  );
};
