/*
*  interface  para lidar com a estrutura de resposta da API
*/
export interface IApiResponse<T> {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  },
  results: T[];
}
