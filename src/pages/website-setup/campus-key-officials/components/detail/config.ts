import { DynamicInfoSectionProps } from '@/components/detail-section/types';
import { ICampusKeyOfficialsDetails } from '../../redux/types';

export const viewCampusKeyOfficialsConfig: Omit<DynamicInfoSectionProps<ICampusKeyOfficialsDetails>, 'data'> = {
  excludeFields: ['id', 'photo', 'createdAt', 'updatedAt', 'createdBy', 'updatedBy', 'message', 'isActive', 'titlePrefix'],
  fieldOrder: ['designation', 'fullName', 'email', 'phoneNumber'],
  booleanFields: ['isActive'],
  columns: 4,
  customLabels: {
    designation: 'Designation',
    fullName: 'Full Name',
    email: 'Email',
    phoneNumber: 'Phone Number'
  }
};
