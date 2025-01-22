/* eslint-disable @typescript-eslint/no-explicit-any */

export interface MetaProps {
  currentPage?: number; // Halaman saat ini
  pageSize?: number; // Jumlah data per halaman
  totalData?: number; // Total data yang tersedia
  totalPage?: number; // Total halaman (dihitung dari totalData dan pageSize)
}

export interface ResponseProps<T> {
  status: boolean;
  meta?: MetaProps;
  data?: T;
}

export type PromiseResponseProps<T> = Promise<ResponseProps<T>>;

export interface DefaultMetaDTOProps {
  page?: number;
  limit?: number;
}

export interface DTOProps<
  Props extends { Query?: any; Params?: any; Payload?: any } = {
    Query?: DefaultMetaDTOProps;
  },
> {
  query?: Props['Query'];
  params?: Props['Params'];
  payload?: Props['Payload'];
}

export interface Usecase<Props = any, Response = any> {
  execute(props?: Props): Response;
}
