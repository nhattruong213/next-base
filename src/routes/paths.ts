// utils
import { _id } from 'src/_mock/assets';

// ----------------------------------------------------------------------

const MOCK_ID = _id[1];

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/',
};

// ----------------------------------------------------------------------

export const paths = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  page403: '/error/403',
  page404: '/error/404',
  page500: '/error/500',
  components: '/components',
  // AUTH
  auth: {
    jwt: {
      login: `${ROOTS.AUTH}/jwt/login`,
      register: `${ROOTS.AUTH}/jwt/register`,
    },
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    general: {
      app: `${ROOTS.DASHBOARD}/app`,
    },
    user: {
      root: `${ROOTS.DASHBOARD}/user`,
      new: `${ROOTS.DASHBOARD}/user/new`,
      list: `${ROOTS.DASHBOARD}/user/list`,
      cards: `${ROOTS.DASHBOARD}/user/cards`,
      profile: `${ROOTS.DASHBOARD}/user/profile`,
      account: `${ROOTS.DASHBOARD}/user/account`,
      edit: (id: string) => `${ROOTS.DASHBOARD}/user/${id}/edit`,
      demo: {
        edit: `${ROOTS.DASHBOARD}/user/${MOCK_ID}/edit`,
      },
    },
  },
};
