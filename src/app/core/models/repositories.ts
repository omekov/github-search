export interface RepositoriesState {
  repositories: Repositories;
  loader: boolean;
  error: string;
}

export interface Repositories {
  total_count: number;
  items: Items[];
}
export interface Items {
  id?: number;
  full_name: string;
  description: string;
  language: string;
  stargazers_count: number;
  updated_at: string;
  html_url: string;
  clone_url: string;
  created_at: string;
  homepage: string;
  name: string;
  owner: {
    avatar_url: string;
    html_url: string;
    login: string;
  };
  watchers: number;
  stargazers_url: string;
  size: number;
  ssh_url: string;
}
