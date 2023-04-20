import userModule from '@/store/modules/userModules';
import { StoreEnum } from '@/types';

export default {
  modules: {
    users: userModule,
    [StoreEnum.ModuleNames.USER]: userModule
  }
};
