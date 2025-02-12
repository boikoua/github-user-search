// Мой локальный тип, который я буду использовать уже в самом приложении
export type LocalGithubUser = {
  login: string;
  avatar: string;
  name: string;
  company: string | null;
  blog: string;
  location: string;
  bio: string;
  twitter: string | null;
  repos: number;
  followers: number;
  following: number;
  created: string;
};
// Тип приёма юзера от сервера
export type GithubUser = {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  company: string | null;
  blog: string;
  location: string;
  bio: string;
  twitter_username: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
};
// Тип для приёма несуществующего юзера
export type GithubError = {
  message: string;
  documentation_url: string;
};
