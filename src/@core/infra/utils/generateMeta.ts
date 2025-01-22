import { MetaProps } from '@/@core/domain/entities/Global';

export class GenerateMeta implements MetaProps {
  currentPage: number;
  pageSize: number;
  totalData: number;
  totalPage: number;

  constructor(totalData: number, currentPage: number, pageSize: number) {
    this.totalData = totalData;
    this.currentPage = currentPage;
    this.pageSize = pageSize;
    this.totalPage = Math.ceil(totalData / pageSize);
  }

  getOffset(): number {
    return (this.currentPage - 1) * this.pageSize;
  }

  getLimit(): number {
    return this.pageSize;
  }
}
