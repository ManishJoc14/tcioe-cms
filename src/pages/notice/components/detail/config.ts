import { DynamicInfoSectionProps } from '@/components/detail-section/types';
import { INoticeDetails } from '../../redux/types';

export const viewNoticeConfig: Omit<DynamicInfoSectionProps<INoticeDetails>, 'data'> = {
  excludeFields: [
    'id',
    'thumbnail',
    'createdAt',
    'updatedAt',
    'createdBy',
    'updatedBy',
    'department',
    'category',
    'slug',
    'description',
    'isActive'
  ],
  fieldOrder: ['title', 'author.fullName', 'department.name', 'category.name', 'isFeatured'],
  booleanFields: ['isActive', 'isFeatured'],
  columns: 4,
  customLabels: {
    title: 'Notice title',
    'author.fullName': 'Author',
    'department.name': 'Department',
    'category.name': 'Category',
    isFeatured: 'Featured Status'
  }
};
