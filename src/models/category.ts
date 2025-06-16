import { Images } from "./commonType";

export interface GetServeralCategoryReq {
  limit?: number;
  offset?: number;
}

export interface GetServeralCategoryRes {
  categories: {
    href: string;
    limit: number;
    next: string;
    offset: string;
    previous: string | null;
    total: number;
    items: CategoryItem[];
  };
}

export interface CategoryItem {
  href: string;
  icons: Images[];
  id: string;
  name: string;
}
