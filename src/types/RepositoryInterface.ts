export interface RepositoryInterface {
  id: number;
  name: string;
  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
  stargazers_count: number;
}

export interface RepositoryStateInterface {
  repositories: RepositoryInterface[];
}
