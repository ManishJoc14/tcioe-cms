import { DynamicInfoSectionProps } from '@/components/detail-section/types';
import { ICampusUnionsDetails } from '../../redux/types';

export const viewCampusUnionsConfig: Omit<DynamicInfoSectionProps<ICampusUnionsDetails>, 'data'> = {
  excludeFields: ['id', 'updatedAt', 'updatedBy', 'isActive', 'shortDescription', 'members'],
  fieldOrder: ['name', 'websiteUrl', 'createdAt', 'createdBy'],
  booleanFields: ['isActive'],
  dateTimeFields: ['createdAt'],
  columns: 4,
  customLabels: {
    name: 'Name',
    websiteUrl: 'Website URL',
    createdAt: 'Created At',
    createdBy: 'Created By'
  }
};
