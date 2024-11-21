import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

export interface IProject {
  _id?: string;
  name: string;
  type: string;
  images?: string[];
  description: string;
  features: string[];
  technologies: string[];
  duration: string;
  live_link: string;
  client_link: string;
  server_link: string;
}
export interface IProjectContext {
  loadingProjectCount: boolean;
  projectCount: number;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  itemsPerPage: number;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  loadingProjects: boolean;
  projectData: IProject[];
  refetchAllProjects: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<any, Error>>;
  resetBrowser: () => void;
  resetPagination: () => void;
}
