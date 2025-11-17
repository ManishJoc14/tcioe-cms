import { DynamicInfoSectionProps } from '@/components/detail-section/types';
import { ICampusEventsDetails } from '../../redux/types';

export const viewCampusEventsConfig: Omit<DynamicInfoSectionProps<ICampusEventsDetails>, 'data'> = {
  excludeFields: [
    'id',
    'thumbnail',
    'createdAt',
    'updatedAt',
    'createdBy',
    'updatedBy',
    'descriptionDetailed',
    'descriptionShort',
    'isActive'
  ],
  fieldOrder: ['title', 'eventStartDate', 'eventEndDate', 'eventType', 'createdAt', 'createdBy'],
  booleanFields: ['isActive'],
  dateTimeFields: ['eventStartDate', 'eventEndDate', 'createdAt'],
  columns: 4,
  customLabels: {
    title: 'Title',
    eventStartDate: 'Event Start Date',
    eventEndDate: 'Event End Date',
    eventType: 'Event Type',
    createdAt: 'Created At',
    createdBy: 'Created By'
  }
};
