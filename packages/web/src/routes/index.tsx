import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Home from '@chips/web/pages/home/Home';

import CellSpace from '@chips/web/pages/cell';
import AccordionDemo from '@chips/web/pages/cell/accordionDemo/AccordionDemo';
import AvatarDemo from '@chips/web/pages/cell/avatarDemo/AvatarDemo';
import BadgeDemo from '@chips/web/pages/cell/badgeDemo/BadgeDemo';
import BreadcrumbsDemo from '@chips/web/pages/cell/breadcrumbsDemo/BreadcrumbsDemo';
import ButtonDemo from '@chips/web/pages/cell/buttonDemo/ButtonDemo';
import CardDemo from '@chips/web/pages/cell/cardDemo/CardDemo';
import CheckboxDemo from '@chips/web/pages/cell/checkboxDemo/CheckboxDemo';
import CollapseDemo from '@chips/web/pages/cell/collapseDemo/CollapseDemo';
import DialogDemo from '@chips/web/pages/cell/dialogDemo/DialogDemo';
import DrawerDemo from '@chips/web/pages/cell/drawerDemo/DrawerDemo';
import ListDemo from '@chips/web/pages/cell/listDemo/ListDemo';
import NotificationDemo from '@chips/web/pages/cell/notificationDemo/NotificationDemo';
import PaginationDemo from '@chips/web/pages/cell/paginationDemo/PaginationDemo';
import ProgressDemo from '@chips/web/pages/cell/progressDemo/ProgressDemo';
import RadioDemo from '@chips/web/pages/cell/radioDemo/RadioDemo';
import SelectDemo from '@chips/web/pages/cell/selectDemo/SelectDemo';
import ShadeDemo from '@chips/web/pages/cell/shadeDemo/ShadeDemo';
import SwitchDemo from '@chips/web/pages/cell/switchDemo/SwitchDemo';
import TableDemo from '@chips/web/pages/cell/tableDemo/TableDemo';
import TabsDemo from '@chips/web/pages/cell/tabsDemo/TabsDemo';
import TextFieldDemo from '@chips/web/pages/cell/textFieldDemo/TextFieldDemo';
import TooltipDemo from '@chips/web/pages/cell/tooltipDemo/TooltipDemo';

import CompoundSpace from '@chips/web/pages/compound';
import AppBarDemo from '@chips/web/pages/compound/appBarDemo/AppBarDemo';
import LoadingDemo from '@chips/web/pages/compound/loadingDemo/LoadingDemo';
import UserDropdownDemo from '@chips/web/pages/compound/userDropdown/UserDropdownDemo';

export interface RoutesMetaI {
  id?: number;
  name: string;
  route: string;
}

export type MetaT = { [key: string]: string | number | boolean };

export interface RouteModelI<Meta = MetaT> {
  path: string;
  component: React.ReactNode;
  exact?: boolean;
  meta?: RoutesMetaI;
  routes?: RouteModelI<Meta>[];
  name: string;
}

export interface RouterViewComponentPropsI<Meta = MetaT>
  extends RouteComponentProps<{ id: string }> {
  route: RouteModelI<Meta>;
}

export const routes: RouteModelI[] = [
  {
    path: '/guideline/',
    component: Home,
    exact: true,
    name: 'Home'
  },
  {
    path: '/guideline/cell',
    component: CellSpace,
    name: 'Components',
    routes: [
      {
        path: '/guideline/cell/accordion',
        component: AccordionDemo,
        exact: true,
        name: 'Accordion'
      },
      {
        path: '/guideline/cell/avatar',
        component: AvatarDemo,
        exact: true,
        name: 'Avatar'
      },
      {
        path: '/guideline/cell/badge',
        component: BadgeDemo,
        exact: true,
        name: 'Badge'
      },
      {
        path: '/guideline/cell/breadcrumbs',
        component: BreadcrumbsDemo,
        exact: true,
        name: 'Breadcrumbs'
      },
      {
        path: '/guideline/cell/button',
        component: ButtonDemo,
        exact: true,
        name: 'Button'
      },
      {
        path: '/guideline/cell/card',
        component: CardDemo,
        exact: true,
        name: 'Card'
      },
      {
        path: '/guideline/cell/checkbox',
        component: CheckboxDemo,
        exact: true,
        name: 'Checkbox'
      },
      {
        path: '/guideline/cell/collapse',
        component: CollapseDemo,
        exact: true,
        name: 'Collapse'
      },
      {
        path: '/guideline/cell/dialog',
        component: DialogDemo,
        exact: true,
        name: 'Dialog'
      },
      {
        path: '/guideline/cell/drawer',
        component: DrawerDemo,
        exact: true,
        name: 'Drawer'
      },
      {
        path: '/guideline/cell/list',
        component: ListDemo,
        exact: true,
        name: 'List'
      },
      {
        path: '/guideline/cell/notification',
        component: NotificationDemo,
        exact: true,
        name: 'Notification'
      },
      {
        path: '/guideline/cell/paginationDemo',
        component: PaginationDemo,
        exact: true,
        name: 'Pagination'
      },
      {
        path: '/guideline/cell/progressDemo',
        component: ProgressDemo,
        exact: true,
        name: 'Progress'
      },
      {
        path: '/guideline/cell/radio',
        component: RadioDemo,
        exact: true,
        name: 'Radio'
      },
      {
        path: '/guideline/cell/select',
        component: SelectDemo,
        exact: true,
        name: 'Select'
      },
      {
        path: '/guideline/cell/shade',
        component: ShadeDemo,
        exact: true,
        name: 'Shade'
      },
      {
        path: '/guideline/cell/switch',
        component: SwitchDemo,
        exact: true,
        name: 'Switch'
      },
      {
        path: '/guideline/cell/table',
        component: TableDemo,
        exact: true,
        name: 'Table'
      },
      {
        path: '/guideline/cell/tabs',
        component: TabsDemo,
        exact: true,
        name: 'Tabs'
      },
      {
        path: '/guideline/cell/textField',
        component: TextFieldDemo,
        exact: true,
        name: 'Text Field'
      },
      {
        path: '/guideline/cell/tooltip',
        component: TooltipDemo,
        exact: true,
        name: 'Tooltip'
      }
    ]
  },
  {
    path: '/guideline/compound',
    component: CompoundSpace,
    name: 'Compound Components',
    routes: [
      {
        path: '/guideline/compound/appBar',
        component: AppBarDemo,
        exact: true,
        name: 'App Bar'
      },
      {
        path: '/guideline/compound/loadingDemo',
        component: LoadingDemo,
        exact: true,
        name: 'Loading'
      },
      {
        path: '/guideline/compound/userDropdown',
        component: UserDropdownDemo,
        exact: true,
        name: 'User Dropdown'
      }
    ]
  }
];

export default routes;
