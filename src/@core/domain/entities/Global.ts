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

export interface DTOProps<T = any, U = any, V = any> {
  query?: T;
  params?: U;
  payload?: V;
}
